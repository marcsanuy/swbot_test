new Vue({
    el: '#app',

    data: {
        botIsWriting: false,
        newMsg: "",
        messageList: [],
        messagesKey: 'inbenta.yodachat.messages', // Updated: Name of the key containing the messages
    },
    
    created: function () {
        // Uses Created Lifecycle hook to restore history chat
        this.messageList = this.getChatSession();
    },

    watch: {
        messageList: function () {
            // Input always on viewport
            setTimeout(function () {
                window.scrollTo(0, document.body.scrollHeight);
            }, 100);
        }
    },

    methods: {
        getChatSession() {
            var chatSession = sessionStorage.getItem(this.messagesKey);
            if (chatSession) {
                return JSON.parse(chatSession);
            } else {
                sessionStorage.setItem(this.messagesKey, JSON.stringify([]));
                return [];
            }
        },
        removeSessionStorage(){
            // Updated: Delete all messages in the LocalStorage with the key
            sessionStorage.removeItem(this.messagesKey);

            // Updated: Deletes all messages in the messageList variable.
            this.messageList = [];
        },
        newMessage() {
            if (this.newMsg) {
                var messageItem = { bot: false, content: this.newMsg };
                this.messageList.push(messageItem);
                this.botIsWriting = true;
                this.sendMessage(this.newMsg);
                this.saveMessageToHistory(messageItem);
                this.newMsg = "";
            }
        },
        saveMessageToHistory(message) {
            $chatSession = this.getChatSession();
            $chatSession.push(message);
            sessionStorage.setItem(this.messagesKey, JSON.stringify($chatSession));
        },
        sendMessage(message) {
            // Make AJAX POST request to send message in JSON format
            var self = this;
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("load", function () {
                self.receiveMessage(xhr.responseText);
            });
            xhr.open("POST", "message.php");
            xhr.setRequestHeader('Content-type', 'application/json')
            xhr.send(JSON.stringify({ "message": message }));
        },
        receiveMessage(message) {
            var messageItem = { bot: true, content: message };
            this.messageList.push(messageItem);
            this.botIsWriting = false;
            this.saveMessageToHistory(messageItem);
        }
    }
});