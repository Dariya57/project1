
// Adding CSS styles via JavaScript
const style = document.createElement('style');
style.textContent = `
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                font-family: Arial, sans-serif;
            }

            .hover-area {
                padding: 20px;
                background-color: #f0f0f0;
                border: 2px solid #333;
                cursor: pointer;
            }

            .circle {
                position: absolute;
                width: 50px;
                height: 50px;
                background-color: rgba(0, 150, 250, 0.7);
                border-radius: 50%;
                display: none;
                pointer-events: none;
            }
        `;
document.head.appendChild(style);

// JavaScript to handle mouseover events
const hoverArea = document.querySelector('.hover-area');
const circle = document.getElementById('circle');

hoverArea.addEventListener('mouseover', (e) => {
  circle.style.display = 'block';
  circle.style.left = `${e.pageX - 25}px`;
  circle.style.top = `${e.pageY - 25}px`;
});

hoverArea.addEventListener('mousemove', (e) => {
  circle.style.left = `${e.pageX - 25}px`;
  circle.style.top = `${e.pageY - 25}px`;
});

hoverArea.addEventListener('mouseout', () => {
  circle.style.display = 'none';
});
