from flask import Flask, render_template
from flask_socketio import SocketIO, emit, join_room, leave_room

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/call')
def call():
    return render_template('call.html')

@socketio.on('join')
def on_join(data):
    room = data.get('room')
    join_room(room)
    emit('status', {'msg': f'User has entered the room {room}.'}, room=room)

@socketio.on('leave')
def on_leave(data):
    room = data.get('room')
    leave_room(room)
    emit('status', {'msg': f'User has left the room {room}.'}, room=room)

@socketio.on('offer')
def handle_offer(data):
    room = data.get('room')
    emit('offer', data, room=room)

@socketio.on('answer')
def handle_answer(data):
    room = data.get('room')
    emit('answer', data, room=room)

@socketio.on('ice-candidate')
def handle_ice_candidate(data):
    room = data.get('room')
    emit('ice-candidate', data, room=room)

if __name__ == '__main__':
    socketio.run(app, host="0.0.0.0", debug=True, allow_unsafe_werkzeug=True, port=3000)
