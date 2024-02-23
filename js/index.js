document.getElementById("currentYear").textContent = new Date().getFullYear();

// retrieving visits
// URL of the Lambda function
const lambdaUrl =
  "https://t7bvyk4kmnfhophv2wljjfyqki0dfnpd.lambda-url.us-east-1.on.aws/";

// Making a fetch request to the Lambda function
fetch(lambdaUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Extracting the visit count from the response body
    const visitCount = data.visits;

    // Updating the webpage with the visit count
    document.getElementById("visitCount").textContent = visitCount;
  })
  .catch((error) => {
    console.error("Error retrieving visit count:", error);
  });

function callEmailLambdaFunction() {
  event.preventDefault();

  // Get the email address entered by the user
  const email = document.getElementById("emailInput").value;

  // Define the URL of your Lambda function
  const lambdaUrl =
    "https://aa5nqvgmgrwwu5d646i6geenyy0rvpbp.lambda-url.us-east-1.on.aws/";

  // Define the data to be sent in the request body
  const data = JSON.stringify({ email });

  // Defining the options for the fetch request
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  };

  // Making the fetch request to the Lambda function
  fetch(lambdaUrl, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Response from Lambda function:", data);

      //   alert(data.body.message);
    })
    .catch((error) => {
      console.error("Error calling Lambda function:", error);

      //   alert(
      //     "An error occurred while submitting the email. Please try again later."
      //   );
      // alert(data.body.message);
    });
}

// Function to show a popup message when the button is clicked
function showPopup() {
  // Create popup div
  const popup = document.createElement("div");
  popup.classList.add("popup");

  // Add content to popup
  popup.innerHTML = `
    <p>Coming soon!</p>
    <span class="close-btn">&times;</span>
  `;

  // Append popup to document body
  document.body.appendChild(popup);

  // Close popup when close button is clicked
  popup.querySelector(".close-btn").addEventListener("click", function () {
    document.body.removeChild(popup);
  });
}

// Attach the function to the button click event
document.getElementById("comingSoonBtn").addEventListener("click", showPopup);
