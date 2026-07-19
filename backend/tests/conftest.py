import os
import pytest

os.environ["GEMINI_API_KEY"] = "mock_key_for_testing"
os.environ["GOOGLE_API_KEY"] = "mock_key_for_testing"

@pytest.fixture(autouse=True)
def mock_env_vars():
    yield

