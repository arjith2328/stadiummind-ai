# Starts Backend in a new window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; if (Test-Path venv\Scripts\activate.ps1) { .\venv\Scripts\activate } else { echo 'No venv found, make sure to set it up.' }; uvicorn app.main:app --reload"

# Starts Frontend in a new window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd stadiummind-ai; npm run dev"

Write-Host "Started both Frontend and Backend in separate windows!" -ForegroundColor Green
