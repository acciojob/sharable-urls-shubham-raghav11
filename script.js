// Select the button and the h3 element
const button = document.getElementById("button");
const change = document.getElementById("url");

// Add an event listener to the button
button.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission (default behavior)

  // Get values from the input fields
  const nameele = document.getElementById("name").value;
  const yearele = document.getElementById("year").value;

  // Check if fields are empty and construct the URL
  if (nameele && yearele) {
    change.innerText = `https://localhost:8080/?name=${encodeURIComponent(nameele)}&year=${encodeURIComponent(yearele)}`;
  } else if (nameele) {
    change.innerText = `https://localhost:8080/?name=${encodeURIComponent(nameele)}`;
  } else if (yearele) {
    change.innerText = `https://localhost:8080/?year=${encodeURIComponent(yearele)}`;
  } else {
    change.innerText = "https://localhost:8080/";
  }
});
