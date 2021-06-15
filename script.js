const squares = document.querySelectorAll('td')

function checkEmpty(pos) {
    if (!pos - 7) {
        for (let i = pos + 35; i > pos; i -= 7) {
            if (!squares[i].classList.contains('full')) {
                return i
            }
        }
    }
}
for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
        for (let j = 0; j)
            squares[i].classList.add('circle-red');
        squares[i].innerHTML = i
    }
}
