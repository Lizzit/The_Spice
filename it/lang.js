function myFunction() {
    document.getElementById("myLang").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.langbtn')) {
        var dropdowns = document.getElementsByClassName("lang-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}