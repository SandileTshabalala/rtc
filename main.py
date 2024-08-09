from flask import Flask, render_template, request, redirect, url_for
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

# Store peer IDs in-memory for simplicity; use a database in production
peer_ids = []

@app.route('/')
def index():
    return render_template('index.html', peers=peer_ids)

@app.route('/call')
def call():
    peer_id = request.args.get('peer_id')
    if peer_id and peer_id not in peer_ids:
        peer_ids.append(peer_id)
    return render_template('call.html', peer_id=peer_id)

@app.route('/peers')
def peers():
    return render_template('peers.html', peers=peer_ids)

if __name__ == '__main__':
    socketio.run(app, host="0.0.0.0", debug=True, allow_unsafe_werkzeug=True, port=3000)
