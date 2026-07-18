from fastapi import APIRouter, Response
from pydantic import BaseModel

router = APIRouter()

class HealthResponse(BaseModel):
    status: str
    message: str

@router.get("/live", response_model=HealthResponse)
async def health_check(response: Response):
    """
    Returns the basic health status of the API.
    Used for load balancer checks and basic liveness probes.
    """
    response.headers["Cache-Control"] = "public, max-age=60"
    return HealthResponse(status="ok", message="API is running nominally.")
