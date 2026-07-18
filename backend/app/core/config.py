from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache

class Settings(BaseSettings):
    """
    Application settings with strict Pydantic validation.
    Values are overridden by environment variables or .env file.
    """
    PROJECT_NAME: str = "StadiumMind AI API"
    API_V1_STR: str = "/api/v1"
    FRONTEND_URL: str = "http://localhost:3000"
    SECRET_KEY: str = "supersecretkey-change-in-production-12345"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8  # 8 days
    ALGORITHM: str = "HS256"
    
    # Database
    DATABASE_URL: str = "sqlite+aiosqlite:///./stadiummind.db"
    
    # AI configuration
    GEMINI_API_KEY: str = ""
    AI_MODEL_NAME: str = "gemini-2.5-flash"
    AI_TEMPERATURE: float = 0.0
    RAG_K_RETRIEVALS: int = 3
    
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", case_sensitive=True)

@lru_cache()
def get_settings() -> Settings:
    """
    Retrieves the cached application settings.
    """
    return Settings()

settings = get_settings()
