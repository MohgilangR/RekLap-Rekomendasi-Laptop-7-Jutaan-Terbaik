function openSidebar() {
    document.getElementById("sidebar").style.width = "280px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}

document.addEventListener("DOMContentLoaded", () => {
    
    const animatedElements = document.querySelectorAll('.laptop-card');

    if (animatedElements.length === 0) return;

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});
