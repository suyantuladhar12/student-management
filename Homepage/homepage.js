$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const role = urlParams.get('role');

    if (role === "admin") {
        $("#studentProfileContainer").hide();
        $("#enrollment").hide();
        $("#announcements").hide();
        $("#faq").hide();
        $("#support").hide();
        $("#adminView").show();
        $("#nav-students").hide();
        displayAdminProfileList();
    } else if (role === "student") {
        $("#adminView").hide();
        $("#nav-admin").hide();
        displayStudentProfile(userId);
        displayAnnouncements();
        displayFAQs();
        setupSupportSection();
    } else {
        alert('Invalid role or missing role parameter.');
    }

    $("#adminLogoutBtn, #studentLogoutBtn").click(function () {
        handleLogout();
    });
});

function displayStudentProfile(userId) {
    const userDetails = getUserDetailsById(userId);
    const parentDetails = getParentDetailsById(userId);
    const enrollmentDetails = getEnrollmentDetailsById(userId);

    $('#studentProfileContainer').show();
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
    $('#profilePic').attr('src', userDetails.image);
    $("#dateofbirth").text(userDetails.dob);
    $('#hobbies').text(userDetails.hobbies);
    $('#bloodgroup').text(userDetails.bloodg);
    $('#religion').text(userDetails.religion);
    $('#enrollmentdate').text(enrollmentDetails.enrollmentdate);
    $('#departure').text(enrollmentDetails.departuredate);
}

function displayAnnouncements() {
    const announcements = getallAnnouncement();
    const announcementList = $('#announcementList');
    announcementList.empty();

    announcements.forEach(announcement => {
        const card = `
            <div class="col-md-6 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${announcement.title}</h5>
                        <p class="card-text">${announcement.description}</p>
                    </div>
                </div>
            </div>
        `;
        announcementList.append(card);
    });
}

function setupSupportSection() {
    $("#submitSupport").click(function () {
        const message = $("#supportMessage").val().trim();
        if (message) {
            alert("Your message has been submitted. We will get back to you soon!");
            $("#supportMessage").val("");
        } else {
            alert("Please enter a message before submitting.");
        }
    });
}

function displayFAQs() {
    const faqs = getallFaqs();
    const faqAccordion = $('#faqAccordion');
    faqAccordion.empty();

    faqs.forEach((faq, index) => {
        const faqItem = `
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                        ${faq.question}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        ${faq.answer}
                    </div>
                </div>
            </div>
        `;
        faqAccordion.append(faqItem);
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
    $('#modalImage').attr('src', userDetails.image);
    $('#detailsModal').modal('show');
}

function displayAdminProfileList() {
    const students = getAllStudents();
    const profileList = $('#profileList');
    profileList.empty();

    students.forEach(student => {
        const studentCard = `
            <div class="col-md-3 mb-3">
                <div class="card student-card">
                    <img src="${student.image}" class="card-img-top student-img" style =  "height: 170px; width: 150px; display: block; margin: 0 auto; padding-top:15px;" alt="Student Picture">
                    <div class="card-body" style = "padding-left: 20px;">
                        <h5 class="card-title student-title"><br>${student.firstName} ${student.lastName} <br><br></h5>
                        <p class="card-text student-text"><strong>Roll No:</strong> ${student.address}</p>
                        <p class="card-text student-text"><strong>Roll No:</strong> ${student.rollno}</p>
                        <p class="card-text student-text"><strong>Class:</strong> ${student.class}</p>
                        <button class="btn btn-primary btn-sm student-btn" onclick="showStudentDetails(${student.userId})">Details</button>
                    </div>
                </div>
            </div>
        `;
        profileList.append(studentCard);
    });
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

function getEnrollmentDetailsById(userId) {
    return enrollment.find(enrollment => enrollment.userId === Number(userId));
}

function getAllStudents() {
    return user_details.map(details => {
        const user = getUserById(details.userId);
        return { ...details, email: user.email, username: user.username, image: details.image || 'default-image.jpg' };
    });
}

function getallFaqs(){
    return faqs;
}

function getallAnnouncement(){
    return announcements;
}

function handleLogout() {
    window.location.href = "/login/login.html";
}

