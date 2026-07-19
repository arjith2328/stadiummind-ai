import os
import logging
from typing import Optional
from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_core.vectorstores import VectorStoreRetriever

logger = logging.getLogger(__name__)

EMBEDDINGS_MODEL = "sentence-transformers/all-MiniLM-L6-v2"
INDEX_PATH = "app/ai/faiss_index"

class VectorStoreManager:
    """Manages the lifecycle of the FAISS vector store and embeddings model."""
    _instance: Optional['VectorStoreManager'] = None
    _embeddings: Optional[HuggingFaceEmbeddings] = None
    _vector_store: Optional[FAISS] = None

    @classmethod
    def get_instance(cls) -> 'VectorStoreManager':
        """Singleton implementation to ensure embeddings and FAISS index are loaded exactly once."""
        if cls._instance is None:
            cls._instance = cls()
            cls._instance._initialize()
        return cls._instance

    def _initialize(self) -> None:
        """Initializes the FAISS vector store and HuggingFace embeddings model."""
        logger.info("Initializing HuggingFaceEmbeddings singleton...")
        self._embeddings = HuggingFaceEmbeddings(model_name=EMBEDDINGS_MODEL)
        
        if os.path.exists(INDEX_PATH):
            logger.info("Loading existing FAISS index from disk...")
            self._vector_store = FAISS.load_local(
                INDEX_PATH, 
                self._embeddings, 
                allow_dangerous_deserialization=True
            )
        else:
            logger.info("No FAISS index found. Creating initial empty schema...")
            self._vector_store = FAISS.from_texts(
                ["StadiumMind AI Initialization Document. Welcome to FIFA 2026."], 
                self._embeddings
            )
            os.makedirs(os.path.dirname(INDEX_PATH), exist_ok=True)
            self._vector_store.save_local(INDEX_PATH)

    def get_retriever(self, search_type: str = "mmr", k: int = 3) -> VectorStoreRetriever:
        """
        Returns a configured retriever from the FAISS vector store.
        
        Args:
            search_type (str): The type of search to perform (default: 'mmr').
            k (int): Number of documents to retrieve (default: 3).
            
        Returns:
            VectorStoreRetriever: The configured retriever.
        """
        if self._vector_store is None:
            raise RuntimeError("Vector store not initialized")
        return self._vector_store.as_retriever(search_type=search_type, search_kwargs={"k": k})

# Global Dependency Injection for FastAPI
vector_store_manager = VectorStoreManager.get_instance()
