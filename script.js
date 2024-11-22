
// ---------Preveiouse code for the Toggle visibity for the content-------------------

// Get buttons and content elements
// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');

// const content31 = document.getElementById('content31');
// const content32 = document.getElementById('content32');


// btn1.addEventListener('click', () => {
//   content1.style.display = content1.style.display === 'none' ? 'block' : 'none';
// });
// btn2.addEventListener('click', () => {
//   content2.style.display = content2.style.display === 'none' ? 'block' : 'none';
// });





// Get buttons and content elements

for (let i = 1; i <= 32; i++) {
  const btn = document.getElementById(`btn${i}`);
  const content = document.getElementById(`content${i}`);

  if (btn && content) {
    toggleContent(btn, content, 'active');
  }
}

// Toggle visibility for Lists
function toggleContent(button, content, activeClass) {
  button.addEventListener('click', () => {
    const isHidden = content.style.display === 'none' || content.style.display === '';
    content.style.display = isHidden ? 'block' : 'none';
    
    // Toggle active class for the button
    if (isHidden) {
      button.classList.add(activeClass);
    } else {
      button.classList.remove(activeClass);
    }
  });
}


