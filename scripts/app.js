function reload() {
    window.location.href = "./index.html"
}
function execute() {
    V = document.getElementById("voltage").value
    R = document.getElementById("resistance").value
    I = document.getElementById("Current").value
    if (I == "") {
        I = V / R
        document.getElementById("Current").innerHTML = I
    }
    else if (R == "") {
        R = V / I
        document.getElementById("resistance").innerHTML = R
    }
}
function calculate() {
    if (document.getElementById("yes/no").value == "no") {
        if (document.getElementById("s/p").value == "Series") {
            t = 0
            for (i = 1; i <= document.getElementById("no.").value; i++) {
                let a = prompt("Enter magnitude of resistor " + i + " in ohms: ")
                a = parseInt(a)
                t = t + a
            }
            document.getElementById("overall").innerHTML = t
        }
        else if (document.getElementById("s/p").value == "Parallel") {
            t = 0
            for (i = 1; i <= document.getElementById("no.").value; i++) {
                let a = prompt("Enter magnitude of resistor " + i + " in ohms:")
                a = parseInt(a)
                t = t + (1 / a)
                f = (1 / t)
            }
            document.getElementById("overall").innerHTML = f
        }
    }
    else if (document.getElementById("yes/no").value == "yes") {
        let a = prompt("Enter the magnitude of one of the resistors: ")
        a = parseInt(a)
        if (document.getElementById("s/p").value == "Series") {
            t = document.getElementById("no.").value * a
            document.getElementById("overall").innerHTML = t
        }
        else if (document.getElementById("s/p").value == "Parallel") {
            t = (1 / a) * document.getElementById("no.").value
            f = (1 / t)
            document.getElementById("overall").innerHTML = f
        }
    }
}