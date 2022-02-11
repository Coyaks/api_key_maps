

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
    //     icon: "img/auto64.png",
    //     animation:google.maps.Animation.BOUNCE,
    //     labelContent: "AT104",
    //     labelAnchor: new google.maps.Point(30, 0),
    //     labelClass: "labels", // the CSS class for the label
        
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


// function initMap() {
//     var latLng = new google.maps.LatLng(49.47805, -123.84716);
//     var homeLatLng = new google.maps.LatLng(49.47805, -123.84716);

//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 12,
//         center: latLng,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     });

//     var marker1 = new MarkerWithLabel({
//         position: homeLatLng,
//         draggable: true,
//         raiseOnDrag: true,
//         map: map,
//         labelContent: "$425K",
//         labelAnchor: new google.maps.Point(22, 0),
//         labelClass: "labels", // the CSS class for the label
//         labelStyle: {
//             opacity: 0.75
//         }
//     });

//     var marker2 = new MarkerWithLabel({
//         position: new google.maps.LatLng(49.475, -123.84),
//         draggable: true,
//         raiseOnDrag: true,
//         map: map,
//         labelContent: "$395K",
//         labelAnchor: new google.maps.Point(22, 0),
//         labelClass: "labels", // the CSS class for the label
//         labelStyle: {
//             opacity: 1.0
//         }
//     });

//     var iw1 = new google.maps.InfoWindow({
//         content: "Home For Sale"
//     });
//     var iw2 = new google.maps.InfoWindow({
//         content: "Another Home For Sale"
//     });
//     google.maps.event.addListener(marker1, "click", function (e) {
//         iw1.open(map, this);
//     });
//     google.maps.event.addListener(marker2, "click", function (e) {
//         iw2.open(map, this);
//     });
// }