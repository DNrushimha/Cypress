@echo off
SETLOCAL

rem Run Cypress tests
npx cypress run

rem Check the exit code to determine success or failure
IF %ERRORLEVEL% EQU 0 (
    echo All tests passed!
    EXIT /B 0  rem Exit with a success code
) ELSE (
    echo Some tests failed.
    EXIT /B 1  rem Exit with a failure code
)
