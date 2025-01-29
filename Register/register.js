$(document).ready(function () {
    $("#registerButton").click(handleRegistration);
});

function handleRegistration() {
    const userData = getUserInput();

    if (!validateInput(userData)) {
        $("#message").text("Fill all the details please.");
        return;
    }

    if (isDuplicateUser(userData.username, userData.email)) {
        $("#message").text("Email address or Username already exists.");
        return;
    }

    registerUser(userData);
    $("#message").text("Done!");
    window.location.href = "/login/login.html";
}

function getUserInput() {
    return {
        firstName: $("#firstName").val().trim(),
        lastName: $("#lastName").val().trim(),
        gender: $("input[name='gender']:checked").val(),
        username: $("#username").val().trim(),
        email: $("#email").val().trim(),
        password: $("#password").val(),
    };
}

function validateInput(userData) {
    return Object.values(userData).every((value) => value);
}

function isDuplicateUser(username, email) {
    return users.some((user) => user.username === username || user.email === email);
}

function registerUser(userData) {
    users.push(userData);
}
