const squares = document.querySelectorAll('td')
let player = 1;
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

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

function returnColor(pos) {
    return squares[pos].className
}

function matchColorCheck(one, two, three, four) {
    return (one === two && one === three && one === four && one !== '')
}

function winCheckH() {
    for (let row = 0; row < 36; row += 7) {
        for (let i = 0; i < 4; i++) {
            if (matchColorCheck(returnColor(row + i), returnColor(row + i + 1), returnColor(row + i + 2), returnColor(row + i + 3))) {
                return true
            } else {
                continue
            }
        }
    }
    return false
}

document.querySelector('h1').innerText = 'Player: ' + player
for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
        let pos = checkEmpty(i);
        if (pos === false) {
            alert('Invalid Place');
        } else {
            console.log(returnColor(pos))
            if (player == 1) {
                squares[pos].classList.add('red');
                board[pos] = player
                squares[pos].innerHTML = pos
                player = 2;
            } else {
                squares[pos].classList.add('yellow');
                board[pos] = player
                squares[pos].innerHTML = pos
                player = 1;
            }
            document.querySelector('h1').innerText = 'Player: ' + player
            console.log(winCheckH())
        }
    }
}