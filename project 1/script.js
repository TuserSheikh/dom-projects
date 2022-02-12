const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;

  document.body.style.background = `rgb(${red},${green},${blue})`;
});
