document.addEventListener("DOMContentLoaded", function() {

  const userRole = sessionStorage.getItem("userRole");
  if (userRole !== "admin") {
    alert("Access denied. Admins only.");
    window.location.href = "index.html";
    return;
  }

  function loadUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userTableBody = document.getElementById("userTableBody");
    userTableBody.innerHTML = "";

    users.forEach((user, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><input type="text" value="${user.firstName}" data-index="${index}" data-field="firstName"></td>
        <td><input type="text" value="${user.middleName}" data-index="${index}" data-field="middleName"></td>
        <td><input type="text" value="${user.lastName}" data-index="${index}" data-field="lastName"></td>
        <td><input type="text" value="${user.email}" data-index="${index}" data-field="email"></td>
        <td><input type="password" value="${user.password}" data-index="${index}" data-field="password"></td>
        <td>
          <button onclick="editUser(${index})">Save</button>
          <button onclick="deleteUser(${index})">Delete</button>
        </td>
      `;
      userTableBody.appendChild(row);
    });
  }

  window.editUser = function(index) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const fields = ["firstName", "middleName", "lastName", "email", "password"];
    fields.forEach(field => {
      const input = document.querySelector(`input[data-index="${index}"][data-field="${field}"]`);
      users[index][field] = input.value;
    });
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("adminMessage").innerText = "User updated successfully.";
    loadUsers();
  };

  window.deleteUser = function(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("adminMessage").innerText = "User deleted successfully.";
    loadUsers();
  };

  loadUsers();
});
