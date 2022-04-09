

function clock() {
    var hour = document.getElementById('hour')
    var min = document.getElementById('min')
    var sec = document.getElementById('sec')
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    h = (h<10) ? "0" + h : h
    m = (m<10) ? "0" + m : m
    s = (s<10) ? "0" + s : s
    
    hour.innerHTML = h
    min.innerHTML = m
    sec.innerHTML = s
}

var interval = setInterval(clock,1000);
