# Gemini Proxy App

This project is a simple Node.js proxy server that interacts with the Gemini API (or any other external API) securely via a `.env` file. It also includes a front-end interface (`index.html`) to interact with the backend.

## 🚀 Features

- Secure API calls using environment variables
- Local `.env` for storing sensitive keys (not pushed to GitHub)
- Frontend UI with HTML + JavaScript
- Compatible with Render deployment

## 📁 Project Structure

gemini-proxy/
├── .env # Environment variables (not committed)
├── .gitignore # Prevents .env, node_modules from being pushed
├── server.js # Node.js backend server
├── package.json # Project metadata and dependencies
├── index.html # Frontend interface