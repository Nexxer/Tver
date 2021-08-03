ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [56.859645, 35.911860],
        zoom: 12,
        controls: []
    });

    // Добавим на карту ползунок масштаба и линейку.
    myMap.controls.add('zoomControl');

});;

$(document).ready(function () {
    var text = $('.info__text');
    var btnShow = $('.info__show');

    function showText() {
        if (text.height() > 209) {
            text.addClass('info__text_big');
            btnShow.show();
        } else {
            text.removeClass('info__text_big');
            btnShow.hide();
        }
    }

    showText()

    $(window).resize(function () {
        text.css('height', 'auto');
        showText();
    });

    btnShow.click(function () {
        if (btnShow.html() != "Свернуть") {
            text.animate({ height: text.get(0).scrollHeight }, 300);
            text.css("-webkit-line-clamp", "unset");
            text.removeClass('info__text_big');
            btnShow.html("Свернуть");
            return false;
        } else {
            var curHeight = text.height();
            text.height(curHeight).animate({ height: 212 }, 300, function () { text.css("-webkit-line-clamp", "9"); });
            text.css("height", "auto");
            text.addClass('info__text_big');
            btnShow.html("Читать полностью");
            return false;
        }
    })
});

$('.info__place')
;