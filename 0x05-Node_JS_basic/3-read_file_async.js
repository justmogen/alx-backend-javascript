const fs = require('fs');

function countStudents(path) {
  const promise = new Promise((resolve, reject) => {
    // Read the content of the file asynchronously
    fs.readFile(path, 'utf-8', (error, results) => {
      if (error) {
        // If there's an error during file reading, reject the promise
        reject(Error('Cannot load the database'));
      } else {
        // Split the file content into an array of lines
        const lines = results.split('\n');
        let i = 0;
        let countStudents = 0;
        let msg = '';
        const fields = {};

        // Process each line in the file
        const getLines = () => {
          for (const line of lines) {
            if (line.trim() !== '' && i > 0) {
              // If the line is not empty and not the header line, process the data
              countStudents += 1;
              const [fname, lname, age, field] = line.split(','); // eslint-disable-line
              if (!fields[field]) {
                // If the field is not in the 'fields' object, create a new entry
                fields[field] = {
                  count: 1,
                  students: [fname],
                };
              } else {
                // If the field already exists, update the count and student list
                const newCount = fields[field].count + 1;
                const newStudents = fields[field].students.concat(fname);
                fields[field] = {
                  count: newCount,
                  students: newStudents,
                };
              }
            }
            i += 1;
          }
        };

        // Display the processed data and resolve the promise
        const display = async () => {
          getLines();
          console.log(`Number of students: ${countStudents}`);
          msg += `Number of students: ${countStudents}\n`;
          for (const field of Object.keys(fields)) {
            const n = fields[field].count;
            const names = fields[field].students.join(', ');
            console.log(`Number of students in ${field}: ${n}. List: ${names}`);
            msg += `Number of students in ${field}: ${n}. List: ${names}\n`;
          }
          msg = msg.slice(0, -1); // Remove the last newline character
        };

        display(); // Call the display function
        resolve(msg); // Resolve the promise with the generated message
      }
    });
  });

  return promise; // Return the promise
}

module.exports = countStudents;
