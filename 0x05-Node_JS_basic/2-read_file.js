const fs = require('fs');

function countStudents(path) {
  try {
    // Read the content of the file synchronously and split it into lines
    const results = fs.readFileSync(path, { encoding: 'utf8' }).split(/\r?\n/);
    const lines = results;

    let i = 0; // Counter for tracking the line number
    let countStudents = 0; // Counter for total students
    const fields = {}; // Object to store information about each field

    for (const line of lines) {
      // Check if the line is not empty and not the header line
      if (line.trim() !== '' && i > 0) {
        countStudents += 1; // Increment the total student count

        // Destructure the line into individual values (fname, lname, age, field)
        const [fname, lname, age, field] = line.split(','); // eslint-disable-line

        // Check if the field already exists in the 'fields' object
        if (!fields[field]) {
          // If it doesn't exist, create a new entry for the field
          fields[field] = {
            count: 1, // Set the count to 1
            students: [fname], // Initialize an array with the first name
          };
        } else {
          // If the field already exists, update the count and add the new student
          const newCount = fields[field].count + 1;
          const newStudents = fields[field].students.concat(fname);
          fields[field] = {
            count: newCount,
            students: newStudents,
          };
        }
      }
      i += 1; // Increment the line counter
    }

    // Log the total number of students
    console.log(`Number of students: ${countStudents}`);

    // Log the count and list of students for each field
    for (const field of Object.keys(fields)) {
      const n = fields[field].count;
      const names = fields[field].students.join(', ');
      console.log(`Number of students in ${field}: ${n}. List: ${names}`);
    }
  } catch (error) {
    // If an error occurs during file reading, throw a custom error message
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
