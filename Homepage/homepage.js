$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const role = urlParams.get('role'); 

  if (role === "admin") {
      loadAllStudents();
  } else if (role === "student") {
      loadStudentDetails();
  } else {
      $("#message").text("Invalid role. Access denied.");
  }

  function loadAllStudents() {
      let tableContent = "";
      for (let user of users) {
          let userDetails = user_details.find(detail => detail.userId === user.userId);
          let parentDetails = parents.find(parent => parent.userId === user.userId);
          
          if (userDetails && parentDetails) {
              tableContent += `
                  <tr><td><strong>Name</strong></td><td>${userDetails.firstName} ${userDetails.lastName}</td></tr>
                  <tr><td><strong>Email</strong></td><td>${user.email}</td></tr>
                  <tr><td><strong>Username</strong></td><td>${user.username}</td></tr>
                  <tr><td><strong>Gender</strong></td><td>${userDetails.gender}</td></tr>
                  <tr><td><strong>Address</strong></td><td>${userDetails.address}</td></tr>
                  <tr><td><strong>Roll No</strong></td><td>${userDetails.rollno}</td></tr>
                  <tr><td><strong>Class</strong></td><td>${userDetails.class}</td></tr>
                  <tr><td><strong>Father</strong></td><td>${parentDetails.father}</td></tr>
                  <tr><td><strong>Mother</strong></td><td>${parentDetails.mother}</td></tr>
                  <tr><td><strong>Contact</strong></td><td>${parentDetails.contact}</td></tr>
                  <tr><td colspan="2"><hr></td></tr>
              `;
          }
      }
      $("#userDetails").html(tableContent);
  }

  function loadStudentDetails() {
      let userId = users.find(user => user.roleId === 2)?.userId;
      let userData = users.find(user => user.userId === userId);
      let userDetails = user_details.find(detail => detail.userId === userId);
      let parentDetails = parents.find(parent => parent.userId === userId);

      if (userData && userDetails && parentDetails) {
          $("#userDetails").html(`
              <tr><td><strong>Name</strong></td><td>${userDetails.firstName} ${userDetails.lastName}</td></tr>
              <tr><td><strong>Email</strong></td><td>${userData.email}</td></tr>
              <tr><td><strong>Username</strong></td><td>${userData.username}</td></tr>
              <tr><td><strong>Gender</strong></td><td>${userDetails.gender}</td></tr>
              <tr><td><strong>Address</strong></td><td>${userDetails.address}</td></tr>
              <tr><td><strong>Roll No</strong></td><td>${userDetails.rollno}</td></tr>
              <tr><td><strong>Class</strong></td><td>${userDetails.class}</td></tr>
              <tr><td><strong>Father</strong></td><td>${parentDetails.father}</td></tr>
              <tr><td><strong>Mother</strong></td><td>${parentDetails.mother}</td></tr>
              <tr><td><strong>Contact</strong></td><td>${parentDetails.contact}</td></tr>
          `);
      } else {
          $("#message").text("Details not found");
      }
  }

  $("#logoutBtn").click(function () {
      window.location.href = "/Login/login.html";
  });
});
