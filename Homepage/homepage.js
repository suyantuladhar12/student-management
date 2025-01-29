$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const role = urlParams.get('role');

    if (role === "admin") {
        $("#studentProfileContainer").hide();
        $("#adminView").show();
        displayAdminProfileList();
    } else if (role === "student") {
        $("#adminView").hide();
        displayStudentProfile(userId);
    } else {
        alert('Invalid role or missing role parameter.');
    }
    $("#logoutBtn").click(function () {
        handleLogout();
    });
});

function displayStudentProfile(userId) {
    const userDetails = getUserDetailsById(userId);
    const parentDetails = getParentDetailsById(userId);

    $('#studentView').show();
    $('#firstName').text(userDetails.firstName);
    $('#lastName').text(userDetails.lastName);
    $('#email').text(getUserById(userId).email);
    $('#username').text(getUserById(userId).username);
    $('#gender').text(userDetails.gender);
    $('#address').text(userDetails.address);
    $('#rollno').text(userDetails.rollno);
    $('#class').text(userDetails.class);
    $('#father').text(parentDetails.father);
    $('#mother').text(parentDetails.mother);
    $('#contact').text(parentDetails.contact);
}

function displayAdminProfileList() {
    const students = getAllStudents();
    $('#adminView').show();
    $('#profileList').empty(); // Clear previous profiles

    students.forEach(student => {
        const studentCard = `
            <div class="col-md-4">
                <div class="card">
                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="Student Picture">
                    <div class="card-body">
                        <h5 class="card-title">${student.firstName} ${student.lastName}</h5>
                        <p class="card-text">${student.address}</p>
                        <button class="btn btn-primary" onclick="showStudentDetails(${student.userId})">Details</button>
                    </div>
                </div>
            </div>
        `;
        $('#profileList').append(studentCard);
    });
}

function showStudentDetails(userId) {
    const userDetails = getUserDetailsById(userId);
    const parentDetails = getParentDetailsById(userId);

    $('#modalFirstName').text(userDetails.firstName);
    $('#modalLastName').text(userDetails.lastName);
    $('#modalEmail').text(getUserById(userId).email);
    $('#modalUsername').text(getUserById(userId).username);
    $('#modalGender').text(userDetails.gender);
    $('#modalAddress').text(userDetails.address);
    $('#modalRollno').text(userDetails.rollno);
    $('#modalClass').text(userDetails.class);
    $('#modalFather').text(parentDetails.father);
    $('#modalMother').text(parentDetails.mother);
    $('#modalContact').text(parentDetails.contact);

    $('#detailsModal').modal('show');
}

function getUserById(userId) {
    return users.find(user => user.userId === Number(userId));
}

function getUserDetailsById(userId) {
    return user_details.find(details => details.userId === Number(userId));
}

function getParentDetailsById(userId) {
    return parents.find(parent => parent.userId === Number(userId));
}

function getAllStudents() {
    return user_details.map(details => {
        const user = getUserById(details.userId);
        return { ...details, email: user.email, username: user.username };
    });
}

function handleLogout() {
    window.location.href = "/login/login.html";
}