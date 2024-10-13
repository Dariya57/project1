document.getElementById('submit-btn').addEventListener('click', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var service = document.getElementById('service').value;
  alert("Thank you, " + name + "! Your appointment for " + service + " is successfully booked!");
  alert('We will be waiting for you!');
});

document.getElementById('review-btn').addEventListener('click', function() {
  var review = prompt('Please leave your review:');
  if (review) {
    alert('Thank you for your review!');
  } else {
    alert('No review submitted.');
  }
});
