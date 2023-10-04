// creating a student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Creating two students
const student1: Student = {
    firstName: 'Alex',
    lastName: 'Morgan',
    age: 24,
    location: 'Nairobi'
};

const student2: Student = {
    firstName: 'Asia',
    lastName: 'Val',
    age: 24,
    location: 'Mombasa'
};

// Creating an array of students
const studentsList: Array<Student> = [student1, student2];

// Table element from the DOM
const table: HTMLTableElement | null = document.querySelector('#students-table');

//Render students' data in the table
if (table) {
    studentsList.forEach((student) => {
        // Create a row
        const row = table.insertRow();

        // Insert cells for firstName and location
        const firstNameCell = row.insertCell();
        firstNameCell.innerText = student.firstName;


        const locationCell = row.insertCell();
        locationCell.innerText = student.location;
    })
}