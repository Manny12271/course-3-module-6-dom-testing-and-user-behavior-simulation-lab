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
    errorMsg.classList.remove("hidden");
  }
  
  function clearError() {
    const errorMsg = document.getElementById("error-msg");
    if (!errorMsg) return;
    errorMsg.textContent = "";
    errorMsg.classList.add("hidden");
  }
  
  function handleFormSubmit(formId, contentId) {
    const form = document.getElementById(formId);
    const content = document.getElementById(contentId);
    const errorMsg = document.getElementById("error-msg");
  
    if (!form || !content || !errorMsg) return;
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector("input");
  
      if (!input || input.value.trim() === "") {
        errorMsg.textContent = "Input cannot be empty";
        errorMsg.classList.remove("hidden");
        content.textContent = "";
      } else {
        content.textContent = input.value;
        errorMsg.textContent = "";
        errorMsg.classList.add("hidden");
      }
    });
  }
  
  // Other DOM utility functions as needed:
  
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
  
  // Initialize form submit handler
  handleFormSubmit("user-form", "dynamic-content");
  
  // Export functions for testing if needed
  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      addItem,
      showError,
      clearError,
      handleFormSubmit,
      addElementToDOM,
      removeElementFromDOM,
      simulateClick,
    };
  }
  