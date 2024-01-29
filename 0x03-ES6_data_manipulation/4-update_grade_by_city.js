export default function updateStudentGradeByCity(students, location, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) return [];
  const newStudents = students
    .filter((ele) => ele.location === location)
    .map((student) => {
      let flag = false;
      const obj = student;
      newGrades.forEach((studentGrade) => {
        if (studentGrade.studentId === student.id) {
          obj.grade = studentGrade.grade;
          flag = true;
        }
      });

      if (!flag) obj.grade = 'N/A';
      return obj;
    });
  return newStudents;
}
