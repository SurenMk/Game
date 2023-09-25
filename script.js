let count = 0
let td = ""
let divo = document.getElementById("divo")
let gcount = document.getElementById("in3")
let counts = ""
let c1 = ""
let c2 = ""
let dorw = document.getElementById("dorw")
let mejtex = document.getElementById("mejtex")
let p1 = ""
let p2 = ""
let in1 = ""
let in2 = ""
let load = ""
let table = ""
let turn = ""


document.getElementById("closeb").onclick = () => {
    dorw.style.display = "none"
    mejtex.style.display = "none"
    datark()
}

document.getElementById("pakel").onclick = () => {
    dorw.style.display = "none"
    mejtex.style.display = "none"
    datark()
}

document.getElementById("closeb1").onclick = () => {
    dorw.style.display = "none"
    document.getElementById("mejtex1").style.display = "none"
    load.style.display = "block"
    in1.style.display = "none"
    in2.style.display = "none"
    c1.style.display = "none"
    c2.style.display = "none"
    reset.style.display = "none"
    table.style.display = "none"
    turn.style.display = "none"
    document.body.style.overflow = "hidden"
    setTimeout(() => {
        location.reload()
    }, 400);
}

document.getElementById("pakel1").onclick = () => {
    dorw.style.display = "none"
    document.getElementById("mejtex1").style.display = "none"
    load.style.display = "block"
    in1.style.display = "none"
    in2.style.display = "none"
    c1.style.display = "none"
    c2.style.display = "none"
    reset.style.display = "none"
    table.style.display = "none"
    turn.style.display = "none"
    document.body.style.overflow = "hidden"
    setTimeout(() => {
        location.reload()
    }, 400);
}


divo.style.height = window.innerHeight + "px"
function func() {
    divo.style.display = "none"
    load = document.createElement("div")
    load.style.height = window.innerHeight + "px"
    load.style.width = window.innerWidth + "px"
    load.style.position = "relative"
    load.style.backgroundColor = "rgba(165,206,209,255)"
    let img = document.createElement("div")
    img.style.height = "400px"
    img.style.width = "80%"
    img.style.position = "absolute"
    img.style.top = "0"
    img.style.bottom = "0"
    img.style.left = "0"
    img.style.right = "0"
    img.style.margin = "auto"
    img.style.backgroundImage = "url(./XO.gif)"
    img.style.backgroundRepeat = "no-repeat"
    img.style.backgroundSize = "100% 100%"
    load.appendChild(img)
    document.body.append(load)

    if (gcount.value === "") {
        counts = 5
    } else if (gcount.value < 1) {
        counts = 5
    } else {
        counts = gcount.value
    }


    setTimeout(() => {
        let reset = document.createElement("button")
        reset.setAttribute("id", "reset")
        reset.innerHTML = "New game"
        reset.onclick = () => {
            dorw.style.display = "none"
            document.getElementById("mejtex1").style.display = "none"
            load.style.display = "block"
            in1.style.display = "none"
            in2.style.display = "none"
            c1.style.display = "none"
            c2.style.display = "none"
            reset.style.display = "none"
            table.style.display = "none"
            turn.style.display = "none"
            document.body.style.overflow = "hidden"
            setTimeout(() => {
                location.reload()
            }, 400);
        }
        document.body.append(reset)
        load.style.display = "none"
        p1 = document.getElementById("in1")
        p2 = document.getElementById("in2")
        in1 = document.createElement("input")
        c1 = document.createElement("input")
        c1.style.border = "none"
        c1.style.backgroundColor = "white"
        c1.style.width = "120px"
        c1.style.position = "absolute"
        c1.style.top = "260px"
        c1.setAttribute("id", "count1")
        c1.style.left = "40px"
        let br = document.createElement("br")
        c2 = document.createElement("input")
        c2.style.width = "120px"
        c2.style.border = "none"
        c2.style.position = "absolute"
        c2.style.top = "260px"
        c2.style.right = "40px"
        c2.style.backgroundColor = "white"
        c2.setAttribute("id", "count2")
        c1.setAttribute("disabled", "")
        c2.setAttribute("disabled", "")
        c2.value = 0
        c1.value = 0
        in1.style.border = "none"
        in1.style.position = "absolute"
        in1.style.width = "120px"
        in1.style.top = "220px"
        in1.style.left = "74px"
        in2 = document.createElement("input")
        in2.style.width = "120px"
        in2.style.position = "absolute"
        in2.style.top = "220px"
        in2.style.right = "10px"
        in2.style.border = "none"
        document.body.append(in1)
        document.body.append(c1)
        document.body.append(in2)
        document.body.append(c2)
        document.body.append(br)
        turn = document.createElement("h1")
        turn.setAttribute("id", "turn")
        turn.innerHTML = "X's turn"
        document.body.append(turn)
        if (p1.value == "") {
            in1.value = "Player X"
            in1.setAttribute("disabled", "")
            in1.style.backgroundColor = "transparent"
        } else {
            in1.value = p1.value
            in1.setAttribute("disabled", "")
            in1.style.backgroundColor = "transparent"
        }
        if (p2.value == "") {
            in2.value = "Player O"
            in2.setAttribute("disabled", "")
            in2.style.backgroundColor = "transparent"
        } else {
            in2.value = p2.value
            in2.setAttribute("disabled", "")
            in2.style.backgroundColor = "transparent"
        }
        table = document.createElement("table")
        table.setAttribute("id", "tab")
        table.style.margin = "auto"
        table.style.borderCollapse = "collapse"
        document.body.append(table)
        let tr = ""
        for (let i = 0; i < 3; i++) {
            let tr = document.createElement("tr")
            for (let j = 0; j < 3; j++) {
                let td = document.createElement("td")
                td.style.height = "150px"
                td.style.width = "150px"
                td.style.cursor = "pointer"
                td.style.transition = "300ms"
                td.style.backgroundColor = "rgba(165,206,209,255)"
                td.style.borderCollapse = "collapse"
                tr.appendChild(td)
                td.setAttribute("class", "tdner")
                td.addEventListener("mouseover", onover)
                td.addEventListener("mouseleave", onleave)
                function onleave() {
                    td.style.backgroundColor = "rgba(165,206,209,255)"
                }
                function onover() {
                    td.style.backgroundColor = "rgb(188, 217, 219)"
                }
                td.onclick = () => {
                    if (td.innerHTML === "") {
                        if (count % 2 === 0) {
                            td.innerHTML = "<h1 id = 'x'>X</h1>"
                            turn.innerHTML = "O's turn"
                        } else { td.innerHTML = "<h1 id = 'o'>O</h1>"; turn.innerHTML = "X's turn" }
                        count++
                        win()
                    }
                }
            }
            table.appendChild(tr)
        }
        let tdzang = document.getElementsByClassName("tdner")
        for (let index = 0; index < tdzang.length; index++) {
            tdzang[0].style.borderRight = "6px solid rgba(133,185,192,255)"
            tdzang[0].style.borderBottom = "6px solid rgba(133,185,192,255)"
            tdzang[1].style.borderBottom = "6px solid rgba(133,185,192,255)"
            tdzang[1].style.borderLeft = "6px solid rgba(133,185,192,255)"
            tdzang[1].style.borderRight = "6px solid rgba(133,185,192,255)"
            tdzang[2].style.borderLeft = "6px solid rgba(133,185,192,255)"
            tdzang[2].style.borderBottom = "6px solid rgba(133,185,192,255)"
            tdzang[3].style.borderBottom = "6px solid rgba(133,185,192,255)"
            tdzang[3].style.borderTop = "6px solid rgba(133,185,192,255)"
            tdzang[3].style.borderRight = "6px solid rgba(133,185,192,255)"
            tdzang[4].style.borderBottom = "6px solid rgba(133,185,192,255)"
            tdzang[4].style.borderLeft = "6px solid rgba(133,185,192,255)"
            tdzang[4].style.borderTop = "6px solid rgba(133,185,192,255)"
            tdzang[4].style.borderRight = "6px solid rgba(133,185,192,255)"
            tdzang[5].style.borderBottom = "6px solid rgba(133,185,192,255)"
            tdzang[5].style.borderTop = "6px solid rgba(133,185,192,255)"
            tdzang[5].style.borderLeft = "6px solid rgba(133,185,192,255)"
            tdzang[6].style.borderTop = "6px solid rgba(133,185,192,255)"
            tdzang[6].style.borderRight = "6px solid rgba(133,185,192,255)"
            tdzang[7].style.borderRight = "6px solid rgba(133,185,192,255)"
            tdzang[7].style.borderLeft = "6px solid rgba(133,185,192,255)"
            tdzang[7].style.borderTop = "6px solid rgba(133,185,192,255)"
            tdzang[8].style.borderLeft = "6px solid rgba(133,185,192,255)"
            tdzang[8].style.borderTop = "6px solid rgba(133,185,192,255)"
        }
    }, 900);

}

function datark() {
    let tdzang = document.getElementsByClassName("tdner")
    for (let i = 0; i < tdzang.length; i++) {
        tdzang[i].innerHTML = ""
    }
    count = 0
    turn.innerHTML = "X's turn"
}

function win() {
    let tdzang = document.getElementsByClassName("tdner")
    let comb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]
    let t = false
    for (let j = 0; j < comb.length; j++) {


        if (tdzang[comb[j][0]].innerText == "X" && tdzang[comb[j][1]].innerText == "X" && tdzang[comb[j][2]].innerText == "X") {
            t = true
            setTimeout(() => {
                datark()
                c1.value++
                if (c1.value == counts) {
                    document.getElementById("dorw").style.display = "block"
                    document.getElementById("mejtex1").style.display = "block"
                    document.getElementById("grvac1").innerHTML = "X win!"
                    document.getElementById("gr1").innerHTML = `${in1.value} won the game!`
                    document.body.style.overflow = "hidden"
                }
            }, 300); break
        }
        if (tdzang[comb[j][0]].innerText == "O" && tdzang[comb[j][1]].innerText == "O" && tdzang[comb[j][2]].innerText == "O") {
            t = true
            setTimeout(() => {
                c2.value++
                if (c2.value == counts) {
                    document.getElementById("dorw").style.display = "block"
                    document.getElementById("mejtex1").style.display = "block"
                    document.getElementById("grvac1").innerHTML = "O win!"
                    document.getElementById("gr1").innerHTML = `${in2.value} won the game!`
                    document.body.style.overflow = "hidden"
                }
                datark()
            }, 300); break
        }
        setTimeout(() => {
            if (count == 9 && t == false) {
                dorw.style.display = "block"
                mejtex.style.display = "block"
                turn.innerHTML = "It's a draw"
                document.body.style.overflow = "hidden"
            }
        }, 1);

    }
}