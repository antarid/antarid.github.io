document.querySelector('#form-trigger').addEventListener('click', function() {
  document.querySelector('.box').classList.add('active');
  document.querySelector('#form-trigger').classList.add('active');
});

document.querySelector('#join-button').addEventListener('click', function() {
  const email = document.querySelector('#email').value;
  const telegram = document.querySelector('#telegram').value;
  const message = document.querySelector('#message').value;

  console.log(email, telegram, message);
  if (!email) document.querySelector('#email').classList.add('danger');
  else {
    document.querySelector('#email').classList.remove('danger');
    document.querySelector('#join-button').classList.add('success');
  }
});
