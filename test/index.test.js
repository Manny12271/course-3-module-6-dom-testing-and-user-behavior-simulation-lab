/**
 * @jest-environment jsdom
 */

const {
  addItem,
  showError,
  clearError,
  handleFormSubmit,
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
} = require("../index");

beforeEach(() => {
  document.body.innerHTML = `
    <form id="item-form">
      <input type="text" id="item-input" />
      <button type="submit">Add Item</button>
    </form>
    <ul id="item-list"></ul>
    <div id="error-msg" class="error"></div>
    <div id="content"></div>
    <div id="clickable"></div>
  `;
});

describe("DOM Manipulation Functions", () => {
  test("addElementToDOM should add content to element by id", () => {
    addElementToDOM("content", "Hello World");
    const el = document.getElementById("content");
    expect(el.textContent).toBe("Hello World");
  });

  test("removeElementFromDOM should remove element by id", () => {
    const el = document.createElement("div");
    el.id = "to-remove";
    document.body.appendChild(el);

    removeElementFromDOM("to-remove");
    expect(document.getElementById("to-remove")).toBeNull();
  });

  test("simulateClick should set textContent of element by id", () => {
    simulateClick("clickable", "Clicked!");
    const el = document.getElementById("clickable");
    expect(el.textContent).toBe("Clicked!");
  });
});

describe("Form Handling", () => {
  test("handleFormSubmit should update content on form submit", () => {
    // Setup event listener
    handleFormSubmit("item-form", "content");

    const form = document.getElementById("item-form");
    const input = document.getElementById("item-input");
    const content = document.getElementById("content");

    // Set input value
    input.value = "Submitted Text";

    // Simulate form submit
    const submitEvent = new Event("submit", { bubbles: true, cancelable: true });
    form.dispatchEvent(submitEvent);

    expect(content.textContent).toBe("Submitted Text");
  });
});

describe("List and Error Functions", () => {
  test("addItem should add an item to the list", () => {
    addItem("Test Item");
    const list = document.getElementById("item-list");
    expect(list.textContent).toContain("Test Item");
  });

  test("showError should display an error message", () => {
    showError("Error occurred");
    const errorMsg = document.getElementById("error-msg");
    expect(errorMsg.textContent).toBe("Error occurred");
  });

  test("clearError should clear the error message", () => {
    showError("Error occurred");
    clearError();
    const errorMsg = document.getElementById("error-msg");
    expect(errorMsg.textContent).toBe("");
  });
});
