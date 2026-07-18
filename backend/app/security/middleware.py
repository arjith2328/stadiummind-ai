from fastapi import Request, Response
from starlette.middleware.base import BaseHTTPMiddleware
import time
from typing import Dict, Tuple

class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    """
    Applies strict OWASP security headers to every response, equivalent to Helmet.js.
    """
    async def dispatch(self, request: Request, call_next) -> Response:
        response = await call_next(request)
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["X-XSS-Protection"] = "1; mode=block"
        response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
        response.headers["Content-Security-Policy"] = "default-src 'self'"
        return response

class RateLimitMiddleware(BaseHTTPMiddleware):
    """
    In-memory rate limiter. In a true multi-node production deployment, 
    this logic would point to a Redis cache store.
    """
    _rate_limit_records: Dict[str, Tuple[float, int]] = {}

    async def dispatch(self, request: Request, call_next) -> Response:
        client_ip = request.client.host if request.client else "unknown"
        current_time = time.time()
        
        # Clean up records older than 60 seconds
        self._rate_limit_records = {k: v for k, v in self._rate_limit_records.items() if current_time - v[0] < 60}
        
        if client_ip in self._rate_limit_records:
            timestamp, count = self._rate_limit_records[client_ip]
            if count > 100:  # Limit: 100 requests per minute per IP
                from fastapi.responses import JSONResponse
                return JSONResponse(status_code=429, content={"detail": "Too many requests. Please slow down."})
            self._rate_limit_records[client_ip] = (timestamp, count + 1)
        else:
            self._rate_limit_records[client_ip] = (current_time, 1)
            
        return await call_next(request)
