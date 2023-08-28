document.addEventListener("DOMContentLoaded", () => {
    // Now let's create the text boxes to input info in
    const inputName = document.createElement('input');
    const nameHere = document.createElement('p');
    inputName.type = "text";
    nameHere.textContent = "Please tell me your name:";
    document.body.appendChild(nameHere);
    document.body.appendChild(inputName);
    inputName.setAttribute('id', 'name-Spot');
  
    // Now copy paste and make it for email
    const inputEmail = document.createElement('input');
    const emailHere = document.createElement('p');
    inputEmail.type = "text";
    emailHere.textContent = "Please tell me your email: (Don't worry we won't sell it off to foreign agencies!)";
    document.body.appendChild(emailHere);
    document.body.appendChild(inputEmail);
    inputEmail.setAttribute('id', 'email-Spot');
  
    // Put the submit button after all this
    const submitForm = document.createElement('form');
    document.body.appendChild(submitForm);
  
    // Using input type="button" instead of button element
    const submitButton = document.createElement('input');
    submitButton.type = 'button';
    submitButton.value = 'Submit';
    submitForm.appendChild(submitButton);
  
    // Okay, the tricky part - taking the data from the input form submission and logging it into db.json
    submitButton.addEventListener("click", () => {
      console.log("I've been clicked mate!");
      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          theName: `${inputName.value}`,
          theEmail: `${inputEmail.value}`,
        }),
      };
      fetch("http://localhost:3000/users", configurationObject)
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });
        const clearName = document.querySelector("#name-Spot");
        clearName.value = ""; // Clear input field for name
        const clearEmail = document.querySelector("#email-Spot");
        clearEmail.value = ""; // Clear input field for email
    });
    try {
        // Code that may throw an error
      } catch (error) {
        console.log("Oops! An error occurred. Please try again.");
      }
  });