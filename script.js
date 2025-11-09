// Fade in elements on load
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Add glitch effect to title on hover
    const title = document.querySelector('.cyber-title');
    
    title.addEventListener('mouseenter', function() {
        this.classList.add('glitch');
        setTimeout(() => {
            this.classList.remove('glitch');
        }, 500);
    });
});

// Add dynamic grid effect
document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('.cyber-grid');
    
    // Create additional grid lines for depth
    for (let i = 0; i < 20; i++) {
        const line = document.createElement('div');
        line.style.position = 'absolute';
        line.style.backgroundColor = 'rgba(100, 50, 200, 0.05)';
        line.style.zIndex = '0';
        
        if (Math.random() > 0.5) {
            // Vertical line
            line.style.width = '1px';
            line.style.height = '100%';
            line.style.left = `${Math.random() * 100}%`;
        } else {
            // Horizontal line
            line.style.height = '1px';
            line.style.width = '100%';
            line.style.top = `${Math.random() * 100}%`;
        }
        
        grid.appendChild(line);
    }
});