// Select all links in the head_links div
const links = document.querySelectorAll('.head_links a');

// Loop through links and add a click event listener to each
links.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        links.forEach(l => l.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 600,   // Keep animations smooth
        offset: 10,      // Avoid animations triggering too early
        debounceDelay: 50, // Optimize resize handling
        throttleDelay: 0,  // Optimize scroll handling
        mirror: true, 
        once: false,     // Allow animations to trigger multiple times
    });

    // Ensure AOS refreshes after all images are loaded
    window.addEventListener('load', () => {
        AOS.refresh();
    });

    // Pause other videos when one starts playing
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('play', () => {
            videos.forEach(v => {
                if (v !== video) {
                    v.pause();
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const fullText = this.previousElementSibling.querySelector('.full-text');
            const shortText = this.previousElementSibling.querySelector('.short-text');

            if (fullText.style.display === 'none') {
                fullText.style.display = 'inline';
                shortText.style.display = 'none';
                this.textContent = 'READ LESS';
            } else {
                fullText.style.display = 'none';
                shortText.style.display = 'inline';
                this.textContent = 'READ MORE';
            }
        });
    });
});
  
