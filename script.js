function iniciarMap(){
    //var coord = {lat:-34.5956145 ,lng: -58.4431949};
    //"coord es un objeto de js"
    var coordenadas = {
      lat:-12.2082984 , 
      lng: -76.9459916
    };

    generarMapa(coordenadas)

    // var map = new google.maps.Map(document.getElementById('map'),{
    //   zoom: 12,
    //   center: coord
    // });
    // //marcador
    // var marker = new google.maps.Marker({
    //   position: coord,
    //   map: map
    // });
}


function generarMapa(coordenadas){
  var mapa=new google.maps.Map(document.getElementById('mapa'),{
    zoom: 12,
    center: coordenadas
  })

  marcador=new google.maps.Marker({
    map:mapa,
    draggable: true, //true | false
    position: coordenadas
  })

}

function buscarLugar(){
  lat=parseFloat(document.querySelector('#lat').value)
  long=parseFloat(document.querySelector('#long').value)

  var coordenadas = {
    lat:lat, 
    lng: long
  }

  generarMapa(coordenadas)
}