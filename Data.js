//insertdata for users
db.users.insertMany([
    {
     user_id:1,
     user_name:"Ayushi",
     user_email:"ayushipohekar@gmail.com",
     mentorid:1,
    },
    {
     user_id:2,
     user_name:"Rhutwik",
     user_email:"rs@gmail.com",
     mentorid:2,
    },
    {
     user_id:3,
     user_name:"Sayli",
     user_email:"Saylik@gmail.com",
     mentorid:3,
    },
    {
     user_id:4,
     user_name:"Ashay",
     user_email:"ashay@gmail.com",
     mentorid:4,
    },
    {
     user_id:5,
     user_name:"Advait",
     user_email:"advaitp@gmail.com",
     mentorid:5,
    },
])


//codekata
db.codekata.insertMany([
    {
        user_id:1,
        problems_solved:20
    },
    {
        user_id:2,
        problems_solved:40
    },
    {
        user_id:3,
        problems_solved:50
    },
    {
        user_id:4,
        problems_solved:30
    },
    {
        user_id:5,
        problems_solved:10
    },

])

//attendance

db.attendance.insertMany([
    {
       user_id:1,
       topic_id:1,
       attended:true

    },
    {
       user_id:2,
       topic_id:2,
       attended:false

    },
    {
       user_id:3,
       topic_id:3,
       attended:true

    },
    {
       user_id:4,
       topic_id:4,
       attended:false

    },
    {
       user_id:5,
       topic_id:5,
       attended:true

    },
])

//topics

db.topics.insertMany([
    {
        topic_id:1,
        topic:"HTML",
        topic_date: new Date("13-aug-2022"),
    },
    {
        topic_id:2,
        topic:"CSS",
        topic_date: new Date("20-aug-2022"),
    },
    {
        topic_id:3,
        topic:"Bootstrap",
        topic_date: new Date("25-aug-2022"),
    },
    {
        topic_id:4,
        topic:"Javascript",
        topic_date: new Date("30-aug-2022"),
    },
    {
        topic_id:5,
        topic:"React",
        topic_date: new Date("3-sept-2022"),
    },

])

//tasks

db.tasks.insertMany([
    {
        task_id:1,
        topic_id:1,
        user_id:1,
        task:"HTML form",
        topic_date: new Date("13-aug-2022"),
        submission:true
    },
    {
        task_id:2,
        topic_id:2,
        user_id:2,
        task:"CSS website",
        topic_date: new Date("20-aug-2022"),
        submission:true
    },
    {
        task_id:3,
        topic_id:3,
        user_id:3,
        task:"Bootstrap card",
        topic_date: new Date("25-aug-2022"),
        submission:false
    },
    {
        task_id:4,
        topic_id:4,
        user_id:4,
        task:"Javascript problems",
        topic_date: new Date("30-aug-2022"),
        submission:true
    },
    {
        task_id:5,
        topic_id:5,
        user_id:5,
        task:"React App",
        topic_date: new Date("3-sept-2022"),
        submission:false
    },
])

//company_drives

db.companydrives.insertMany([
    {
        user_id:1,
        drive_date:new Date("25-sept-2022"),
        company:"Amazon",
    },
    {
        user_id:2,
        drive_date:new Date("13-oct-2022"),
        company:"Flipcart",
    },
    {
        user_id:3,
        drive_date:new Date("16-oct-2022"),
        company:"Google",
    },
    {
        user_id:4,
        drive_date:new Date("31-oct-2022"),
        company:"Microsoft",
    },
    {
        user_id:5,
        drive_date:new Date("8-nov-2022"),
        company:"Facebook",
    },
])

//mentors



