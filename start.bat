@echo off

REM Function to execute npm commands in a directory and display messages
:execute_npm_commands
  cd %1% || (
    echo Error: Couldn't change directory to %1%
    exit /b 1
  )
  
  echo --------------------------------
  echo Entering directory: %1%

  for %%i in (%*) do (
    echo Running: npm %%i
    npm %%i
    if errorlevel 1 (
      echo Error: npm %%i failed in directory %1%
    )
  )

  echo Exited directory: %1%
  echo --------------------------------
  cd %~dp0  REM Change back to the script's directory

REM Start the script
echo Starting the deployment process...

REM Install and start backend_api in a new Command Prompt window
start cmd /k "cd backend_api && npm install && node api.js"

REM Install and start backend_server in a new Command Prompt window
start cmd /k "cd backend_server && npm install && npm start"

REM Install and start the frontend in a new Command Prompt window
start cmd /k "cd frontend && npm install && npm run serve"

REM Script completed
echo Deployment process completed.
