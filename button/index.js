document.querySelector('#form-trigger').addEventListener('click', function() {
  document.querySelector('.box').classList.toggle('active');
});

document.querySelector('#join-button').addEventListener('click', function() {
  const email = document.querySelector('#email').value;
  const telegram = document.querySelector('#telegram').value;
  const message = document.querySelector('#message').value;

  console.log(email, telegram, message);
});
