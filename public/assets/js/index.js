const nameInput = $("#nameInput");
const emailInput = $("#emailInput");
const topicInput = $("#topicInput");
const messageInput = $("#messageInput");
const submitBtn = $("#submitBtn");
const messageForm = $("#messageForm");

const saveMessage = function(message) {
    return $.ajax({
        url: "./api/messages",
        data: message,
        method: "POST"
    });
}

const handleMessageSave = function() {
    const newMessage = {
        name: nameInput.val(),
        email: emailInput.val(),
        topic: topicInput.val(),
        message: messageInput.val()
    };

    saveMessage(newMessage).then((data) => {
        console.log(data);
    });
}

messageForm.on("submit", handleMessageSave);