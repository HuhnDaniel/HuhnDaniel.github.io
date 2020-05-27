const nameInput = $("#nameInput");
const emailInput = $("#emailInput");
const topicInput = $("#topicInput");
const messageInput = $("#messageInput");
const submitBtn = $("#submitBtn");
const messageForm = $("#messageForm");

const saveMessage = (message) => {
    return $.ajax({
        url: "./api/messages",
        data: message,
        method: "POST"
    });
}

const handleMessageSave = () => {
    event.preventDefault();

    if (!nameInput.val() || !emailInput.val() || !topicInput.val() || !messageInput.val()) {
        return console.log("Pease fill out all fields");
    }

    // Saves input field info to a new object
    const newMessage = {
        name: nameInput.val(),
        email: emailInput.val(),
        topic: topicInput.val(),
        message: messageInput.val()
    };

    // Save message to json file then clear inputs
    saveMessage(newMessage).then(() => {
        console.log("Message sent");

        // Clears all input fields
        nameInput.val("");
        emailInput.val("");
        topicInput.val("");
        messageInput.val("");
    });
}

messageForm.on("submit", handleMessageSave);