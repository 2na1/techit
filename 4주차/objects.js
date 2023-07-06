//
var student = {
    grade: 1,
    school: "lion school",
  };
  
//
  var gradeInfo = student.grade;
  console.log(gradeInfo);
  
//
  var key = Object.keys(student)[0];
  console.log(key);
  
//
  student.class = 3;
  console.log(student);
  
//
  console.log(student["class"]);
//
  var teacher = new Object();
