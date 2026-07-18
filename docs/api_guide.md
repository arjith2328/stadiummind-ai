# StadiumMind AI - API Documentation

The backend exposes a highly secure, RESTful API built on FastAPI.

## Global Headers
- `Authorization: Bearer <JWT_TOKEN>` (For protected routes)
- Rate Limiting: 100 requests / minute / IP.

## AI Endpoints

### `POST /api/v1/ai/chat`
Streams a response from the StadiumMind AI assistant.

**Request Body:**
```json
{
  "query": "Where is the nearest vegan food?",
  "session_id": "uuid-v4",
  "location": "Section 104"
}
```

**Response (Server-Sent Events / Text):**
```text
"The closest vegan vendor is 'Green Kicks' located near Gate C, approximately a 3-minute walk from Section 104."
```

## Authentication Endpoints (Roadmap)

### `POST /api/v1/auth/login`
**Request:** `{"email": "user@test.com", "password": "..."}`
**Response:** `{"access_token": "ey...", "token_type": "bearer"}`

## Error Codes
- `400 Bad Request`: Invalid input (caught by Pydantic).
- `401 Unauthorized`: Missing or invalid JWT.
- `429 Too Many Requests`: Triggered by Redis/In-Memory Rate Limiting middleware.
- `500 Internal Server Error`: Caught by the global exception handler (never leaks stack traces).
