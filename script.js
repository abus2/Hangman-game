window.onload = () => {
    const canvas = document.getElementById("hangman-animation");
    const ctx = canvas.getContext("2d");
  
    // Draw Hangman Stand
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3;
  
    // Base
    ctx.beginPath();
    ctx.moveTo(20, 180);
    ctx.lineTo(280, 180);
    ctx.stroke();
  
    // Pole
    ctx.beginPath();
    ctx.moveTo(50, 180);
    ctx.lineTo(50, 20);
    ctx.stroke();
  
    // Top bar
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(150, 20);
    ctx.stroke();
  
    // Rope
    ctx.beginPath();
    ctx.moveTo(150, 20);
    ctx.lineTo(150, 50);
    ctx.stroke();
  
    // Animated Head
    const drawHead = () => {
      ctx.clearRect(100, 50, 100, 100); // Clear previous frame
      ctx.beginPath();
      ctx.arc(150, 70, 20, 0, Math.PI * 2);
      ctx.stroke();
      requestAnimationFrame(drawHead);
    };
  
    drawHead();
  
    // Button Interactions
    document.getElementById("play-now").addEventListener("click", () => {
      alert("Play Now: Game starting soon!");
    });
  
    document.getElementById("learn-more").addEventListener("click", () => {
      alert("Learn More: This is how the game works!");
    });
  };
  
  // Example JavaScript for dynamic interactions
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`${card.querySelector('h3').textContent} clicked!`);
    });
});

// scripts.js

document.getElementById('start-button').addEventListener('click', function() {
    alert('Starting the game! Good luck!');
    // You can redirect to the game page or initiate the game logic here
  });
  
  // scripts.js

// Sample leaderboard data for the preview (you can fetch real data from the backend)
const leaderboardData = [
    { rank: 1, name: "Player1", score: 1500 },
    { rank: 2, name: "Player2", score: 1200 },
    { rank: 3, name: "Player3", score: 1000 },
    { rank: 4, name: "Player4", score: 850 },
    { rank: 5, name: "Player5", score: 700 }
];

// Function to render the leaderboard preview
function renderLeaderboard() {
    const tableBody = document.querySelector('#leaderboard-table tbody');
    
    leaderboardData.forEach(player => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${player.rank}</td>
            <td>${player.name}</td>
            <td>${player.score}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Call the render function when the page loads
window.onload = renderLeaderboard;

// Function to view the full leaderboard (could redirect or show more data)
function viewFullLeaderboard() {
    alert("Redirecting to the full leaderboard...");
    // You can add a redirect to a full leaderboard page or fetch more data from the backend
}


// JavaScript to add smooth hover effect on testimonials
const testimonials = document.querySelectorAll('.testimonial');

testimonials.forEach((testimonial) => {
    testimonial.addEventListener('mouseenter', () => {
        testimonial.style.opacity = '0.8'; // Slight transparency on hover
    });

    testimonial.addEventListener('mouseleave', () => {
        testimonial.style.opacity = '1'; // Reset opacity when not hovered
    });
});

// Smooth Scroll for Anchor Links in the Footer
document.querySelectorAll('.footer-links a, .footer-socials a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

