document.getElementById("loading").addEventListener("load", redirect());

function redirect() {
  window.setTimeout(function() {
    hideLoader();
  }, 3000);
}

function hideLoader() {
  $(document).ready(function() {
    $('#loading').fadeOut();
    $('#loader').fadeOut();
  });
}

$(document).ready(function() {
  $(".id-1").click(function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

var valuation = Number(document.getElementById('value').innerHTML.replace(/€| /g, ""));
var listing_price = Math.round(valuation * 1.03 / 1000);
var max = Math.round(listing_price * 1.2);
var min = Math.round(listing_price * 0.80);
var rangeSlider = document.getElementById('slider');

// implement html modifications
document.getElementById('value').innerHTML = listing_price.toString() + " 000 €";

noUiSlider.create(rangeSlider, {
  start: [listing_price],
  step: 1000 / 1000,
  connect: 'lower',
  range: {
    'min': min,
    'max': max
  },
  pips: {
    mode: 'range',
    density: 500,
    stepped: true,
    format: wNumb({
      decimals: 0,
      postfix: ' k€',
      thousand: ' '
    })
  }
});

rangeSlider.noUiSlider.on('update', function(values, handle) {
  var value = Math.round(values[handle]);
  var guaranteed_sale_price = 0;
  document.getElementById('slider-range-value').innerHTML = value.toString() + " 000 €";
  if (value <= 175) {
    var costguarantee = 8;
    var guaranteed_sale_price = Math.round(valuation*0.95 / 1000) - costguarantee;
    var txt = "Payez moins que les frais traditionnels et gardez plus d'argent dans votre poche."
    document.getElementById('slider-range-value-2').innerHTML = (value - costguarantee).toString() + " 000 €";
    document.getElementById('cost-of-service').innerHTML = costguarantee.toString() + " 000 €";
    document.getElementById('value-proposition-1-2').innerHTML = txt;
  } else if (value > 160 && value <= 400) {
    var costguarantee = 0.045;
    var guaranteed_sale_price = Math.round(valuation*0.95 / 1000) - costguarantee;
    document.getElementById('pourcentage-2-b').innerHTML =  (costguarantee*100+1).toString() + "%";
    document.getElementById('pourcentage-3-b').innerHTML =  (costguarantee*100+1).toString() + "%";
    document.getElementById('slider-range-value-2').innerHTML = Math.round((value - (value * costguarantee))).toString() + " 000 €";
    document.getElementById('cost-of-service').innerHTML = parseFloat((costguarantee*100).toString()).toFixed(1).toString() + "%";
  } else if (value > 400 && value <= 600) {
    var costguarantee = 0.04;
    var guaranteed_sale_price = Math.round(valuation*0.95 / 1000) - costguarantee;
    document.getElementById('pourcentage-2-b').innerHTML =  (costguarantee*100+1).toString() + "%";
    document.getElementById('pourcentage-3-b').innerHTML =  (costguarantee*100+1).toString() + "%";
    document.getElementById('slider-range-value-2').innerHTML = Math.round((value - (value * costguarantee))).toString() + " 000 €";
    document.getElementById('cost-of-service').innerHTML = parseFloat((costguarantee*100).toString()).toFixed(1).toString() + "%";
  } else {
    var costguarantee = 0.035;
    var guaranteed_sale_price = Math.round(valuation*0.95 / 1000) - costguarantee;
    document.getElementById('pourcentage-2-b').innerHTML =  (costguarantee*100+1).toString() + "%";
    document.getElementById('pourcentage-3-b').innerHTML =  (costguarantee*100+1).toString() + "%";
    document.getElementById('slider-range-value-2').innerHTML = Math.round((value - (value * costguarantee))).toString() + " 000 €";
    document.getElementById('cost-of-service').innerHTML = parseFloat((costguarantee*100).toString()).toFixed(1).toString() + "%";
  }
  if (value - costguarantee <= guaranteed_sale_price) {
    document.getElementById('slider-range-value-2').innerHTML = guaranteed_sale_price.toString() + " 000 €";
    document.getElementById('slider-range-value-2').style.color = '#FF916F';
    document.getElementById('slider-range-value').style.color = '#FF916F';
    var net_vendeur_txt = document.getElementById('net-vendeur-txt')
    net_vendeur_txt.style.color = '#FF916F';
    net_vendeur_txt.innerHTML = "Net vendeur garantie"
  }
  else {
  	document.getElementById('slider-range-value-2').style.color = '#1277e1';
    document.getElementById('slider-range-value').style.color = '#1277e1';
    var net_vendeur_txt = document.getElementById('net-vendeur-txt')
    net_vendeur_txt.style.color = '#000000';
    net_vendeur_txt.innerHTML = "Net vendeur estimé"
  }
});
