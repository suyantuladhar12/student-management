$(document).ready(function () {
    $(document).keypress(function (event) {
        if (event.which === 13) {
            handleLogin();
        }
    });

    $("#submitButton").click(function () {
        handleLogin();
    });
});

function handleLogin() {
    const emailOrUsername = $("#emailOrUsername").val().trim();
    const password = $("#password").val().trim();

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
    const role = getRoleFromId(user.roleId);
    if (role) {
        window.location.href = `/homepage/homepage.html?role=${role}&userId=${user.userId}`;
    } else {
        console.error('Role not found!');
    }
}


function getRoleFromId(roleId) {
    if (roleId === 1) return "admin";
    if (roleId === 2) return "student";
    return null;
}
