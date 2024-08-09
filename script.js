const clientConversations = {
    client1: [
        { sender: 'client', message: 'Hello! I need help with my order.' },
        { sender: 'admin', message: 'Sure! Let me assist you with that.' }
    ],
    client2: [
        { sender: 'client', message: 'I have an issue with my payment.' },
        { sender: 'admin', message: 'Please provide more details.' }
    ],
    client3: [
        { sender: 'client', message: 'Can I change my shipping address?' },
        { sender: 'admin', message: 'Yes, I can help you with that.' }
    ]
};

const chatWindow = document.getElementById('chatWindow');
const clientSelect = document.getElementById('clientSelect');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Load the selected client's conversation
function loadConversation(clientId) {
    chatWindow.innerHTML = '';
    const conversation = clientConversations[clientId];
    conversation.forEach(chat => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', chat.sender === 'client' ? 'client-message' : 'admin-message');
        messageDiv.innerHTML = `<p>${chat.message}</p>`;
        chatWindow.appendChild(messageDiv);
    });
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Initial load
loadConversation(clientSelect.value);

// Handle client selection change
clientSelect.addEventListener('change', () => {
    loadConversation(clientSelect.value);
});

// Send a new message
sendButton.addEventListener('click', function() {
    const messageText = messageInput.value;

    if (messageText.trim() !== "") {
        const clientId = clientSelect.value;
        const newMessage = {
            sender: 'admin',
            message: messageText
        };
        
        clientConversations[clientId].push(newMessage);
        loadConversation(clientId);
        messageInput.value = "";
    }
});

// Simulated Call
const callInterface = document.getElementById('callInterface');
const callStatus = document.getElementById('callStatus');
const answerCall = document.getElementById('answerCall');
const endCall = document.getElementById('endCall');
const micToggle = document.getElementById('micToggle');
const videoToggle = document.getElementById('videoToggle');

// Simulate an incoming call
setTimeout(() => {
    callInterface.style.display = 'flex';
}, 3000);

answerCall.addEventListener('click', () => {
    callStatus.innerText = 'In Call';
    answerCall.style.display = 'none';
});

endCall.addEventListener('click', () => {
    callStatus.innerText = 'Call Ended';
    setTimeout(() => {
        callInterface.style.display = 'none';
    }, 2000);
});

micToggle.addEventListener('click', () => {
    micToggle.innerText = micToggle.innerText === 'Mic Off' ? 'Mic On' : 'Mic Off';
    micToggle.classList.toggle('active');
});

videoToggle.addEventListener('click', () => {
    videoToggle.innerText = videoToggle.innerText === 'Video Off' ? 'Video On' : 'Video Off';
    videoToggle.classList.toggle('active');
});

const joinChatButton = document.getElementById('joinChatButton');
const exitChatButton = document.getElementById('exitChatButton');

// Function to handle joining chat
joinChatButton.addEventListener('click', () => {
    // Show the chat window and input when joining a chat
    chatWindow.style.display = 'block';
    document.querySelector('.chat-input').style.display = 'flex';

    // Switch button visibility
    joinChatButton.style.display = 'none';
    exitChatButton.style.display = 'inline-block';

    // Optionally, you could load the selected client's conversation here
    loadConversation(clientSelect.value);
});

// Function to handle exiting chat
exitChatButton.addEventListener('click', () => {
    // Hide the chat window and input when exiting a chat
    chatWindow.style.display = 'none';
    document.querySelector('.chat-input').style.display = 'none';

    // Switch button visibility
    exitChatButton.style.display = 'none';
    joinChatButton.style.display = 'inline-block';
});