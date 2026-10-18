// Code By NhutCoder Team · https://nhutcoderteam.io.vn
// Matrix rain effect — falling "LOVE" characters on canvas
var canvas = document.getElementById('canvas-matrix'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Matrix text — "I LOVE U" repeated + heart symbol
var letters = 'I LOVE U I LOVE U I LOVE U I LOVE U I LOVE U ❤';
letters = letters.split('');

// Larger font size for better visibility (was 10 → now 18)
var fontSize = 18,
    columns = canvas.width / fontSize;

// Setup drops — each column starts at random Y for staggered effect
var drops = [];
for (var i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
}

// Draw function — runs every 33ms (~30fps)
function draw() {
    // Fade trail effect (lower alpha = longer trails)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        
        // Head character is brighter (white-pink), trail is dimmer pink
        var isHead = Math.random() > 0.975;
        if (isHead) {
            ctx.fillStyle = '#ffffff';
            ctx.shadowColor = '#ff5ba5';
            ctx.shadowBlur = 8;
        } else {
            ctx.fillStyle = '#ff5ba5';
            ctx.shadowBlur = 0;
        }
        
        ctx.font = 'bold ' + fontSize + 'px monospace';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        drops[i]++;
        
        // Reset drop to top randomly (creates the "rain" effect)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = Math.random() * -20;
        }
    }
    ctx.shadowBlur = 0;
}

// Handle window resize
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = canvas.width / fontSize;
    drops = [];
    for (var i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }
});

setInterval(draw, 33);
