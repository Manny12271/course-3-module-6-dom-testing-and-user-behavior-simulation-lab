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
    const error = document.getElementById("error-msg");
  
    if (!form || !content || !error) return;
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector("input");
      if (!input) return;
  
      const value = input.value.trim();
  
      if (value === "") {
        showError("Input cannot be empty");
        return;
      }
  
      clearError();
      content.textContent = value;
      input.value = "";
    });
  }
  
  // Call this to attach the form handler when page loads
  handleFormSubmit("user-form", "dynamic-content");
  
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
  