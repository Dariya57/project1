const userList = [
  { username: 'johnDoe', firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com', password: '1234' },
];

function displayUsers() {
  const userTable = document.getElementById('user-table');
  userTable.innerHTML='';

  userList.forEach((user, index) => {
    const row = userTable.insertRow();
    row.innerHTML = `
      <td>${user.username}</td>
      <td><input value="${user.firstName}" /></td>
      <td><input value="${user.lastName}" /></td>
      <td><input value="${user.email}" /></td>
      <td><input type="password" value="${user.password}" /></td>
      <td>
        <button onclick="editUser(${index})">Edit</button>
        <button onclick="deleteUser(${index})">Delete</button>
      </td>
    `;
  });
}

function editUser(index) {
  const row = document.getElementById('user-table').rows[index];
  // Update userList based on row data
  userList[index].firstName = row.cells[1].firstChild.value;
  userList[index].lastName = row.cells[2].firstChild.value;
  userList[index].email = row.cells[3].firstChild.value;
  alert('User updated successfully!');
}

function deleteUser(index) {
  if (confirm('Are you sure you want to delete this user?')) {
    userList.splice(index, 1);
    displayUsers(); // Refresh table
  }
}

window.onload = displayUsers;



