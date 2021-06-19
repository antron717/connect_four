const squares = document.querySelectorAll('td')
let player = 1;

// if square does not contain 'red or 'yellow' return postion else rerturn false
function checkEmpty(pos) {
    let n = (pos % 7) + 35
    while (n >= pos % 7) {
        if (!squares[n].classList.contains('red') && !squares[n].classList.contains('yellow')) {
            return n
        } else {
            n -= 7
            continue
        }
    }
    return false;
}

// return colour at given postion
function returnColor(pos) {
    return squares[pos].className
}

// return true if all 4 colours match and are not empty string
function matchColorCheck(one, two, three, four) {
    return (one === two && one === three && one === four && one !== '')
}

function winCheckH() {
    for (let col = 0; col < 36; col += 7) {
        for (let row = 0; row < 4; row++) {
            if (matchColorCheck(returnColor(col + row), returnColor(col + row + 1), returnColor(col + row + 2), returnColor(col + row + 3))) {
                return true
            } else {
                continue
            }
        }
    }
    return false
}

function winCheckV() {
    for (let row = 0; row < 20; row++) {
        if (matchColorCheck(returnColor(row), returnColor(row + 7), returnColor(row + 14), returnColor(row + 21))) {
            return true
        } else {
            continue
        }
    }
    return false
}

function winCheckD() {
    for (let row = 21; row < 39; row++) {
        if (matchColorCheck(returnColor(row), returnColor(row - 6), returnColor(row - 12), returnColor(row - 18))) {
            return true
        } else if (row == 24) {
            row += 4
            continue
        } else {
            continue
        }
        for (let row = 24; row < 42; row++) {
            if (matchColorCheck(returnColor(row), returnColor(row - 8), returnColor(row - 16), returnColor(row - 24))) {
                return true
            } else if (row == 27) {
                row += 4
                continue
            } else {
                continue
            }
        }
    }
    return false
}

function winCheck() {
    return (winCheckH() || winCheckV() || winCheckD())
}

document.querySelector('h1').innerText = 'Player: ' + player
for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
        let pos = checkEmpty(i);
        if (pos === false) {
            alert('Invalid Place');
        } else {
            if (player == 1) {
                squares[pos].classList.add('red');
                // board[pos] = player
                // squares[pos].innerHTML = pos
                if (winCheck()) {
                    document.querySelector('h1').innerText = `Player ${player} WINS!`
                    alert(`Player ${player} wins`)
                }
                player = 2;
            } else {
                squares[pos].classList.add('yellow');
                // board[pos] = player
                // squares[pos].innerHTML = pos
                if (winCheck()) {
                    document.querySelector('h1').innerText = `Player ${player} WINS!`
                    alert(`Player ${player} wins`)
                }
                player = 1;
            }
            document.querySelector('h1').innerText = 'Player: ' + player
        }
    }
}