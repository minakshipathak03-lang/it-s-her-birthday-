/**
 * Birthday Card Controller
 * Handles the display logic between the envelope and the card.
 */
document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const card = document.getElementById('birthday-card');

    envelope.addEventListener('click', () => {
        // Hide envelope
        envelope.style.opacity = '0';
        
        // Use a slight delay for a "pro" fade transition
        setTimeout(() => {
            envelope.classList.add('hidden');
            card.classList.remove('hidden');
            card.style.opacity = '1';
        }, 300);
    });
});
