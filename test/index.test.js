/**
 * @jest-environment jsdom
 */

const { addItem, showError, clearError } = require("../index");

beforeEach(() => {
  document.body.innerHTML = `
    <form id="item-form">
      <input type="text" id="item-input" />
      <button type="submit">Add Item</button>
    </form>
    <ul id="item-list"></ul>
    <div id="error-msg" class="error"></div>
  `;
});

describe("DOM Testing and User Behavior Simulation", () => {
  test("should add an item to the list", () => {
    addItem("Test Item");
    const list = document.getElementById("item-list");
    expect(list.textContent).toContain("Test Item");
  });

  test("should show error message", () => {
    showError("Error occurred");
    const errorMsg = document.getElementById("error-msg");
    expect(errorMsg.textContent).toBe("Error occurred");
  });

  test("should clear error message", () => {
    showError("Error occurred");
    clearError();
    const errorMsg = document.getElementById("error-msg");
    expect(errorMsg.textContent).toBe("");
  });
});
