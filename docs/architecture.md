# StadiumMind AI - Architecture Guide

This document details the enterprise-grade architecture engineered for the StadiumMind AI hackathon submission.

## Overall System Architecture

StadiumMind AI utilizes a decoupled, containerized microservices architecture to ensure 1,000,000+ user scalability.

```mermaid
graph TD
    subgraph Client Layer
        Web[Next.js 15 Frontend - React Server Components]
        Mobile[PWA Mobile Installation]
    end

    subgraph API Layer
        FastAPI[FastAPI Gateway & Routers]
        Security[OWASP Middleware & Rate Limiting]
        FastAPI --> Security
    end

    subgraph AI Engine
        LangChain[LangChain Orchestrator]
        FAISS[FAISS Vector Store Singleton]
        Gemini[Google Gemini 2.5 Flash]
        Router[Semantic Intent Router]
        LangChain --> Router
        Router --> FAISS
        Router --> Gemini
    end

    subgraph Data Layer
        Postgres[(PostgreSQL 15)]
        Redis[(Redis 7 Cache)]
    end

    Web -->|HTTPS| FastAPI
    Mobile -->|HTTPS| FastAPI
    FastAPI -->|Async| LangChain
    FastAPI -->|AsyncPg| Postgres
    FastAPI -->|aioredis| Redis
```

## The RAG (Retrieval-Augmented Generation) Pipeline

Our AI implementation strictly guards against hallucination and prompt injection via a robust LangChain Expression Language (LCEL) pipeline.

```mermaid
flowchart LR
    User([User Query]) --> API[FastAPI /api/v1/ai/chat]
    API --> Router{Intent Classification}
    Router -->|General| Retriever[FAISS Search k=3]
    Router -->|Emergency| EmergencyProtocol[Strict Safety Override]
    Retriever --> Formatter[Context Truncator 8000 chars]
    Formatter --> Prompt[ChatPromptTemplate w/ System Defenses]
    EmergencyProtocol --> Prompt
    Prompt --> Gemini[Gemini LLM]
    Gemini --> Parser[StrOutputParser]
    Parser --> User
```

## Security & Scaling Strategy
- **Containerization:** Next.js outputs as a `standalone` node binary; FastAPI runs on `uvicorn` with optimized worker threads.
- **Singleton Memory:** FAISS indices and HuggingFace models are loaded exactly once per pod, eliminating blocking I/O overhead.
