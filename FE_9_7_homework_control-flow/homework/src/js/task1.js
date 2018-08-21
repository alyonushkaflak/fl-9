let username = prompt('Enter username to login', '');

if (username === 'User') {
  let password = prompt('Enter password', '');

  if (password === 'SuperUser') {
    alert(new Date().getHours() < 20 ? 'Good day!' : 'Good evening!');
  } else if (password === '' || password === null) {
    alert('Canceled');
  } else {
    alert('Wrong password');
}
  } else if (username === '' || username === null) {
  alert('Canceled');
  } else if (username.length < 4) {
  alert("I don't know any users having name length less than 4 symbols");
  } else {
  alert('I don’t know you');
}
