import logging
import sys
from app.core.config import settings

def setup_logger(name: str) -> logging.Logger:
    """
    Configures and returns a centralized logger with standard formatting.
    """
    logger = logging.getLogger(name)
    logger.setLevel(logging.INFO)
    
    # Avoid adding handlers multiple times if instantiated repeatedly
    if not logger.handlers:
        handler = logging.StreamHandler(sys.stdout)
        handler.setLevel(logging.INFO)
        formatter = logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        )
        handler.setFormatter(formatter)
        logger.addHandler(handler)
        
    return logger

# Global instance for quick access
logger = setup_logger(settings.PROJECT_NAME)
