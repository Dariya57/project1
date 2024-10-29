let selectedServices = [];

function addToBasket(service, price) {
  selectedServices.push({ service, price });
  displayBasket();
}

function displayBasket() {
  const basket = document.getElementById('basket');
  const totalPriceElement = document.getElementById('total-price');

  basket.innerHTML = '';
  basket.style.display = 'flex';
  basket.style.flexWrap = 'nowrap';
  basket.style.gap = '10px';
  let totalPrice = 0;

  selectedServices.forEach((item, index) => {
    const serviceItem = document.createElement('div');
    serviceItem.style.display = 'flex';
    serviceItem.style.alignItems = 'center';
    serviceItem.style.border = '1px solid #ccc';
    serviceItem.style.padding = '5px';
    serviceItem.style.borderRadius = '10px';
    serviceItem.style.backgroundColor = '#f9f9f9';

    serviceItem.innerHTML = `<p style="margin: 0;">${item.service} - ${item.price}₸</p>`;

    // Remove button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.style.backgroundColor = '#FFB6C1';
    removeButton.style.color = '#fff';
    removeButton.style.border = 'none';
    removeButton.style.padding = '5px 10px';
    removeButton.style.fontSize = '1rem';
    removeButton.style.fontWeight = 'bold';
    removeButton.style.borderRadius = '25px';
    removeButton.style.cursor = 'pointer';
    removeButton.style.marginLeft = '10px';

    // Remove service functionality
    removeButton.addEventListener('click', () => {
      selectedServices.splice(index, 1);
      displayBasket();
    });
    serviceItem.appendChild(removeButton);
    basket.appendChild(serviceItem);
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
