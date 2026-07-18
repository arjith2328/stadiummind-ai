import logging
from app.core.config import settings
from app.ai.vector_store import vector_store_manager
from app.ai.prompts import GENERAL_RAG_PROMPT
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser

logger = logging.getLogger(__name__)

# LLM Initialization based on strict environment configs
llm = ChatGoogleGenerativeAI(
    model=settings.AI_MODEL_NAME, 
    temperature=settings.AI_TEMPERATURE, 
    google_api_key=settings.GEMINI_API_KEY
)

def format_docs(docs):
    """Formats retrieved context, truncating if necessary to protect context window limit/costs."""
    concatenated = "\n\n".join(doc.page_content for doc in docs)
    # Truncate to a safe token limit approximation (e.g., 8000 chars)
    return concatenated[:8000]

def build_rag_chain():
    """
    Builds the optimized Retrieval-Augmented Generation (RAG) pipeline.
    Utilizes the Singleton FAISS retriever to ensure zero blocking I/O overhead per request.
    """
    logger.info(f"Building RAG chain with k={settings.RAG_K_RETRIEVALS} retrievals")
    retriever = vector_store_manager.get_retriever(
        search_type="mmr", 
        k=settings.RAG_K_RETRIEVALS
    )
    
    rag_chain = (
        {"context": retriever | format_docs, "question": RunnablePassthrough()}
        | GENERAL_RAG_PROMPT
        | llm
        | StrOutputParser()
    )
    return rag_chain

async def generate_rag_response(question: str) -> str:
    """
    Async LCEL execution wrapper with basic telemetry.
    """
    try:
        chain = build_rag_chain()
        logger.info(f"Executing RAG pipeline for query: {question[:50]}...")
        response = await chain.ainvoke(question)
        return response
    except Exception as e:
        logger.error(f"Error in RAG pipeline: {str(e)}")
        raise
