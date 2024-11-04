// Get buttons and content elements
const btn1 = document.getElementById('btn1');
const content1 = document.getElementById('content1');
const btn2 = document.getElementById('btn2');
const content2 = document.getElementById('content2');

// Toggle visibility for List 1
btn1.addEventListener('click', () => {
  content1.style.display = content1.style.display === 'none' ? 'block' : 'none';
});

// Toggle visibility for List 2
btn2.addEventListener('click', () => {
  content2.style.display = content2.style.display === 'none' ? 'block' : 'none';
});
