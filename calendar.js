function RenderDate() {
    var dt = new Date();
    dt.setDate(1);
    var day = dt.getDay();

    var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();

    var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();

    var today = new Date().getDate();
    var months = [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembr",
    ];
    var day = [
        "Lunedì",
        "Martedì",
        "Mercoledì",
        "Giovedì",
        "Venerdì",
        "Sabato",
        "Domenica"
    ];

    document.getElementById("date_str").innerHTML = day[dt.getDay()] + " " + dt.getDate() + " " + months[dt.getMonth()] + " " + dt.getFullYear();
    document.getElementById("month").innerHTML = months[dt.getMonth()];

    var cells = "";

    for (x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }

    for (i = 1; i <= endDate; i++) {
        if (i == today) {
            cells += "<div class='today'>" + i + "</div>";
        } else {
            cells += "<div>" + i + "</div>";
        }
    }

    document.getElementsByClassName("days")[0].innerHTML = cells;
}

function moveDate(para)