from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.security.middleware import SecurityHeadersMiddleware, RateLimitMiddleware
from app.core.logger import logger
from app.api.v1.router import api_router

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    description="Enterprise-grade smart stadium backend for FIFA 2026."
)

# ---------------------------------------------------------
# GLOBAL EXCEPTION HANDLER
# ---------------------------------------------------------
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception) -> JSONResponse:
    logger.error(f"Unhandled Exception on {request.url}: {exc}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal Server Error. Our engineers have been notified."},
    )

# ---------------------------------------------------------
# MIDDLEWARE STACK
# ---------------------------------------------------------
app.add_middleware(SecurityHeadersMiddleware)
app.add_middleware(RateLimitMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL], # Restricted to frontend
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Authorization", "Content-Type"],
)

# ---------------------------------------------------------
# ROUTER REGISTRATION
# ---------------------------------------------------------
app.include_router(api_router, prefix=settings.API_V1_STR)

# Retain original root health check for backwards compatibility if needed
@app.get("/health/live")
async def health_check_root():
    logger.info("Health check endpoint accessed")
    return {"status": "ok", "message": "StadiumMind AI API is highly secure and running."}

