
  // Open Modals
  document.getElementById("registerBtn").onclick = function() {
  document.getElementById("registrationModal").style.display = "block";
};
  document.getElementById("loginBtn").onclick = function() {
  document.getElementById("loginModal").style.display = "block";
};

  // Close Modal
  function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

  // Registration Logic
  function registerUser() {
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some(user => user.email === email)) {
  alert("User already exists");
  return false;
}

  const role = (email === "Admin@gmail.com" && password === "2846") ? "admin" : "user";
  users.push({ name, email, password, role });
  localStorage.setItem("users", JSON.stringify(users));
  alert(`Thank you for registering, ${name}!`);
  closeModal("registrationModal");
  return false;
}


  // Login Logic
  function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
  sessionStorage.setItem("userRole", user.role);
  alert(`Welcome ${user.role === "admin" ? "Admin" : "User"}!`);
  if (user.role === "admin") {
  window.location.href = "admin.html";  // Redirect to Admin Panel
} else {
  window.location.href = "index.html";  // Redirect to User Dashboard
}
} else {
  document.getElementById("loginMessage").innerText = "Invalid email or password.";
}
  closeModal("loginModal");
  return false;
}

  // Close Modals on Outside Click
  window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
  event.target.style.display = "none";
}
};
  function registerUser() {
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some(user => user.email === email)) {
  alert("User already exists");
  return false;
}

  const role = (email === "Admin@gmail.com" && password === "2846") ? "admin" : "user";
  users.push({ name, email, password, role });
  localStorage.setItem("users", JSON.stringify(users));
  alert(`Thank you for registering, ${name}!`);
  closeModal("registrationModal");
  return false;
}

  // Login Logic
  function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
  sessionStorage.setItem("userRole", user.role);
  alert(`Welcome ${user.role === "admin" ? "Admin" : "User"}!`);
  if (user.role === "admin") {
  window.location.href = "admin.html";  // Redirect to Admin Panel
} else {
  window.location.href = "index.html";  // Redirect to User Dashboard
}
} else {
  document.getElementById("loginMessage").innerText = "Invalid email or password.";
}
  closeModal("loginModal");
  return false;
}

  // Close Modals on Outside Click
  window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
  event.target.style.display = "none";
}
}


  document.getElementById("registerBtn").onclick = function() {
  document.getElementById("registrationModal").style.display = "block";
}


  function closeRegistrationModal() {
  document.getElementById("registrationModal").style.display = "none";
}


  function validateRegistrationForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  alert(`Thank you for registering, ${name}!`);
  closeRegistrationModal();
  return false;
}

  window.onclick = function(event) {
  const modal = document.getElementById("registrationModal");
  if (event.target === modal) {
  closeRegistrationModal();
}
}
