# Real-time Chat Application

A real-time chat application built with Flask and Socket.IO for customer service conversations.

## Features

- Real-time chat interface
- Multiple client conversations
- Admin panel for managing client chats
- Socket.IO for real-time communication
- Simple in-memory peer management

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Start the development server:
```bash
python main.py
```

3. Open your browser and navigate to `http://localhost:3000`

## Technologies Used

- Python Flask
- Flask-SocketIO
- HTML/CSS/JavaScript
- Socket.IO client

## Usage

1. Open the application in your browser
2. Connect as a peer using a unique ID
3. Start chatting with other peers
4. Use the admin interface to manage conversations

## Project Structure

- `main.py`: Flask application and Socket.IO setup
- `templates/`: HTML templates
- `static/`: Static assets (CSS, JavaScript)
- `script.js`: Client-side chat functionality
- `styles.css`: Application styling

