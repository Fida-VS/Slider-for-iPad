var polygon = document.querySelector('.polygon');
var slides2 = document.querySelectorAll('.sl2');
var slideInner2 = document.querySelector('.slide-inner2');
var containerInner = document.querySelector('.container-inner');
var cells = document.querySelectorAll('.cont-inner');

polygon.addEventListener('touchmove', dragMove);
polygon.addEventListener('touchend', dragDrop);

polygon.ondragstart = function() {
    return false;
  };

var itemAppend;

function dragMove(event) {

    event.preventDefault();

    var touch = event.targetTouches[0];

    polygon.style.top = `${touch.pageY - containerInner.offsetTop - (polygon.offsetWidth / 2)}px`;
    polygon.style.left = `${touch.pageX - containerInner.offsetLeft - (polygon.offsetHeight/2)}px`;

    cells.forEach(item => {
        if (
            polygon.getBoundingClientRect().top + polygon.offsetWidth / 2 < item.getBoundingClientRect().bottom &&
            polygon.getBoundingClientRect().right - polygon.offsetWidth / 2 > item.getBoundingClientRect().left &&
            polygon.getBoundingClientRect().bottom - polygon.offsetWidth / 2 > item.getBoundingClientRect().top &&
            polygon.getBoundingClientRect().left + polygon.offsetWidth / 2 < item.getBoundingClientRect().right
        ) {
            item.classList.add('active');
            itemAppend = item;
        }
        else {
            item.classList.remove('active');
        }
    });
}

function dragDrop(element) {
    if (itemAppend.classList.contains('active')) {
        itemAppend.append(this);
        this.style.top = `${itemAppend.offsetTop}px`;
        this.style.left = `${itemAppend.offsetLeft}px`;
    }
    else {
        this.style.top = `${itemAppend.offsetTop}px`;
        this.style.left = `${itemAppend.offsetLeft}px`;
    }
}


