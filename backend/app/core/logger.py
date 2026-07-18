import logging
import sys
import json
from datetime import datetime, timezone
from typing import Any, Dict
from app.core.config import settings

class JSONFormatter(logging.Formatter):
    """
    Enterprise-grade JSON formatter for centralized logging systems.
    """
    def format(self, record: logging.LogRecord) -> str:
        log_entry: Dict[str, Any] = {
            "timestamp": datetime.fromtimestamp(record.created, tz=timezone.utc).isoformat(),
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
            "module": record.module,
            "funcName": record.funcName,
            "lineNo": record.lineno,
        }
        
        if record.exc_info:
            log_entry["exception"] = self.formatException(record.exc_info)
            
        return json.dumps(log_entry)

def setup_logger(name: str) -> logging.Logger:
    """
    Configures and returns a centralized structured JSON logger.
    """
    logger = logging.getLogger(name)
    logger.setLevel(logging.INFO)
    
    if not logger.handlers:
        handler = logging.StreamHandler(sys.stdout)
        handler.setLevel(logging.INFO)
        handler.setFormatter(JSONFormatter())
        logger.addHandler(handler)
        
    # Prevent propagation to root logger to avoid duplicate logs
    logger.propagate = False
    return logger

logger = setup_logger(settings.PROJECT_NAME)
