
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

function toggleMenu() {
  const navLinks = document.getElementById("navLink");
  const userControls = document.getElementById("userControl");
  navLinks.classList.toggle("active");
  userControls.classList.toggle("active");
}

for (let i = 1; i <= 32; i++) {
  const btn = document.getElementById(`btn${i}`);
  const content = document.getElementById(`content${i}`);

  if (btn && content) {
    toggleContent(btn, content, 'active');
  }
}

// Toggle visibility for Lists
function toggleContent(button, content, activeClass) {
  const icon = button.querySelector('.feature-icon'); // Target the icon inside the button

  button.addEventListener('click', () => {
    const isContentVisible = content.style.display === 'block';

    // Toggle the content visibility
    content.style.display = isContentVisible ? 'none' : 'block';

    // Add/remove the active class for styling
    button.classList.toggle(activeClass, !isContentVisible);

    // Change the icon image based on visibility
    if (icon) {
      icon.src = isContentVisible
        ? '/imgs/Caret down.png' // Default image when content is hidden
        : '/imgs/Caret UP.png'; // Alternate image when content is shown
    }
  });
}


