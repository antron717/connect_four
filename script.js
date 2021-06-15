const squares = document.querySelectorAll('td')

function checkEmpty(pos) {
    let n = (pos % 7) + 35
    while (n >= pos % 7) {
        if (!squares[n].classList.contains('full')) {
            document.querySelector('h1').innerHTML = n
            return n
        } else {
            n -= 7
            continue
        }

    }
    return false;
}

for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
        console.log(i)
        let pos = checkEmpty(i);
        if (pos === false) {
            alert('Invalid Place');
        } else {
            squares[pos].classList.add('circle-red');
            squares[pos].classList.add('full');
            squares[pos].innerHTML = pos
        }
    }
}