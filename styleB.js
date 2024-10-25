var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];

  button.style.backgroundColor = '#FFB6C1';
  button.style.color = '#fff';
  button.style.border = 'none';
  button.style.padding = '10px 20px';
  button.style.fontSize = '1rem';
  button.style.fontWeight = 'bold';
  button.style.borderRadius = '25px';
  button.style.cursor = 'pointer';
  button.style.transition = 'background-color 0.3s ease';

  button.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#FF69B4';
  });

  button.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#FFB6C1';
  });
}



