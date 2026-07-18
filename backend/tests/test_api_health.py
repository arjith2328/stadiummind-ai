import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.core.config import settings

client = TestClient(app)

def test_health_check_endpoint():
    """
    Test the health check API to verify the server responds with a 200 OK.
    """
    response = client.get(f"{settings.API_V1_STR}/health/live")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert "running" in data["message"].lower()

def test_root_health_check():
    """
    Test the backwards compatible root health check API.
    """
    response = client.get("/health/live")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
