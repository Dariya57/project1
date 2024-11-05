const img1=document.getElementsByClassName("service-item");
img1.addEventListener('mouseover', function() {
  this.style.object-fit: hover;)
  img1.addEventListener('mouseout', function() {
    this.style.object-fit: cover;
  });
