document.getElementById("loading").addEventListener("load", redirect());

if (navigator.userAgent.match(/Mobile/)) {
  document.getElementById('traditionnelle').value = 'Tradition';
}

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

function ChangeButton() {
  $(document).ready(function() {
    $('.id-signature').css('background-color', '#2CC8A7');
    $('#id_postload').html('Nous avons biens reçu votre demande');
    $('#id_postload_2').html('Demande envoyée');
    $('.id-signature').css('box-shadow', 'none');
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
    ChangeButton();
  });
});

var valuation = Number(document.getElementById('value-new').innerHTML.replace(/€| /g, ""));
var est_final_sale_price = Math.round(valuation/1000);
var max = Math.round(est_final_sale_price * 1.2);
var min = Math.round(est_final_sale_price * 0.80);
var rangeSlider4 = document.getElementById('slider-10');
// implement html modifications
document.getElementById('value-new').innerHTML = est_final_sale_price.toString() + " 000 €";
var myCookie = getCookie('already_signed');

if (myCookie == null) {
  document.cookie = 'already_signed' + "=" + 'waiting to sign' + 30 + "; path=/";
} else {
	ChangeButton();
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

noUiSlider.create(rangeSlider4, {
  start: [est_final_sale_price],
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

rangeSlider4.noUiSlider.on('update', function(values, handle) {
  var fixed_value = valuation / 1000;
  var value = Math.round(values[handle]);
  var guaranteed_sale_price = 0;
  document.getElementById('slider-range-value-10').innerHTML = value.toString() + " 000 €";
  if (est_final_sale_price <= 175) {
    var costguarantee = 8;
    var guaranteed_sale_price = fixed_value * 0.95;
    var costofservice = costguarantee;
    alert(costofservice);
    var guaranteed_net_proceed = Math.round(guaranteed_sale_price - costguarantee);
    var floating_net_proceed = value - costguarantee;
    var txt = "Payez moins que les frais traditionnels et gardez plus d'argent dans votre poche."
    document.getElementById('slider-range-value-11').innerHTML = (value - costguarantee).toString() + " 000 €";
    document.getElementById('cost-of-service-10').innerHTML = costguarantee.toString() + " 000 €";
    document.getElementById('value-proposition-new').innerHTML = txt;
    SetTable(value, costguarantee, costofservice, guaranteed_net_proceed, floating_net_proceed);
  } else if (est_final_sale_price > 175 && est_final_sale_price <= 400) {
    var costguarantee = 0.045;
    var guaranteed_sale_price = fixed_value * 0.95;
    var costofservice = fixed_value * costguarantee;
    var guaranteed_net_proceed = Math.round(guaranteed_sale_price - costofservice);
    var floating_net_proceed = value - costofservice;
    document.getElementById('pourcentage-10-b').innerHTML =  (costguarantee*100).toString().replace('.',',') + "%";
    document.getElementById('pourcentage-10-c').innerHTML =  (costguarantee*100+1).toString().replace('.',',') + "%";
    document.getElementById('slider-range-value-11').innerHTML = Math.round((value - (value * costguarantee))).toString() + " 000 €";
    document.getElementById('cost-of-service-10').innerHTML = parseFloat((costguarantee*100).toString()).toFixed(1).toString().replace('.',',') + "%";
    SetTable(value, costguarantee, costofservice, guaranteed_net_proceed, floating_net_proceed);
  } else if (est_final_sale_price > 400 && est_final_sale_price <= 600) {
    var costguarantee = 0.04;
    var guaranteed_sale_price = fixed_value * 0.95;
    var costofservice = fixed_value * costguarantee;
    var guaranteed_net_proceed = Math.round(guaranteed_sale_price - costofservice);
    var floating_net_proceed = value - costofservice;
    document.getElementById('pourcentage-10-b').innerHTML =  (costguarantee*100).toString().replace('.',',') + "%";
    document.getElementById('pourcentage-10-c').innerHTML =  (costguarantee*100+1).toString().replace('.',',') + "%";
    document.getElementById('slider-range-value-11').innerHTML = Math.round((value - (value * costguarantee))).toString() + " 000 €";
    document.getElementById('cost-of-service-10').innerHTML = parseFloat((costguarantee*100).toString()).toFixed(1).toString().replace('.',',') + "%";
    SetTable(value, costguarantee, costofservice, guaranteed_net_proceed, floating_net_proceed);
  } else {
    var costguarantee = 0.035;
    var guaranteed_sale_price = fixed_value * 0.95 / 1000;
    var costofservice = fixed_value * costguarantee;
    var guaranteed_net_proceed = Math.round(guaranteed_sale_price - costofservice);
    var floating_net_proceed = value - costofservice;
    document.getElementById('pourcentage-10-b').innerHTML =  (costguarantee*100).toString().replace('.',',') + "%";
    document.getElementById('pourcentage-10-c').innerHTML =  (costguarantee*100+1).toString().replace('.',',') + "%";
    document.getElementById('slider-range-value-11').innerHTML = Math.round((value - (value * costguarantee))).toString() + " 000 €";
    document.getElementById('cost-of-service-10').innerHTML = parseFloat((costguarantee*100).toString()).toFixed(1).toString().replace('.',',') + "%";
    SetTable(value, costguarantee, costofservice, guaranteed_net_proceed, floating_net_proceed);
  }
  if (floating_net_proceed <= guaranteed_net_proceed) {
    document.getElementById('slider-range-value-11').innerHTML = guaranteed_net_proceed.toString() + " 000 €";
    document.getElementById('slider-range-value-11').style.color = '#2CC8A7';
    document.getElementById('slider-range-value-10').style.color = '#2CC8A7';
    document.querySelector('.noUi-connect').style.backgroundColor = '#2CC8A7';
    document.querySelector('.noUi-handle').style.backgroundColor = '#2CC8A7';
    var net_vendeur_txt = document.getElementById('net-vendeur-txt')
    net_vendeur_txt.innerHTML = "Net vendeur garantie"
    ShowShield();
    if (value <= 175) {
      var costguarantee =  Math.round((value - guaranteed_net_proceed));
      document.getElementById('cost-of-service-10').innerHTML = costguarantee.toString() + " 000 €";
      if (costguarantee <= 0) {document.getElementById('cost-of-service-10').innerHTML = "Offert"}
    } else {
      var costguarantee =  Math.floor((value - guaranteed_net_proceed) / value * 1000) / 1000;
      document.getElementById('cost-of-service-10').innerHTML = parseFloat((costguarantee * 100).toString()).toFixed(1).toString() + "%";
      if (costguarantee <= 0) {document.getElementById('cost-of-service-10').innerHTML = "Offert"}
    }
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

function SetTable(value, costguarantee, costofservice, guaranteed_net_proceed, floating_net_proceed) {
  $(document).ready(function() {
   	// Replace HTML content with final sale price
    final_sale_price = value
    $('.final_sale_price').html((final_sale_price).toString() + " 000 €");
    // Replace HTML content with seller_concession
    seller_concession = Math.round(final_sale_price * 0.035)
    $('.seller_concession').html((seller_concession).toString() + " 000 €");
    // Replace HTML content with price_on_market
    price_on_market = final_sale_price + seller_concession
    $('.price_on_market').html((price_on_market).toString() + " 000 €");
    // Replace HTML content with fees_vesta
    fees_vesta = Math.round(costofservice);
    $('#fees_vesta').html((fees_vesta).toString() + " 000 €");
    // Replace HTML content with fees_traditional
    if (costguarantee < 1) {
    	fees_traditional = Math.round((costguarantee + 0.01) * price_on_market);
    } else {
    	fees_traditional = 12;
    }
    $('#fees_traditional').html((fees_traditional).toString() + " 000 €");
    // Replace HTML content with min_net_proceed_vesta
    min_net_proceed_vesta = guaranteed_net_proceed
    $('#min_net_proceed_vesta').html((min_net_proceed_vesta).toString() + " 000 €");
    // Replace HTML content with net_proceed_vesta
    net_proceed_vesta = Math.round(final_sale_price - fees_vesta);
    $('#net_proceed_vesta').html((net_proceed_vesta).toString() + " 000 €");
    // Replace HTML content with net_proceed
    net_proceed = value - fees_traditional;
    $('#net_proceed').html((net_proceed).toString() + " 000 €");
  });
}
