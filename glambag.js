// Example function to handle adding service to Glam Bag
function addToGlamBag(serviceName, price) {
  // Get current Glam Bag data or initialize empty array
  let glamBag = JSON.parse(localStorage.getItem("glamBag")) || [];

  // Add selected service with its price
  glamBag.push({ service: serviceName, price: parseFloat(price) });

  // Update localStorage
  localStorage.setItem("glamBag", JSON.stringify(glamBag));

  // Update navbar total (optional)
  updateCartTotal();
}

// Event listener for each price button
document.querySelectorAll(".price-btn").forEach(button => {
  button.addEventListener("click", (event) => {
    const serviceName = event.target.getAttribute("data-service-name");
    const price = event.target.getAttribute("data-price");

    addToGlamBag(serviceName, price);
  });
});

// Function to update total price in navbar
function updateCartTotal() {
  let glamBag = JSON.parse(localStorage.getItem("glamBag")) || [];
  let total = glamBag.reduce((sum, item) => sum + item.price, 0);

  document.getElementById("cartTotal").innerText = `$${total.toFixed(2)}`;
}

