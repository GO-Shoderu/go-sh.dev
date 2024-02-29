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

function callEmailApiGatewayForPopUp() {
  event.preventDefault();

  // Get the email address entered by the user
  const email = document.getElementById("emaiInput").value;

  console.log(email);

  // Define the URL of your Lambda function
  const api_gateway =
    "https://ils77dbbve.execute-api.us-east-1.amazonaws.com/serverless-web-app-emails-api-stage/serverless-web-app-emails-api-resources";

  // Define the data to be sent in the request body
  const data = JSON.stringify({ email });

  console.log(data);

  // Defining the options for the fetch request
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  };

  // Making the fetch request to the Lambda function
  fetch(api_gateway, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Response from API:", data);

      //   alert(data.body.message);
    })
    .catch((error) => {
      console.error("Error calling Lambda function:", error);
    });
}

function callEmailApiGateway() {
  event.preventDefault();

  // Get the email address entered by the user
  const email = document.getElementById("emailInput").value;

  console.log(email);

  // Define the URL of your api gateway
  // const api_gateway =
  //   "https://esfou4c7pg.execute-api.us-east-1.amazonaws.com/serverless-web-app-emails-api-stage/serverless-web-app-emails-api-resource";

  const api_gateway =
    "https://ils77dbbve.execute-api.us-east-1.amazonaws.com/serverless-web-app-emails-api-stage/serverless-web-app-emails-api-resources";

  // Define the data to be sent in the request body
  const data = JSON.stringify({ email });

  console.log(data);

  // Defining the options for the fetch request
  const options = {
    method: "OPTIONS",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  };

  // Making the fetch request to the Lambda function
  fetch(api_gateway, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Response from API:", data);

      //   alert(data.body.message);
    })
    .catch((error) => {
      console.error("Error calling Lambda function:", error);
    });
}

// Function to show a popup message when the button is clicked
function showPopup() {
  // Create popup div
  const popup = document.createElement("div");
  popup.classList.add("popup");

  // Add content to popup
  popup.innerHTML = `
    <h5 class="headings text-center text-md-start">Coming soon!</h5>
    <span class="close-btn text-center text-md-start">&times;</span>
    <p class="lead text-center text-md-start">
              Count down with <a href="https://go-sh.dev" target="_blank"
              >go-sh.dev</a> or Enter your email to get notified when the portfolio website version
              2.0 is released
            </p>
            <div class="container">
              <form class="row">
                <input
                  type="email"
                  name="emaiInput"
                  id="emaiInput"
                  placeholder="Enter your email"
                  class="col-md mt-2"
                  required
                />
                <button
                  type="submit"
                  class="btn btn-light col-md mt-2"
                  onclick="callEmailApiGatewayForPopUp()"
                >
                  Subscribe
                </button>
              </form>
            </div>
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
