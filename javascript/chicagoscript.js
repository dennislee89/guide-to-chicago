$(document).ready(function(){
  /*Chicago Coordinates*/
  var lat= 41.850029 ;
  var long= -87.650047; 
  $.getJSON("http://ip-api.com/json",function(data2){
    /* For current local geo
    lat=data2.lat;
    long=data2.lon;
    */
    var api='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&APPID=26a013369be5f6168250cc53379863e2';
         console.log(lat);
  $.getJSON(api,function(data){
    var fTemp;
    var kTemp;
    var cTemp;
    var tempSwap=true;

    var type=data.weather[0].description;
      kTemp=data.main.temp;
    var wind=data.wind.speed;
    var city=data.name;
    
 
    
    //Look over 12/14/16
    var iconCode = data.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    $(".icon").html("<img src='" + iconUrl  + "'>");
    //stop here
    
    fTemp=(kTemp*(9/5)-459.67).toFixed(1);
    cTemp=(kTemp-273).toFixed(1);  
     
     $('#city').html(city + '-Weather');
    $('#wind').html(wind);
    $('#temp').html('Current temp<br><br>'  + fTemp + "&#8457;");
    $('#type').html('Conditions <br><br>' + type);
      
    
    if(fTemp < 10){
      $('#here').html('it is too cold');
    } else{
      $('#here').html('cold');
    };
    
     if(fTemp<10){
    $('outside').css('background-image','url(http://wallpapercave.com/wp/9uTVIpA.jpg')  
    } else {
      $('.outside').css('background-image','url(https://static.pexels.com/photos/42499/pexels-photo-42499.jpeg').style.backgroundSize='cover';
    }
  
    
    });
    
  });
  
});

/*Side Nav*/
function openNav() {
    document.getElementById("mySidenav").style.width = '200px';
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}