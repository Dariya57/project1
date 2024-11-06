let selectedServices = JSON.parse(localStorage.getItem("selectedServices")) || [];


function addToBasket(service, price) {
  // Get the current cart or initialize an empty array
  let cart = JSON.parse(localStorage.getItem("selectedServices")) || [];

  // Check if item already exists in the cart
  let existingItem = cart.find(item => item.name === service);
  // existingItem = undefined || {service: "Bridal Makeup", price: 50000}
  console.log(existingItem)
  if (existingItem) {
    // If item exists, increase quantity
    existingItem.quantity += 1;
  } else {
    // If item doesn't exist, add new item
    cart.push({ name: service, price: Number(price), quantity: 1 });
  }

  // Save updated cart to localStorage
  localStorage.setItem("selectedServices", JSON.stringify(cart));
  updateCartTotal();
}

function updateCartTotal() {
  let cart = JSON.parse(localStorage.getItem("selectedServices")) || [];
  console.log(cart)
  let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  document.querySelectorAll("#cartTotal").innerText = `${totalPrice}`;
  console.log(totalPrice)
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

// Event listener for add-to-cart buttons
document.querySelectorAll(".service-button").forEach(button => {
  button.addEventListener("click", (event) => {
    const itemName = event.target.getAttribute("data-item-name");
    const price = event.target.getAttribute("data-price");
    addToBasket(itemName, price);
  });
});
updateCartTotal()
