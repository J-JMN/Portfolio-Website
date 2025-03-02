document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('.page').classList.add('page-exit');
            setTimeout(() => {
                window.location.href = link.getAttribute('href');
            }, 134);
        });
    });
});



