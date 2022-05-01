// On document load, update the current year in the footer
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('copyright-year').innerHTML = new Date().getFullYear();
}, false);