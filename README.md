# Unhandled Exception Crash in Node.js Server

This repository demonstrates a common error in Node.js servers: crashing due to unhandled exceptions.  The `bug.js` file shows a server that throws an error without proper handling, causing the server to terminate unexpectedly. The `bugSolution.js` file provides a corrected version with robust error handling.  This example highlights the importance of using `try...catch` blocks and `process.on('uncaughtException')` for better server stability and preventing crashes. 