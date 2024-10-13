function confirmSubmission(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const service = document.getElementById("service").value;

  const confirmation = confirm(`Are you sure you want to book ${service} for ${name}?`);
  if (confirmation) {
    alert("Your appointment request has been submitted!");
    document.forms[0].submit();
  }
}
