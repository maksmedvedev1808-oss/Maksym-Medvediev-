const text = document.getElementById('text');

const textColor = document.getElementById('textColor');
const bgColor = document.getElementById('bgColor');

const size = document.getElementById('size');
const sizeValue = document.getElementById('sizeValue');

const bold = document.getElementById('bold');
const italic = document.getElementById('italic');
const underline = document.getElementById('underline');

const toggle = document.getElementById('toggle');
const mode = document.getElementById('mode');
const reset = document.getElementById('reset');

textColor.addEventListener('input', () => {
  text.style.color = textColor.value;
});

bgColor.addEventListener('input', () => {
  document.body.style.background = bgColor.value;
});

size.addEventListener('input', () => {
  text.style.fontSize = size.value + 'px';
  sizeValue.textContent = size.value;
});

bold.addEventListener('click', () => {
  text.style.fontWeight = text.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

italic.addEventListener('click', () => {
  text.style.fontStyle = text.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

underline.addEventListener('click', () => {
  text.style.textDecoration = text.style.textDecoration === 'underline' ? 'none' : 'underline';
});

toggle.addEventListener('click', () => {
  text.style.display = text.style.display === 'none' ? 'block' : 'none';
});

mode.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

reset.addEventListener('click', () => {
  text.style = '';
  document.body.style = '';
  document.body.classList.remove('dark');
  size.value = 10;
  sizeValue.textContent = '';
});
