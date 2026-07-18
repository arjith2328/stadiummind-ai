import os
import logging
from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings

logger = logging.getLogger(__name__)

EMBEDDINGS_MODEL = "sentence-transformers/all-MiniLM-L6-v2"
INDEX_PATH = "app/ai/faiss_index"

class VectorStoreManager:
    _instance = None
    _embeddings = None
    _vector_store = None

    @classmethod
    def get_instance(cls):
        """Singleton implementation to ensure embeddings and FAISS index are loaded exactly once."""
        if cls._instance is None:
            cls._instance = cls()
            cls._instance._initialize()
        return cls._instance

    def _initialize(self):
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

    def get_retriever(self, search_type="mmr", k=3):
        return self._vector_store.as_retriever(search_type=search_type, search_kwargs={"k": k})

# Global Dependency Injection for FastAPI
vector_store_manager = VectorStoreManager.get_instance()
