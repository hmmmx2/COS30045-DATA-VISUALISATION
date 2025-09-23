document.addEventListener('DOMContentLoaded', function() {
    setActivePage();
});

function navigateTo(page) {
    document.body.style.opacity = '0.7';
    setTimeout(function() {
        window.location.href = page;
    }, 200);
}

function setActivePage() {
    var currentPage = window.location.pathname.split('/').pop();
    if (!currentPage) currentPage = 'index.html';
    
    var navLinks = document.querySelectorAll('.nav-link');
    
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
        if (navLinks[i].getAttribute('href') === currentPage) {
            navLinks[i].classList.add('active');
        }
    }
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
