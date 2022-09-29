const body = document.body;
const cursorDefaultElements = document.querySelectorAll(".cursorDefault");

// Create Mouse Cursor
const mouseCursor = document.createElement("div");
mouseCursor.className = "cursor";
document.body.appendChild(mouseCursor);

// Cursor Move With Mouse
window.addEventListener("mousemove", function (e) {
  mouseCursor.style.top = `${e.clientY}px`;
  mouseCursor.style.left = `${e.clientX}px`;
});