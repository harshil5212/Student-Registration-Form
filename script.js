document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const hobbiesArray = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(hobby => hobby.value);
    const hobbies = hobbiesArray.join(', ');
    const rollNumber = document.getElementById('rollNumber').value;
  
    // Create table row with the collected data
    const table = document.getElementById('registeredUsersBody');
    const newRow = table.insertRow();
    newRow.innerHTML = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${gender}</td>
      <td>${hobbies}</td>
      <td>${rollNumber}</td>
    `;
  
    // Clear form fields after submission
    document.getElementById('registrationForm').reset();
  });
  