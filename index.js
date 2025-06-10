// index.js

function addItem(item) {
    const list = document.getElementById("item-list");
    if (!list) return;
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  }
  
  function showError(message) {
    const errorMsg = document.getElementById("error-msg");
    if (!errorMsg) return;
    errorMsg.textContent = message;
  }
  
  function clearError() {
    const errorMsg = document.getElementById("error-msg");
    if (!errorMsg) return;
    errorMsg.textContent = "";
  }
  
  function handleFormSubmit(formId, contentId) {
    const form = document.getElementById(formId);
    const content = document.getElementById(contentId);
    if (!form || !content) return;
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector("input");
      if (input) {
        content.textContent = input.value;
      }
    });
  }
  
  // Additional DOM functions from your test output:
  function addElementToDOM(id, content) {
    const el = document.getElementById(id);
    if (el) el.textContent = content;
  }
  
  function removeElementFromDOM(id) {
    const el = document.getElementById(id);
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }
  
  function simulateClick(id, content) {
    const el = document.getElementById(id);
    if (el) el.textContent = content;
  }
  
  module.exports = {
    addItem,
    showError,
    clearError,
    handleFormSubmit,
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
  };
  