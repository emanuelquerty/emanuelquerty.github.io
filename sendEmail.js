function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const name = form[0].value;
  const subject = form[1].value;
  const email = form[2].value;
  const message = form[3].value;

  const errors = [];
  const errorsElement = document.querySelector(".form__errors");

  // Regex for testing for a valid email
  var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

  // Clear previous errors
  errorsElement.innerHTML = "";

  if (name.length === 0) errors.push("Please enter a valid name");
  if (subject.length === 0) errors.push("Please enter a valid subject");
  if (!re.test(email)) errors.push("Please enter a valid email");
  if (message.length === 0) errors.push("Please enter a valid message");

  if (errors.length === 0) {
    // Send the email
    let url = "http://localhost:3000/emails";
    let emailData = {
      name,
      subject,
      email,
      message,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  } else {
    let liTags = errors.map((error) => {
      let li = document.createElement("li");
      li.innerHTML = error;
      return li;
    });

    // Display all errors in the page
    errorsElement.append(...liTags);
  }

  return false;
}
