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

    if ($("#alertModal")) {
        $("#alertModal").remove();
    }
    if ($("#successModal")) {
        $("#successModal").remove();
    }

    if (!nameInput.val() || !emailInput.val() || !topicInput.val() || !messageInput.val()) {
        $("#messageForm").before(
            $("<h5>").text("Please fill out all fields.")
                .addClass("m-4 p-1 w-25 text-center rounded text-white bg-warning")
                .attr("id", "alertModal"));
        return;
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
        submitBtn.before(
            $("<h5>").text("Message sent!")
                .addClass("mb-3 p-1 w-25 text-center rounded text-white bg-success")
                .attr("id", "successModal"));

        // Clears all input fields
        nameInput.val("");
        emailInput.val("");
        topicInput.val("");
        messageInput.val("");
    });
    setTimeout(() => {
        $("#successModal").remove();
    }, 3000);
}

messageForm.on("submit", handleMessageSave);