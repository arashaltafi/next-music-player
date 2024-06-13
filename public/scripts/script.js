document.addEventListener("contextmenu", (event) =>
    event.preventDefault()
);

document.onkeydown = (e) => {
    if (e.key === "F12") {
        return false; // Prevent F12 key
    }
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
        return false; // Prevent Ctrl+Shift+I (Inspect Element)
    }
    if (e.ctrlKey && e.shiftKey && e.key === "C") {
        return false; // Prevent Ctrl+Shift+C (Inspect Element)
    }
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
        return false; // Prevent Ctrl+Shift+J (Inspect Element)
    }
    if (e.ctrlKey && e.key === "U") {
        return false; // Prevent Ctrl+U (View Source)
    }
};