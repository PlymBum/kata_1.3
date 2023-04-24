document.getElementById('slider__btn-show-more').onclick = function() {

    //console.log(document.getElementById('slider__items').className)
    if (document.getElementById('slider__items').className != 'slider__items slider__items--show-all') {
        document.getElementById('slider__items').classList.add('slider__items--show-all');
    } else
        document.getElementById('slider__items').classList.remove('slider__items--show-all');
}