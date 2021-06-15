const squares = document.querySelectorAll('td')

function checkEmpty(pos) {
    for (let i = (pos % 7) + 35; i => pos; i -= 7) {
        if (!squares[i].classList.contains('full')) {
            return i
        } else {
            continue
        }
        return false;

    }
}

for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
        console.log(i)
        let pos = checkEmpty(i);
        if (!pos) {
            alert('Invalid Place');
        } else {
            squares[pos].classList.add('circle-red');
            squares[pos].classList.add('full');
            squares[pos].innerHTML = pos
        }
    }
}