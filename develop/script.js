// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employeesArray = [];

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  while (true) { //continues prompting until the user decides to stop

    const firstName = prompt("Enter employee's first name:");
    if (firstName === null) return; // user clicked "cancel"

    const lastName = prompt("Enter employee's last name:")
    if (lastName === null) return;

    const salary = parseFloat(prompt("Enter employee's salary:"));
    if (isNaN(salary)) {
      alert("Invalid input for salary. Please enter a valid number.");
      continue; // skips to the next iteration
    }

    if (firstName && lastName && !isNaN(salary)) {
      const employee = { firstName, lastName, salary };
      employeesArray.push(employee);
      alert(`Employee ${firstName} ${lastName} added!`);
    } else {
      alert("Invalid input. Please enter valid data.");
    }

    // ask if user wants to add another employee
    const addMore = confirm("Do you want to add another employee?");
    if (!addMore)

    return employeesArray; // exits prompts and returns the inputed employees into the table displayed on html
  }
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  if (employeesArray.length === 0) {
    alert("No employees to calculate average salary.");
    return;
  }
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;

  console.log(`The average salary between our ${employeesArray.length} employee(s) is: $${averageSalary.toFixed(2)}`); // logs in console the average salary of entered employees
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  if (employeesArray.length === 0) {
    alert("No employees to select from.");
    return;
  }
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`); // logs in console a randomly chosen entered employee with their first and last name
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
