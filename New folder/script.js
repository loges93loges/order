document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('dataForm');
  const tableBody = document.getElementById('dataTableBody');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const foodOptions = document.querySelectorAll('input[name="food"]:checked');
    const food = Array.from(foodOptions).map(option => option.value).join(', ');
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Append values to the table
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `<td>${firstName}</td><td>${lastName}</td><td>${address}</td><td>${pincode}</td><td>${gender}</td><td>${food}</td><td>${state}</td><td>${country}</td>`;

    // Clear form fields
    form.reset();
  });
});
