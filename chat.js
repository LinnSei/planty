document.addEventListener('DOMContentLoaded', function () {
    const chatPopup = document.getElementById('chatPopup');
    const chatToggle = document.getElementById('chatToggle');
    const chatHeader = document.getElementById('chatHeader');
    const closeBtn = document.getElementById('closeBtn');
    const sendBtn = document.getElementById('sendBtn');
    const chatInput = document.getElementById('chatInput');
    const messagesDiv = document.getElementById('messages');

    chatToggle.addEventListener('click', function () {
        chatPopup.style.display = 'flex';
        chatToggle.style.display = 'none';
    });

    chatHeader.addEventListener('click', function () {
        chatPopup.style.display = 'none';
        chatToggle.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        chatPopup.style.display = 'none';
        chatToggle.style.display = 'block';
    });

    sendBtn.addEventListener('click', function () {
        const message = chatInput.value.trim();

        if (message) {
            addMessage(message);
            chatInput.value = ''; 
        }
    });

    function addMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'user-message');
        messageDiv.textContent = message;
        messagesDiv.appendChild(messageDiv);

        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });

    document.addEventListener('click', function (event) {
        if (!chatPopup.contains(event.target) && !chatToggle.contains(event.target)) {
            chatPopup.style.display = 'none';
            chatToggle.style.display = 'block';
        }
    });
});
