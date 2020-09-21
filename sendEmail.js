function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const name = form[0].value;
  const subject = form[1].value;
  const email = form[2].value;
  const message = form[3].value;

  console.log(name);
  console.log(subject);
  console.log(email);
  console.log(message);

  return false;
}
