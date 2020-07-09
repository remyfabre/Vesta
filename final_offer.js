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

function hideShield() {
  $(document).ready(function() {
    $('#shield').hide(250);
  });
}

function ShowShield() {
  $(document).ready(function() {
    $('#shield').show(250);
  });
}

$(document).ready(function() {
  $(".id-1").click(function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  $(".id-signature").on('click', function() {
    document.getElementById('name').value = document.getElementById('Nom completNew').innerHTML
    document.getElementById('address').value = document.getElementById('AddressKeyNew').innerHTML
    document.getElementById('recordid').value = document.getElementById('Record_IDNew').innerHTML
    document.getElementById('email').value = document.getElementById('E-mailNew').innerHTML
    document.getElementById('phone').value = document.getElementById('TéléphoneNew').innerHTML
    document.getElementById("submit").click();
    document.querySelector('.id-signature').style.backgroundColor = '#2CC8A7';
    document.querySelector('.id_signature-postload').innerHTML = "Nous avons biens reçu votre demande"
  });
});
var valuation = Number(document.getElementById('value-new').innerHTML.replace(/€| /g, ""));
var listing_price = Math.round(valuation * 1.03 / 1000);
var max = Math.round(listing_price * 1.2);
var min = Math.round(listing_price * 0.80);
var rangeSlider = document.getElementById('slider-10');

// implement html modifications
document.getElementById('value-new').innerHTML = listing_price.toString() + " 000 €";

var myCookie = getCookie('already_signed');
if (myCookie == null) {
  document.cookie = 'already_signed' + "=" + 'waiting to sign' + 30 + "; path=/";
} else {
  document.querySelector('.id-signature').style.backgroundColor = '#2CC8A7';
  document.querySelector('.id_signature-postload').innerHTML = "Nous avons biens reçu votre demande"
}

function getCookie(name) {
  var cookie = document.cookie;
  var prefix = name + "=";
  var begin = cookie.indexOf("; " + prefix);
  if (begin == -1) {
    begin = cookie.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = cookie.length;
    }
  }
  return unescape(cookie.substring(begin + prefix.length, end));
} 

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
  document.getElementById('slider-range-value-10').innerHTML = value.toString() + " 000 €";
  if (value <= 175) {
    var costguarantee = 8;
    var guaranteed_sale_price = Math.round(valuation*0.95 / 1000) - costguarantee;
    var txt = "Payez moins que les frais traditionnels et gardez plus d'argent dans votre poche."
    document.getElementById('slider-range-value-11').innerHTML = (value - costguarantee).toString() + " 000 €";
    document.getElementById('cost-of-service-10').innerHTML = costguarantee.toString() + " 000 €";
    document.getElementById('value-proposition-new').innerHTML = txt;
  } else if (value > 160 && value <= 400) {
    var costguarantee = 0.045;
    var guaranteed_sale_price = Math.round(valuation*0.95 / 1000) - costguarantee;
    document.getElementById('pourcentage-10-b').innerHTML =  (costguarantee*100+1).toString() + "%";
    document.getElementById('pourcentage-10-c').innerHTML =  (costguarantee*100+1).toString() + "%";
    document.getElementById('slider-range-value-11').innerHTML = Math.round((value - (value * costguarantee))).toString() + " 000 €";
    document.getElementById('cost-of-service-10').innerHTML = parseFloat((costguarantee*100).toString()).toFixed(1).toString() + "%";
  } else if (value > 400 && value <= 600) {
    var costguarantee = 0.04;
    var guaranteed_sale_price = Math.round(valuation*0.95 / 1000) - costguarantee;
    document.getElementById('pourcentage-10-b').innerHTML =  (costguarantee*100+1).toString() + "%";
    document.getElementById('pourcentage-10-c').innerHTML =  (costguarantee*100+1).toString() + "%";
    document.getElementById('slider-range-value-11').innerHTML = Math.round((value - (value * costguarantee))).toString() + " 000 €";
    document.getElementById('cost-of-service-10').innerHTML = parseFloat((costguarantee*100).toString()).toFixed(1).toString() + "%";
  } else {
    var costguarantee = 0.035;
    var guaranteed_sale_price = Math.round(valuation*0.95 / 1000) - costguarantee;
    document.getElementById('pourcentage-10-b').innerHTML =  (costguarantee*100+1).toString() + "%";
    document.getElementById('pourcentage-10-c').innerHTML =  (costguarantee*100+1).toString() + "%";
    document.getElementById('slider-range-value-11').innerHTML = Math.round((value - (value * costguarantee))).toString() + " 000 €";
    document.getElementById('cost-of-service-10').innerHTML = parseFloat((costguarantee*100).toString()).toFixed(1).toString() + "%";
  }
  if (value - costguarantee <= guaranteed_sale_price) {
    document.getElementById('slider-range-value-11').innerHTML = guaranteed_sale_price.toString() + " 000 €";
    document.getElementById('slider-range-value-11').style.color = '#2CC8A7';
    document.getElementById('slider-range-value-10').style.color = '#2CC8A7';
    document.querySelector('.noUi-connect').style.backgroundColor = '#2CC8A7';
    document.querySelector('.noUi-handle').style.backgroundColor = '#2CC8A7';
    ShowShield();
    var net_vendeur_txt = document.getElementById('net-vendeur-txt')
    net_vendeur_txt.innerHTML = "Net vendeur garantie"
  }
  else {
    document.getElementById('slider-range-value-11').style.color = '#1277e1';
    document.getElementById('slider-range-value-10').style.color = '#1277e1';
    document.querySelector('.noUi-connect').style.backgroundColor = '#1277e1';
    document.querySelector('.noUi-handle').style.backgroundColor = '#1277e1';
    var net_vendeur_txt = document.getElementById('net-vendeur-txt')
    hideShield();
    net_vendeur_txt.style.color = '#000000';
    net_vendeur_txt.innerHTML = "Net vendeur estimé"
  }
});
