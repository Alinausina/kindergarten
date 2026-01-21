
ymaps.ready(init);
    
function init() {
    var myMap = new ymaps.Map("map", {
        center: [56.3166, 43.9926], 
        zoom: 16,
        controls: ['zoomControl', 'fullscreenControl']
    });
    
    var myPlacemark = new ymaps.Placemark([56.3166, 43.9926], {
        hintContent: 'Православный детский сад',
        balloonContentHeader: 'Православный детский сад<br>во имя Преподобного Серафима Саровского',
        balloonContentBody: 'г. Нижний Новгород, ул. Шаляпина, 25<br>' +
                           'Телефон: +7 (831) 274-63-11<br>' +
                           'Email: pravoslavdetsad.nn@mail.ru',
        balloonContentFooter: 'Время работы: 6:30 - 18:30'
    });
    
    myMap.geoObjects.add(myPlacemark);
    
    setTimeout(function() {
        myPlacemark.balloon.open();
    }, 1500);
    
    var routeButton = new ymaps.control.Button({
        data: {
            content: "Построить маршрут",
            title: "Найти путь до детского сада"
        },
        options: {
            maxWidth: 200,
            selectOnClick: false
        }
    });
    
    routeButton.events.add('press', function () {
        alert('Функция построения маршрута будет реализована');
    });
    
    myMap.controls.add(routeButton, { float: 'right' });
}
