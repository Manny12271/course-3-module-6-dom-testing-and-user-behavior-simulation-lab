// Utility function to create an element with attributes and optional text content
function createElement(tag, attributes = {}, text = "") {
    const el = document.createElement(tag);
    for (let key in attributes) {
      el[key] = attributes[key];
    }
    if (text) el.textContent = text;
    return el;
  }
  
  // Display error message in the DOM
  function showError(msg) {
    const errorMsg = document.getElementById("error-msg");
    if (errorMsg) {
      errorMsg.textContent = msg;
      if (msg) {
        errorMsg.classList.remove("hidden");
      } else {
        errorMsg.classList.add("hidden");
      }
    }
  }
  
  // Clear error message
  function clearError() {
    showError("");
  }
  
  // Add a new item to the list
  function addItem(text) {
    const list = document.getElementById("item-list");
    if (!list) return;
  
    // Create list item and remove button
    const li = createElement("li", {}, text);
    const removeBtn = createElement("button", { className: "remove" }, "❌");
  
    // Remove item on button click
    removeBtn.addEventListener("click", () => {
      list.removeChild(li);
    });
  
    // Append remove button and list item
    li.appendChild(removeBtn);
    list.appendChild(li);
  }
  
  // Set up event listener for the form submission
  const form = document.getElementById("item-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("item-input");
      if (!input) return;
  
      const value = input.value.trim();
  
      if (!value) {
        showError("Item cannot be empty.");
      } else {
        clearError();
        addItem(value);
        input.value = "";
      }
    });
  }
  
  // Export functions for testing
  module.exports = { createElement, showError, clearError, addItem };
  