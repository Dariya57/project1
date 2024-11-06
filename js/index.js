
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
  const firstName = document.getElementById("regFirstName").value;
  const lastName = document.getElementById("regLastName").value;
  const dob = document.getElementById("regDOB").value;
  const email = document.getElementById("regEmail").value;
  const phone = document.getElementById("regPhone").value;
  const password = document.getElementById("regPassword").value;

  // Basic validation for empty fields
  if (!firstName || !lastName || !dob || !email || !phone || !password) {
    alert("All fields are required.");
    return false;
  }

  // Date of Birth Validation (must be at least 18 years old)
  const dobDate = new Date(dob);
  const age = new Date().getFullYear() - dobDate.getFullYear();
  if (age < 18) {
    alert("You must be at least 18 years old to register.");
    return false;
  }

  // Phone format validation: + followed by 10-15 digits
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  if (!phoneRegex.test(phone)) {
    alert("Phone number must start with + and contain 10-15 digits.");
    return false;
  }

  // Password format validation: 8+ characters, 1 uppercase, 1 lowercase, 1 digit, 1 special character
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one digit, and one special character.");
    return false;
  }

  // Check if the email is already registered
  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some(user => user.email === email)) {
    alert("User already exists");
    return false;
  }

  // Add user data to local storage
  const role = (email === "Admin@gmail.com" && password === "2846") ? "admin" : "user";
  users.push({ firstName, lastName, dob, email, phone, password, role });
  localStorage.setItem("users", JSON.stringify(users));

  alert(`Thank you for registering, ${firstName}!`);
  closeModal("registrationModal");
  return false;
}



// Login Logic
// Login Logic
// Login Logic
function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Store the user role in session
    sessionStorage.setItem("userRole", user.role);

    if (user.role === "admin") {
      alert(`Welcome Admin!`);
      window.location.href = "admin.html";  // Redirect to Admin Panel
    } else {
      // Ensure user.name exists before accessing it
      const userName = user.name ? user.name : "User";  // Fallback to "User" if name is not found
      alert(`Hello, beauty!`);  // Personalized greeting for non-admin users
      window.location.href = "index.html";  // Redirect to User Dashboard
    }
  } else {
    // Display alert if login fails
    alert("Invalid email or password. Please try again.");
  }

  closeModal("loginModal");
  return false;  // Prevent form submission to avoid page reload
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
function hideinst()
{
  document.getElementById("soc").style.display='none';
}
