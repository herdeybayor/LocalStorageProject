const studentForm = $("#student-info");
const studentsContainer = $(".students");
const nameInput = studentForm[0]["name"];
const ageInput = studentForm[0]["age"];
const rollInput = studentForm[0]["roll"];

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, age, roll) => {
    students.push({
        name,
        age,
        roll
    });

    localStorage.setItem("students", JSON.stringify(students));

    return {
        name,
        age,
        roll
    };
}

const createStudentElement = ({
    name,
    age,
    roll
}) => {
    studentsContainer.append(`
        <div>
            <h2>Student name: ${name}</h2>
            <p> Student age: ${age}</p>
            <p> Student roll: ${roll}</p>
        </div>
    `);
    studentsContainer[0].style.display = students.length === 0 ? "none" : "block";
};

studentsContainer[0].style.display = students.length === 0 ? "none" : "block";

students.forEach(createStudentElement)

studentForm.submit(e => {
    e.preventDefault();
    const newStudent = addStudent(
        nameInput.value,
        ageInput.value,
        rollInput.value
    );
    createStudentElement(newStudent);
    nameInput.value = "";
    ageInput.value = "";
    rollInput.value = "";
});