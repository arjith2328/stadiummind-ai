import re
from fastapi import HTTPException

# Common keywords used in prompt injection attacks
INJECTION_PATTERNS = [
    r"ignore previous instructions",
    r"disregard previous",
    r"system prompt",
    r"you are now a",
    r"forget what I said",
    r"bypass",
    r"jailbreak"
]

def sanitize_ai_input(user_input: str) -> str:
    """
    Validates user input against known prompt injection heuristics.
    In a true enterprise environment, this might call a secondary LLM 
    (like a safety classifier) or use a robust library like LLM Guard.
    """
    if not user_input or len(user_input.strip()) == 0:
        raise HTTPException(status_code=400, detail="Input cannot be empty.")
    
    # Check for excessive length (potential buffer or context window exhaustion)
    if len(user_input) > 2000:
        raise HTTPException(status_code=400, detail="Input is too long.")
        
    lower_input = user_input.lower()
    for pattern in INJECTION_PATTERNS:
        if re.search(pattern, lower_input):
            raise HTTPException(
                status_code=403, 
                detail="Security violation: Potential prompt injection detected."
            )
            
    # Simple HTML/Script tag sanitization
    sanitized = re.sub(r"<[^>]*>", "", user_input)
    return sanitized
