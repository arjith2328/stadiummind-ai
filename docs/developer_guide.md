# StadiumMind AI - Developer & Testing Guide

This guide details how to extend, test, and deploy the application.

## Local Development (Without Docker)

### Backend
```bash
cd backend
python -m venv venv
source venv/Scripts/activate # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend
```bash
cd stadiummind-ai
npm install
npm run dev
```

## Testing Suites

StadiumMind AI enforces strict QA pipelines.

### Running Backend Tests (Pytest)
```bash
cd backend
pytest -v --cov=app
```
*Note: This verifies the FAISS Singleton patterns and LLM Context truncation boundaries.*

### Running Frontend Tests (Playwright)
```bash
cd stadiummind-ai
npx playwright test
```
*Note: This executes E2E testing for UI rendering and WCAG structural compliance.*

## CI/CD Pipelines
Pushing to the `main` or `develop` branches automatically triggers GitHub Actions for:
1. Python Black formatting & Ruff linting.
2. Bandit Security Scanning.
3. Next.js ESLinting & Type Checking.
4. Automated Pytest & Playwright runs.
