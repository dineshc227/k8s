document.addEventListener('DOMContentLoaded', () => {
    // Toggle functionality for command groups
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const commandGroup = document.getElementById(targetId);
            commandGroup.classList.toggle('collapsed');
            button.textContent = commandGroup.classList.contains('collapsed') ? 'Show' : 'Hide';
        });
    });

    // Copy functionality for commands
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const commandText = button.parentElement.querySelector('code').getAttribute('data-fulltext');
            navigator.clipboard.writeText(commandText).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                button.textContent = 'Error';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
            const floatingMailBtn = document.getElementById('floatingMailBtn');
            const popup = document.getElementById('popup');
            const closePopupBtn = document.getElementById('closePopup');
            
            // Open popup when floating mail button is clicked
            floatingMailBtn.addEventListener('click', function() {
                popup.style.display = 'flex';
            });
            
            // Close popup when close button is clicked
            closePopupBtn.addEventListener('click', function() {
                popup.style.display = 'none';
            });
            
            // Close popup when clicking outside the content
            popup.addEventListener('click', function(event) {
                if (event.target === this) {
                    popup.style.display = 'none';
                }
            });
            
            // Close popup with Escape key
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    popup.style.display = 'none';
                }
            });
        });