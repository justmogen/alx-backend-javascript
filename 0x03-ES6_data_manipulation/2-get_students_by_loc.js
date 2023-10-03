function getStudentocation(students, location) {
  return students.filter((student) => student.location === location);
}

export default getStudentocation;
