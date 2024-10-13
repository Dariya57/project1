document.getElementById('submit-btn').addEventListener('click', function(event) {
  event.preventDefault();
  alert('Your appointment is successfully booked!');
  alert('We will be waiting for you!')
});

document.getElementById('review-btn').addEventListener('click', function() {
  const review = prompt('Please leave your review:');
  if (review) {
    alert('Thank you for your review!');
  } else {
    alert('No review submitted.');
  }
});
