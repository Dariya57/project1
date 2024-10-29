document.getElementById('submit-btn').addEventListener('click', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var service = document.getElementById('service').value;
  alert("Thank you, " + name + "! Your appointment for " + service + " is successfully booked!");
  alert('We will be waiting for you!');
});


