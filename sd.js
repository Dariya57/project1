function addText() {
  // Create a new paragraph element
  const newParagraph = document.createElement("p");

  // Set the text content
  newParagraph.textContent = "This is a dynamically added paragraph!";

  // Append the new paragraph to the text-container div
  document.getElementById("text-container1").appendChild(newParagraph);
}
