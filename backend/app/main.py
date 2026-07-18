from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.security.middleware import SecurityHeadersMiddleware, RateLimitMiddleware
import logging

# Configure basic logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    description="Enterprise-grade smart stadium backend for FIFA 2026."
)

# ---------------------------------------------------------
# GLOBAL EXCEPTION HANDLER
# ---------------------------------------------------------
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logger.error(f"Unhandled Exception on {request.url}: {exc}")
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal Server Error. Our engineers have been notified."},
    )

# ---------------------------------------------------------
# MIDDLEWARE STACK
# ---------------------------------------------------------
# 1. Security Headers (OWASP)
app.add_middleware(SecurityHeadersMiddleware)
# 2. Rate Limiting (DDoS protection)
app.add_middleware(RateLimitMiddleware)
# 3. CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict to strictly frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------
# HEALTH ROUTE
# ---------------------------------------------------------
@app.get("/health/live")
async def health_check():
    return {"status": "ok", "message": "StadiumMind AI API is highly secure and running."}
