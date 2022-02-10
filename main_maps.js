

function initMap() {
    //var coord = {lat:-34.5956145 ,lng: -58.4431949};
    //"coord es un objeto de js"
    var coordenadas = {
        lat: -12.2082984,
        lng: -76.9459916
    };

    generarMapa(coordenadas)
}


function generarMapa(coordenadas) {
    var mapa = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: coordenadas
    })
    // AGREGAR MARKER
    var label='hola'
    marcador = new google.maps.Marker({
        map: mapa,
        position: coordenadas,
        draggable: true, //true | false
        animation: google.maps.Animation.DROP,
        icon: "img/auto64.png",
        label: label
        
    })

    // var marcador = new MarkerWithLabel({
    //     map: mapa,
    //     position: coordenadas,
    //     draggable: true, //true | false
    //     //icon: "https://cdn-icons-png.flaticon.com/512/4244/4244908.png",
    //     icon: "img/auto64.png",
    //     labelContent: "Hola",
    //     labelAnchor: new google.maps.Point(22, 0),
    //     labelClass: "labels", // the CSS class for the label
    //     labelStyle: {
    //         opacity: 0.75
    //     }

    // })

}

// click btn buscar lat lng
function buscarLugar() {
    lat = parseFloat(document.querySelector('#lat').value)
    long = parseFloat(document.querySelector('#long').value)

    var coordenadas = {
        lat: lat,
        lng: long
    }

    generarMapa(coordenadas)
}