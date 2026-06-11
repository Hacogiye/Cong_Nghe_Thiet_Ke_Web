// const banco = document.getElementById("banco");
// let wbox = "<div class = "white"></div>";
// let bbox = "<div class = "black"></div>";
// let str = "<div class = "banco"></div>";

// for (let i = 0; i < 8; i++) {
//     for (let j = 0; j < 8; j++) {
//         if ((i + j) % 2 == 0) {
//             str += wbox;
//         } else {
//             str += bbox;
//         }
//     }
// }
let banco = document.getElementById('banco')
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let cell = document.createElement('div');
        if ((i + j) % 2 == 0) {
            cell.className="white";
        } else {
            cell.className="black";
        }
        banco.appendChild(cell);
    }
}