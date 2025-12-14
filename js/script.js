document.addEventListener('DOMContentLoaded', () => {
    // Technical Tabs Logic
    const techLinks = document.querySelectorAll('.tech-sidebar li');
    const techContent = document.querySelector('.tech-content');

    // Content Map (Ideally this would be real HTML elements toggling, simplifying for this demo)
    // Actually, I defined panes in the HTML. Let's toggle them.

    techLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all links
            techLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');

            // Get target
            const target = link.getAttribute('onclick').match(/'([^']+)'/)[1];

            // Hide all panes
            document.querySelectorAll('.tech-pane').forEach(pane => {
                pane.style.display = 'none';
                pane.classList.remove('active');
            });

            // Show target pane logic
            // Since I only hardcoded two panes in the HTML example, I'll map them loosely.
            // In a real app, IDs would match perfectly.

            let paneId = 'pane-stack'; // default
            if (target === 'architecture') paneId = 'pane-architecture';
            else if (target === 'rule-engine') paneId = 'pane-stack'; // just showing same for now as placeholder
            else if (target === 'security') paneId = 'pane-stack'; // just showing same for now as placeholder

            const targetPane = document.getElementById(paneId);
            if (targetPane) {
                targetPane.style.display = 'block';
                targetPane.classList.add('active'); // for animation if added
            }
        });
    });

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
