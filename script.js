// Critique Field Manual - Interactive Elements

// Easter egg: Show "The medium is the message" on scroll
let scrollTimeout;
const easterEgg = document.getElementById('mediumMessage');

window.addEventListener('scroll', () => {
    easterEgg.classList.add('show');
    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        easterEgg.classList.remove('show');
    }, 2000);
});

// Card hover effects with subtle parallax
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        const icon = card.querySelector('.card-icon');
        icon.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        
        const icon = card.querySelector('.card-icon');
        icon.style.transform = `translate(${deltaX * 5}px, ${deltaY * 5}px) scale(1.1)`;
    });
    
    card.addEventListener('mouseleave', (e) => {
        const icon = card.querySelector('.card-icon');
        icon.style.transform = 'translate(0, 0) scale(1)';
    });
});

// Rhythm indicator dynamic speed
const indicator = document.querySelector('.indicator-bar');
let speed = 4;

document.querySelector('.fast-phase').addEventListener('click', () => {
    speed = 2;
    indicator.style.animationDuration = `${speed}s`;
    showNotification('Fast mode activated');
});

document.querySelector('.slow-phase').addEventListener('click', () => {
    speed = 8;
    indicator.style.animationDuration = `${speed}s`;
    showNotification('Slow mode activated');
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--black);
        color: var(--white);
        padding: 0.75rem 1.5rem;
        font-size: 0.85rem;
        font-weight: 500;
        border: 2px solid var(--accent);
        z-index: 1000;
        animation: slideDown 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 1500);
}

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translate(-50%, -20px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translate(-50%, 0);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -20px);
        }
    }
`;
document.head.appendChild(style);

// Keyboard shortcuts for power users
document.addEventListener('keydown', (e) => {
    // Press 'w' for Witness
    if (e.key === 'w' && !e.ctrlKey && !e.metaKey) {
        cards[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        cards[0].style.animation = 'none';
        setTimeout(() => cards[0].style.animation = '', 10);
    }
    
    // Press 's' for System
    if (e.key === 's' && !e.ctrlKey && !e.metaKey) {
        cards[1].scrollIntoView({ behavior: 'smooth', block: 'center' });
        cards[1].style.animation = 'none';
        setTimeout(() => cards[1].style.animation = '', 10);
    }
    
    // Press 'a' for Assumption
    if (e.key === 'a' && !e.ctrlKey && !e.metaKey) {
        cards[2].scrollIntoView({ behavior: 'smooth', block: 'center' });
        cards[2].style.animation = 'none';
        setTimeout(() => cards[2].style.animation = '', 10);
    }
    
    // Press 'e' for Experiment
    if (e.key === 'e' && !e.ctrlKey && !e.metaKey) {
        cards[3].scrollIntoView({ behavior: 'smooth', block: 'center' });
        cards[3].style.animation = 'none';
        setTimeout(() => cards[3].style.animation = '', 10);
    }
});

// Log hidden mantras to console for discovery
console.log('%c🔍 Hidden Mantras Found:', 'font-weight: bold; font-size: 14px; color: #ff3300;');
console.log('%c1. Name what the work is doing, not what you would do.', 'font-size: 12px;');
console.log('%c2. Ship early. Revise honestly. Iterate aggressively.', 'font-size: 12px;');
console.log('%c3. One next experiment.', 'font-size: 12px;');
console.log('%c4. The medium is the message.', 'font-size: 12px;');
console.log('%c5. Fast. Then Slow.', 'font-size: 12px;');
console.log('%cKeyboard shortcuts: w, s, a, e to navigate cards', 'font-size: 11px; color: #666;');

// Add subtle fade-in on page load for better initial experience
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
