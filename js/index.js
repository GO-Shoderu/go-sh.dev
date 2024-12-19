// Set the launch date
const launchDate = new Date("January 31, 2025 00:00:00").getTime();

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

  // If the launch date has passed, display a message and clear the countdown
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Website is live!";
  }
}, 1000);

