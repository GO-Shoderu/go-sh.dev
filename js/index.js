// current year calculations for copywrite update
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Set the launch date
const launchDate = new Date("February 1, 2026 00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = launchDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById(
    "countdown"
  ).innerHTML = `${days} d(s) ${hours} hr(s): ${minutes} min(s): ${seconds} sec(s)`;

  document.getElementById(
    "countdown_2"
  ).innerHTML = `${days} d(s) ${hours} hr(s): ${minutes} min(s): ${seconds} sec(s)`;

  // If the launch date has passed, display a message and clear the countdown
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Update should be live!";
  }
}, 1000);

// Function to show a popup message when the button is clicked
function showPopup() {
  // Create popup div
  const popup = document.createElement("div");
  popup.classList.add("popup");

  // Add content to popup
  popup.innerHTML = `
    <h5 class="headings text-center text-md-start">This feature is Coming soon!</h5>
    <span class="close-btn text-center text-md-start">&times;</span>
    <br>
    <p>Upgrade Count down with go-sh.dev, I'm working hard to finish the development of this site.
    <br>
    An upgrade is on the way and it should be up and running in: </p>
    <div id="countdown_2" class="countdown"></div>
  `;

  // Append popup to document body
  document.body.appendChild(popup);

  // Close popup when close button is clicked
  popup.querySelector(".close-btn").addEventListener("click", function () {
    document.body.removeChild(popup);
  });
}

// Get all elements with the class 'popup-trigger-btn' and attach the function to their click event
const popupTriggerButtons = document.querySelectorAll(".popup-trigger-btn");
popupTriggerButtons.forEach(function (button) {
  button.addEventListener("click", showPopup);
});
