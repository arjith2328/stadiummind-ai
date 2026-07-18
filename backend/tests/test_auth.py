import pytest
from datetime import timedelta
import jwt
from fastapi import HTTPException
from app.security.auth import create_access_token, get_current_user
from app.core.config import settings

def test_create_access_token():
    """Test that a valid JWT token is generated."""
    data = {"sub": "testuser"}
    token = create_access_token(data)
    assert isinstance(token, str)
    
    # Decode to verify
    payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
    assert payload["sub"] == "testuser"
    assert "exp" in payload

@pytest.mark.asyncio
async def test_get_current_user_valid():
    """Test that valid token returns the username."""
    token = create_access_token({"sub": "admin_user"})
    username = await get_current_user(token=token)
    assert username == "admin_user"

@pytest.mark.asyncio
async def test_get_current_user_invalid_token():
    """Test that an invalid token raises a 401 error."""
    invalid_token = "invalid.token.string"
    with pytest.raises(HTTPException) as exc_info:
        await get_current_user(token=invalid_token)
    assert exc_info.value.status_code == 401
    assert "Could not validate credentials" in exc_info.value.detail

@pytest.mark.asyncio
async def test_get_current_user_expired_token():
    """Test that an expired token raises a 401 error."""
    # Create token expired 1 minute ago
    expired_delta = timedelta(minutes=-1)
    token = create_access_token({"sub": "testuser"}, expires_delta=expired_delta)
    with pytest.raises(HTTPException) as exc_info:
        await get_current_user(token=token)
    assert exc_info.value.status_code == 401
