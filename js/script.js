// SLIDER 

$(document).ready(function () {
  $('.js-slick').slick({
    dots: false,
    draggable: false,
    fade: true,
    speed: 1000,
    mobileFirst:true
  });
  
  $('.js-slick').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $(slick.$slides).removeClass('is-animating');
  });
  
  $('.js-slick').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    $(slick.$slides.get(currentSlide)).addClass('is-animating');
  });
});

// DISPLAYING DATA IN SELECT

var dptosLocs = {
	"Artigas":["Artigas"," Bella Unión"],
	"Canelones":["Canelones"," Santa Lucía"],
	"Montevideo":["Montevideo"],
	"Salto":["Salto"," Daymán"," Arapey"]
};

var sel = document.getElementById('dpto');
var fragment = document.createDocumentFragment();

Object.keys(dptosLocs).forEach(function(dptosLoc, index) {
    var opt = document.createElement('option');
    opt.innerHTML = dptosLoc;
    opt.value = dptosLoc;
    fragment.appendChild(opt);
});

sel.appendChild(fragment);

document.getElementById("dpto").onchange = function() {defineDpto()};

function defineDpto() {
  var dpto = document.getElementById("dpto").value;
  var sel = document.getElementById('location');
  var fragment = document.createDocumentFragment();

  if (dpto == "Artigas" ) {
    document.getElementById('location').options.length = 0;

    Object.values(dptosLocs["Artigas"]).forEach(function(dptosLoc, index) {
    var opt = document.createElement('option');
    opt.innerHTML = dptosLoc;
    opt.value = dptosLoc;
    fragment.appendChild(opt)

    sel.appendChild(fragment);
}); 

  } else if (dpto == "Canelones") {
      document.getElementById('location').options.length = 0;
    
      Object.values(dptosLocs["Canelones"]).forEach(function(dptosLoc, index) {
      var opt = document.createElement('option');
      opt.innerHTML = dptosLoc;
      opt.value = dptosLoc;
      fragment.appendChild(opt)

      sel.appendChild(fragment);
  });

  } else if (dpto == "Montevideo") {
      document.getElementById('location').options.length = 0;
    
      Object.values(dptosLocs["Montevideo"]).forEach(function(dptosLoc, index) {
      var opt = document.createElement('option');
      opt.innerHTML = dptosLoc;
      opt.value = dptosLoc;
      fragment.appendChild(opt)

      sel.appendChild(fragment);
  });
  } else if (dpto == "Salto") {
      document.getElementById('location').options.length = 0;
    
      Object.values(dptosLocs["Salto"]).forEach(function(dptosLoc, index) {
      var opt = document.createElement('option');
      opt.innerHTML = dptosLoc;
      opt.value = dptosLoc;
      fragment.appendChild(opt)

      sel.appendChild(fragment);
  });
  }
}

