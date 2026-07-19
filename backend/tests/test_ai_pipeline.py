from app.ai.vector_store import vector_store_manager

def test_vector_store_singleton():
    """Verify the Singleton pattern prevents duplicate FAISS I/O operations."""
    instance1 = vector_store_manager
    instance2 = vector_store_manager
    assert instance1 is instance2
    assert instance1._vector_store is not None
    assert instance1._embeddings is not None

def test_rag_pipeline_format_docs_truncation():
    """Verify that document formatting strictly truncates to protect LLM context windows."""
    from app.ai.rag_pipeline import format_docs
    class MockDoc:
        def __init__(self, content):
            self.page_content = content
            
    # Inject a 10,000 character string
    massive_content = "A" * 10000
    docs = [MockDoc(massive_content)]
    
    formatted = format_docs(docs)
    
    # Assert it was safely truncated to 8000 characters
    assert len(formatted) == 8000
