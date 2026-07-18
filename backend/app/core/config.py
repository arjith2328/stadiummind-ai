from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache

class Settings(BaseSettings):
    PROJECT_NAME: str = "StadiumMind AI API"
    API_V1_STR: str = "/api/v1"
    FRONTEND_URL: str = "http://localhost:3000"
    SECRET_KEY: str = "supersecretkey-change-in-production-12345"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8  # 8 days
    ALGORITHM: str = "HS256"
    
    # Database (Defaulting to SQLite for local scaffolding ease, swap to asyncpg/Postgres in prod)
    DATABASE_URL: str = "sqlite+aiosqlite:///./stadiummind.db"
    
    # AI
    GEMINI_API_KEY: str = ""
    AI_MODEL_NAME: str = "gemini-2.5-flash"
    AI_TEMPERATURE: float = 0.0
    RAG_K_RETRIEVALS: int = 3
    model_config = SettingsConfigDict(env_file=".env", case_sensitive=True)

@lru_cache()
def get_settings():
    return Settings()

settings = get_settings()
