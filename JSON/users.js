const users = [
  {
    "userId": 1,
    "username": "admin",
    "email" : "admin@gmail.com",
    "password" : "admin",
    "roleId" : 1,
  },
  {
    "userId": 2,
    "username": "reefdongol003",
    "email" : "reefdongol@gmail.com",
    "password" : "123",
    "roleId" : 2,
  },
  {
    "userId": 3,
    "username": "pragya246",
    "email" : "pragya@gmail.com",
    "password" : "234",
    "roleId" : 2,
  }
  ,
  {
    "userId": 4,
    "username": "nickmaharjan23",
    "email" : "nick@gmail.com",
    "password" : "345",
    "roleId" : 2,
  }
];

  const roles = [
    {
      "roleId" : 1,
      "role" : "admin" 
    },
    {
      "roleId" : 2,
      "role" : "student"
    }
  ]

const user_details = [
  {
    "userId" : 2,
    "firstName": "Reef",
    "lastName": "Dangol",
    "gender": "Male",
    "address" : "Thasikhel",
    "rollno" : "34",
    "class" : "10",
    "image": "../images/avatar2.png",
    "dob": "2002-01-01",
    "bloodg" : "A+ve",
    "religion" : "Newar",
    "hobbies" : "Gardening, painting"
  },
  {
    "userId" : 3,
    "firstName": "Pragya",
    "lastName": "Maharjan",
    "gender": "Female",
    "address" : "Pimbahal",
    "rollno" : "27",
    "class" : "10",
    "image": "../images/avatar1.png",
    "dob": "2002-01-02",
    "bloodg" : "B+ve",
    "religion" : "Newar",
    "hobbies" : "Playing football, coding"
  },
  {
    "userId" : 4,
    "firstName": "Nick",
    "lastName": "Maharjan",
    "gender": "Other",
    "address" : "Banglamukhi",
    "rollno" : "16",
    "class" : "9",
    "image": "../images/avatar3.png",
    "dob": "2003-01-01",
    "bloodg" : "AB+ve",
    "religion" : "Newar",
    "hobbies" : "Playing guitar, painting"
  }
]

const parents = [
  {
    "userId" : 2,
    "father" : "Tom Cruse Dangol",
    "mother" : "Lalisa Dangol",
    "contact" : "9800000000"
  },
  {
    "userId" : 3,
    "father" : "Gukesh Maharjan",
    "mother" : "Rajamati Maharjan",
    "contact" : "9800000001"
  },
  {
    "userId" : 4,
    "father" : "Lion Maharjan",
    "mother" : "Mary Maharjan",
    "contact" : "9800000002"
  }
]
const enrollment = [
{
  "userId" : 2,
  "enrollmentdate" : "2010-01-01",
  "departuredate" : "2015-01-01"
},
{
  "userId" : 3,
  "enrollmentdate" : "2010-01-01",
  "departuredate" : "-- none --"
},
{
  "userId" : 4,
  "enrollmentdate" : "2009-01-01",
  "departuredate" : "-- none --"
}
]

const faqs = [
{

  "question": "How do I check my grades?",
  "answer": "You can check your grades by logging into the student portal and navigating to the 'Grades' section." 
},
{ 

"question": "Where can I find the exam schedule?", 
"answer": "The exam schedule is available in the 'Announcements' section of the student portal."
},
{ 

"question": "How do I contact my teacher?",
"answer": "You can contact your teacher via email or through the messaging system in the student portal."
}
]

const announcements = [
{
"title": "Event happening soon",
"description": "There will be a school event next week. Stay tuned for more details!"
},
{
"title": "Holiday tomorrow",
"description": "Tomorrow is a holiday. Enjoy your day off!"
},
{
"title": "Exam schedule",
"description": "The exam schedule has been updated. Check the notice board for details."
}
];