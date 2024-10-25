let selectedServices = [];
function addToCard(service, price) {
  selectedServices.push({ service, price });
  localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
  displayBasket();
}


function displayBasket() {
  const basket = document.getElementById('basket');
  const totalPriceElement = document.getElementById('total-price');

  basket.innerHTML = '';
  let totalPrice = 0;

  selectedServices.forEach(item => {
    basket.innerHTML += `<p>${item.service} - ${item.price}₸</p>`;
    totalPrice += item.price;
  });

  totalPriceElement.innerText = `Total Price: ${totalPrice}₸`;
}
document.querySelectorAll('.add-to-basket').forEach(button => {
  button.addEventListener('click', () => {
    const service = button.dataset.service;
    const price = parseInt(button.dataset.price);
    addToBasket(service, price);
  });
});







