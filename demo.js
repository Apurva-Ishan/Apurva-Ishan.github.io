const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const colorTitle = document.querySelector('.colorTitle');
const h3 = document.querySelector('h3');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'gothic') {
      body.style.backgroundColor = '#7498a4';
      h1.style.color = '#b0e7f9';
      h2.style.color = '#b0e7f9';
      colorTitle.style.color = '#38494f';
      colorTitle.textContent = 'Gothic'
      h3.style.color = '#b0e7f9'
      h3.textContent = 'Fun Fact: While red is often used to get attention, this subdued, grayish-blue is often used to recede into the background, making it an excellent, professional, and sophisticated choice for modern interior design or clothing to create a minimalist, relaxing vibe.'
    }
    if (e.target.id === 'parchment') {
      body.style.backgroundColor = '#f0e2d0';
      h1.style.color = '#9b9286';
      h2.style.color = '#9b9286';
      colorTitle.style.color = '#46423d';
      colorTitle.textContent = 'Parchment'
      h3.style.color = '#9b9286'
      h3.textContent = 'Fun Fact: Unlike a pure white background (which can cause eye strain), this off-white shade is considered much easier on the eyes for extended reading, making it a common choice for e-book readers and minimalist design.'
    }
    if (e.target.id === 'apricot') {
      body.style.backgroundColor = '#ea7b7b';
      h1.style.color = '#954e4e';
      h2.style.color = '#954e4e';
      colorTitle.style.color = '#402222';
      colorTitle.textContent = 'Apricot'
      h3.style.color = '#954e4e'
      h3.textContent = 'Fun Fact: As a warm, light color, this color is perceived as being closer to the viewer and larger than its actual size, which is useful in design to create a sense of intimacy.'
    }
    if (e.target.id === 'sundance') {
      body.style.backgroundColor = '#c3af54';
      h1.style.color = '#6e632f';
      h2.style.color = '#6e632f';
      colorTitle.style.color = '#19160b';
      colorTitle.textContent = 'Sundance'
      h3.style.color = '#6e632f'
      h3.textContent = 'Fun Fact: In color psychology, this type of dull, greenish-yellow is sometimes associated with wisdom, intellect, and sometimes jealousy or deceit, depending on the context.'
    }
    if (e.target.id === 'sapphire') {
      body.style.backgroundColor = '#334699';
      h1.style.color = '#4f6dee';
      h2.style.color = '#4f6dee';
      colorTitle.style.color = '#171f44';
      colorTitle.textContent = 'Sapphire'
      h3.style.color = '#4f6dee'
      h3.textContent = 'Fun Fact: While some shades of blue are considered sad, this deep, rich tone is often associated with calming the nervous system and boosting creativity.'
    }
  });
});
