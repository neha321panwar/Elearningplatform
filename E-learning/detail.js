
    let line;

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

    // Move the line
    updateLine(evt.currentTarget);
}

function updateLine(activeTab) {
    if (!line) {
        line = document.createElement('div');
        line.className = 'line';
        document.querySelector('.tab').appendChild(line);
    }

    line.style.width = `${activeTab.offsetWidth}px`;
    line.style.left = `${activeTab.offsetLeft}px`;
}

document.addEventListener("DOMContentLoaded", function() {
    const firstTab = document.querySelector(".tablinks");
    firstTab.click();
    updateLine(firstTab);
});
