$(document).keypress(function (event) {
    if (event.which === 13) {  
        handleLogin();
    }
});

function handleLogin() {
    const emailOrUsername = $("#emailOrUsername").val();
    const password = $("#password").val();

    $("#emailError").text("");
    $("#passwordError").text("");

    if (!validateInput(emailOrUsername, password)) return;

    const user = findUser(emailOrUsername, password);
    
    if (user) {
        redirectToHomepage(user);
    } else {
        $("#passwordError").text("Invalid email/username or password.");
    }
}

function validateInput(emailOrUsername, password) {
    let isValid = true;

    if (!emailOrUsername) {
        $("#emailError").text("Email/Username is missing.");
        isValid = false;
    }
    if (!password) {
        $("#passwordError").text("Password missing.");
        isValid = false;
    }

    return isValid;
}

function findUser(emailOrUsername, password) {
    return users.find(user => 
        (user.email === emailOrUsername || user.username === emailOrUsername) && user.password === password
    );
}

function redirectToHomepage(user) {
    const role = user.roleId === 1 ? "admin" : "student";
    window.location.href = `/homepage/homepage.html?role=${role}`;
}
