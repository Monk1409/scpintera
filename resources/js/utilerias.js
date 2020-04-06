function fecha() {
    meses = new Array("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre");
    today = new Date();
    dia = today.getDate();
    mes = today.getMonth();
    anio = today.getFullYear();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    m = tiempo(m);
    s = tiempo(s);
    if (h >= 12) {
        AmPm = " p.m.";
    } else {
        AmPm = " a.m.";
    }
    if (h > 12) {
        h -= 12;
    }
    if (h === 0) {
        h = 12;
    }
    texto = "Hoy es " + dia + " de " + meses[mes] + " del " + anio + " ";
    texto += h + ":" + m + ":" + s + " " + AmPm;
    document.getElementById('reloj').innerHTML = texto;
    setTimeout('fecha()', 500);
}
function tiempo(i) {
    if (i === 9 || i === 8 || i === 7 || i === 6 || i === 5 || i === 4 || i === 3 || i === 2 || i === 1 || i === 0) {
        i = "0" + i;
    }
    return i;
}

function startPageTimer() {
    window.open('', '_self', '');
    window.close();
}        