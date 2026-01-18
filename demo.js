const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'gothic') {
      body.style.backgroundColor = '#7498a4';
      h1.style.color = '#38494f';
      h2.style.color = '#38494f';
    }
    if (e.target.id === 'parchment') {
      body.style.backgroundColor = '#f0e2d0';
      h1.style.color = '#46423d';
      h2.style.color = '#46423d';
    }
    if (e.target.id === 'apricot') {
      body.style.backgroundColor = '#ea7b7b';
      h1.style.color = '#402222';
      h2.style.color = '#402222';
    }
    if (e.target.id === 'sundance') {
      body.style.backgroundColor = '#c3af54';
      h1.style.color = '#6e632f';
      h2.style.color = '#6e632f';
    }
    if (e.target.id === 'sapphire') {
      body.style.backgroundColor = '#334699';
      h1.style.color = '#171f44';
      h2.style.color = '#171f44';
    }
  });
});
