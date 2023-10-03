// Assume studentsData contains the array of student objects obtained from getListStudents()

function updateStudentGradeByCity(studentsData, city, newGrades) {
  const updatedStudents = studentsData
    .filter((student) => student.location === city)
    .map((student) => {
      const foundGrade = newGrades.find((grade) => grade.studentId === student.id);

      if (foundGrade) {
        return {
          id: student.id,
          firstName: student.firstName,
          location: student.location,
          grade: foundGrade.grade,
        };
      }
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: 'N/A',
      };
    });

  return updatedStudents;
}

export default updateStudentGradeByCity;
