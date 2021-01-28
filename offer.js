document.getElementById("loading").addEventListener("load", redirect());

webhook_url = 'https://kvkjg46so8.execute-api.eu-west-3.amazonaws.com/GO';

$(document).ready(function() {
  $(".buttonreevaluation").click(function() {
    disableScrolling();
    $("#reevaluation").show();
  });
  $(".buttondecliner").click(function() {
    disableScrolling();
    $("#decliner").show();
  });
  $("#formsubmit").click(function() {
    if ($("#Message").val()) {
    	var radioValue = 'N/A';
    	var new_info = document.getElementById("Message").value
      $("#sliderright").click();
      Setreevaluationanddeclined("reevaluation", new_info, radioValue);
      $(".buttonreevaluation").hide();
    };
  });
  $("#formsubmit2").click(function() {
    if ($("#Message-3").val()) {
    	var new_info = document.getElementById("Message-3").value
      var radioValue = $("input[name='owner']:checked").val();
      if (radioValue === undefined){radioValue = 'Non précisé'}
      $("#sliderright-2").click();
      Setreevaluationanddeclined("declined", new_info, radioValue);
      $(".buttonreevaluation").hide();
      $(".buttondecliner").hide();
      $("#messageofferdeclined").show();
    };
  });
  $(".crossexit").click(function() {
    enableScrolling();
    $("#reevaluation").hide();
  });
  $(".crossexit2").click(function() {
    enableScrolling();
    $("#decliner").hide();
  });
});

Checkreevaluationanddeclined();
async function Checkreevaluationanddeclined(){
  var self = this
  var column_name = 'ID';
  var recordID = document.getElementById('Record_ID').innerHTML;
  this.items = []
  var airtable_url = 'https://api.airtable.com/v0/' + 'appNvBdQ4vqLJGmuO' + '/' + 'Estimation' + '?filterByFormula=' + column_name + '=' + '"' + recordID + '"';
  const response = await axios.get(webhook_url, { params: {'url': airtable_url}})
  var checkifofferrefused = JSON.stringify(response.data.records[0].fields.Decline)
  var checkifreevaluationasked = JSON.stringify(response.data.records[0].fields.Reevaluation)
  if (checkifofferrefused == '"Yes"') {
  	$(".buttonreevaluation").hide();
    $(".buttondecliner").hide();
    $("#messageofferdeclined").show();
  } else if (checkifreevaluationasked == '"Yes"') {
  	$(".buttonreevaluation").hide();
  }
};

function Setreevaluationanddeclined(type, new_info, radioValue) {

  var ID = window.location.href.substr(window.location.href.length - 17)
  
  let axiosConfig = {
    headers: {
      'Authorization': 'Bearer keyaq6UJ8xDxMHQjG',
      'Content-Type': 'application/json'
    }
  };
  
  if (type == "reevaluation") {
  	var data = {'fields':{'Reevaluation':'Yes', 'Nouvelles_informations': new_info}}
  } else {
  	var data = {'fields':{'Decline':'Yes', 'Nouvelles_informations': new_info, 'Raison_du_déclin': radioValue}}
  }

  var airtable_url = "https://api.airtable.com/v0/appNvBdQ4vqLJGmuO/Estimation/" + ID
  axios.patch(webhook_url, {'url': airtable_url,'json_data': data})
}

function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function() {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function() {};
}

function Getfilestack() {
  const apikey = 'AeaLWsomBQ1CrSctlWPD2z';
  const client = filestack.init(apikey);
  const options = {
    maxFiles: 20,
    fromSources: ["local_file_system", "googledrive", "onedrive", "picasa"],
    uploadInBackground: false,
    onUploadDone: (res) => Swappage(),
  };
  client.picker(options).open();
};

function Swappage() {
  $(document).ready(function() {
    $("#open-1").hide();
    $("#photostext-2").hide();
    $("#open-2").show();
    $("#photostext").text("Nous avons bien reçu vos photos");
  });
};

document.getElementById("container").onclick = function() {
  Getfilestack()
};

var app_key = 'Unknown'
var AddressKey = document.getElementById('AddressKey').innerHTML
var IDKey = document.getElementById('Record_ID').innerHTML
var Type = document.getElementById('Type').innerHTML
var url_p1 = 'https://api.airtable.com/v0/appSMeiYtMiilbvhW/Referrals'
var url_p2 = '?filterByFormula=AddressKey="'
var url_p3 = 'https://api.airtable.com/v0/appSMeiYtMiilbvhW/CustomerBase 2'
var url_p4 = 'https://api.airtable.com/v0/appNvBdQ4vqLJGmuO/VentesComparables'
var url_p5 = '?filterByFormula=Ref_ID="'
var url_p6 = 'https://api.airtable.com/v0/appNvBdQ4vqLJGmuO/Estimation'
var url_p7 = '?filterByFormula=Adresse="'

const asynchronousFunction3 = async (app_key, AddressKey, url_p6, url_p7) => {
  const response = await getToken(app_key, AddressKey, url_p6, url_p7);
  for (const key of Object.keys(response['data']['records'])) {
    if (JSON.stringify(response['data']['records'][key]['fields']['Stage']) === '"Offre finale"') {
      var RecordID_redirect = response['data']['records'][key]['fields']['Record ID']
      var url_redirect = "https://www.wevesta.com/offre-finale-vesta/" + RecordID_redirect
      window.location.replace(url_redirect);
    }
  }
}

// asynchronousFunction3(app_key, AddressKey, url_p6, url_p7);

$(document).ready(function() {
  const date = new Date($('#date').html());
  const today = new Date();
  const expiring_date = new Date(moment(date).add(8, 'days'));
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  $('.date').html(expiring_date.toLocaleString('fr-FR', options));
  if (today > expiring_date) {
    $("#home").hide();
    $("#section-redirect").show();
  } else {
    $("#navbar_menu_icon").show();
  }
});

$(document).ready(function() {
  $(".id-new-offer").on('click', function() {
    document.getElementById('name-2').value = document.getElementById('Nom completNew').innerHTML
    document.getElementById('address-2').value = document.getElementById('AddressKeyNew').innerHTML
    document.getElementById('recordid-2').value = document.getElementById('Record_IDNew').innerHTML
    document.getElementById('email-2').value = document.getElementById('E-mailNew').innerHTML
    document.getElementById('phone-2').value = document.getElementById('TéléphoneNew').innerHTML
    document.getElementById('ask-type-2').value = 'Asked a new offer'
    document.getElementById("submit-2").click();
  });
});

var FloorsHouse = document.getElementById("FloorsHouse").innerHTML

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
    $("#vesta-guarantee").hide();
    $("#vesta-offer").hide();
    $("#comps-div").hide();
    $("#home").show();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    $("#comps-div").hide();
  });
  $(".id-2").click(function() {
    $("#home").hide();
    $("#vesta-offer").hide();
    $("#vesta-guarantee").show();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  $(".id-3").click(function() {
    $("#home").hide();
    $("#vesta-guarantee").hide();
    $("#vesta-offer").show();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  $(".id-4").click(function() {
    $("#home").hide();
    $("#vesta-guarantee").hide();
    $("#vesta-offer").show();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  $("#referral-1").click(function() {
    document.getElementById("referral-2").scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center"
    });
  });
  $(".id-calendy").on('click', function() {
    Calendly.showPopupWidget('https://calendly.com/wevesta/introduction')
  });
  if (parseInt(getBrowserSize().width) > 991 && parseInt(getBrowserSize().width) < 1150) {
    $("#map").hide();
  }
  if (FloorsHouse > 0) {
    $("#criteria-3-a").html(FloorsHouse);
  }
});

document.getElementById('type-comps').innerHTML = document.getElementById('Type').innerHTML + "s"
var valuation = Number(document.getElementById('value').innerHTML.replace(/€| /g, ""));
var max = Math.round(valuation * 1.05 / 1000);
var min = Math.round(valuation * 0.95 / 1000);
var rangeSlider = document.getElementById('slider');
var rangeSlider2 = document.getElementById('slider-2');
var rangeSlider3 = document.getElementById('slider-3');

// implement html modifications
document.getElementById('value').innerHTML = min.toString() + "-" + max.toString() + " k€";

noUiSlider.create(rangeSlider, {
  start: [valuation / 1000],
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

noUiSlider.create(rangeSlider2, {
  start: [valuation / 1000],
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
  var value = Math.round(values[handle])
  document.getElementById('slider-range-value').innerHTML = value.toString() + " 000 €";
  if (value <= 130) {
    var costguarantee = 12;
    var costagent = 10;
    var costmargeofnegotiation = 5;
    var costoffre = costagent + costmargeofnegotiation;
    var txt = "Payez moins que les frais traditionnels et gardez plus d'argent dans votre poche."
    document.getElementById('slider-range-value-2').innerHTML = (value - costguarantee).toString() + " 000 €";
    document.getElementById('cost-of-service-2').innerHTML = costguarantee.toString().replace('.', ',') + " 000 €";
    document.getElementById('slider-range-value-3').innerHTML = (value - costoffre).toString() + " 000 €";
    document.getElementById('cost-of-service-3').innerHTML = costagent.toString().replace('.', ',') + " 000 €";
    document.getElementById('margin-of-negotiation-3').innerHTML = costmargeofnegotiation.toString().replace('.', ',') + " 000 €";
    document.getElementById('margin-of-negotiation-2').innerHTML = "0 €";
    document.getElementById('value-proposition-1-2').innerHTML = txt;
  } else if (value > 130 && value <= 140) {
    var costguarantee = 13;
    var costagent = 10;
    var costmargeofnegotiation = 5;
    var costoffre = costagent + costmargeofnegotiation;
    var txt = "Payez moins que les frais traditionnels et gardez plus d'argent dans votre poche."
    document.getElementById('slider-range-value-2').innerHTML = (value - costguarantee).toString() + " 000 €";
    document.getElementById('cost-of-service-2').innerHTML = costguarantee.toString().replace('.', ',') + " 000 €";
    document.getElementById('slider-range-value-3').innerHTML = (value - costoffre).toString() + " 000 €";
    document.getElementById('cost-of-service-3').innerHTML = costagent.toString().replace('.', ',') + " 000 €";
    document.getElementById('margin-of-negotiation-3').innerHTML = costmargeofnegotiation.toString().replace('.', ',') + " 000 €";
    document.getElementById('margin-of-negotiation-2').innerHTML = "0 €";
    document.getElementById('value-proposition-1-2').innerHTML = txt;
  } else if (value > 140 && value <= 175) {
    var costguarantee = 14;
    var costagent = 10;
    var costmargeofnegotiation = 5;
    var costoffre = costagent + costmargeofnegotiation;
    var txt = "Payez moins que les frais traditionnels et gardez plus d'argent dans votre poche."
    document.getElementById('slider-range-value-2').innerHTML = (value - costguarantee).toString() + " 000 €";
    document.getElementById('cost-of-service-2').innerHTML = costguarantee.toString().replace('.', ',') + " 000 €";
    document.getElementById('slider-range-value-3').innerHTML = (value - costoffre).toString() + " 000 €";
    document.getElementById('cost-of-service-3').innerHTML = costagent.toString().replace('.', ',') + " 000 €";
    document.getElementById('margin-of-negotiation-3').innerHTML = costmargeofnegotiation.toString().replace('.', ',') + " 000 €";
    document.getElementById('margin-of-negotiation-2').innerHTML = "0 €";
    document.getElementById('value-proposition-1-2').innerHTML = txt;
  } else if (value > 175 && value <= 400) {
    var costguarantee = 0.08;
    var costagent = 0.06;
    var costmargeofnegotiation = 0.03;
    var costoffre = costagent + costmargeofnegotiation;
    document.getElementById('slider-range-value-2').innerHTML = Math.round((value - (value * costguarantee))).toString() + " 000 €";
    document.getElementById('cost-of-service-2').innerHTML = (costguarantee * 100).toString().replace('.', ',') + "%";
    document.getElementById('slider-range-value-3').innerHTML = Math.round((value - (value * costoffre))).toString() + " 000 €";
    document.getElementById('cost-of-service-3').innerHTML = (costagent * 100).toString().replace('.', ',') + "%";
    document.getElementById('margin-of-negotiation-3').innerHTML = (Math.round(costmargeofnegotiation * 1000) / 10).toString().replace('.', ',') + "%";
  } else if (value > 400 && value <= 600) {
    var costguarantee = 0.075;
    var costagent = 0.05;
    var costmargeofnegotiation = 0.035;
    var costoffre = costagent + costmargeofnegotiation;
    document.getElementById('slider-range-value-2').innerHTML = Math.round((value - (value * costguarantee))).toString() + " 000 €";
    document.getElementById('cost-of-service-2').innerHTML = (costguarantee * 100).toString().replace('.', ',') + "%";
    document.getElementById('slider-range-value-3').innerHTML = Math.round((value - (value * costoffre))).toString() + " 000 €";
    document.getElementById('cost-of-service-3').innerHTML = (costagent * 100).toString().replace('.', ',') + "%";
    document.getElementById('margin-of-negotiation-3').innerHTML = (Math.round(costmargeofnegotiation * 1000) / 10).toString().replace('.', ',') + "%";
  } else {
    var costguarantee = 0.07;
    var costagent = 0.05;
    var costmargeofnegotiation = 0.035;
    var costoffre = costagent + costmargeofnegotiation;
    document.getElementById('slider-range-value-2').innerHTML = Math.round((value - (value * costguarantee))).toString() + " 000 €";
    document.getElementById('cost-of-service-2').innerHTML = parseFloat((costguarantee * 100).toString()).toFixed(0).toString().replace('.', ',') + "%";
    document.getElementById('slider-range-value-3').innerHTML = Math.round((value - (value * costoffre))).toString() + " 000 €";
    document.getElementById('cost-of-service-3').innerHTML = parseFloat((costagent * 100).toString()).toFixed(1).replace('.', ',') + "%";
    document.getElementById('margin-of-negotiation-3').innerHTML = parseFloat((costmargeofnegotiation * 100).toString()).toFixed(1).replace('.', ',') + "%";
  }
});

rangeSlider2.noUiSlider.on('update', function(values, handle) {
  var value = Math.round(values[handle]);
  document.getElementById('slider-range-value-4').innerHTML = value.toString() + " 000 €";
  if (value <= 130) {
    var costguarantee = 12;
    document.getElementById('slider-range-value-5').innerHTML = (value - costguarantee).toString() + " 000 €";
    document.getElementById('cost-of-service-5').innerHTML = costguarantee.toString().replace('.', ',') + " 000 €";
  } else if (value > 130 && value <= 140) {
    var costguarantee = 13;
    document.getElementById('slider-range-value-5').innerHTML = (value - costguarantee).toString() + " 000 €";
    document.getElementById('cost-of-service-5').innerHTML = costguarantee.toString().replace('.', ',') + " 000 €";
  } else if (value > 140 && value <= 175) {
    var costguarantee = 14;
    document.getElementById('slider-range-value-5').innerHTML = (value - costguarantee).toString() + " 000 €";
    document.getElementById('cost-of-service-5').innerHTML = costguarantee.toString().replace('.', ',') + " 000 €";
  } else if (value > 175 && value <= 400) {
    var costguarantee = 0.08;
    document.getElementById('slider-range-value-5').innerHTML = Math.round((value - (value * costguarantee))).toString() + " 000 €";
    document.getElementById('cost-of-service-5').innerHTML = parseFloat((costguarantee * 100).toString()).toFixed(0).toString().replace('.', ',') + "%";
  } else if (value > 400 && value <= 600) {
    var costguarantee = 0.075;
    document.getElementById('slider-range-value-5').innerHTML = Math.round((value - (value * costguarantee))).toString() + " 000 €";
    document.getElementById('cost-of-service-5').innerHTML = parseFloat((costguarantee * 100).toString()).toFixed(1).toString().replace('.', ',') + "%";
  } else {
    var costguarantee = 0.07;
    document.getElementById('slider-range-value-5').innerHTML = Math.round((value - (value * costguarantee))).toString() + " 000 €";
    document.getElementById('cost-of-service-5').innerHTML = parseFloat((costguarantee * 100).toString()).toFixed(0).toString().replace('.', ',') + "%";
  }
});

async function getToken(app_key, Key, url_p1, url_p2) {
  var airtable_url = url_p1 + url_p2 + Key + '"';
  return axios.get(webhook_url, {
    params: {
      'url': airtable_url
    }
  }).then(res => res);
}

const asynchronousFunction = async (app_key, AddressKey, url_p2) => {
  const response = await getToken(app_key, AddressKey, url_p1, url_p2);
  if (Object.keys(response['data']['records']).length == 0) {
    hide_div_referral()
  }
  const response_url = await getToken(app_key, AddressKey, url_p3, url_p2);
  var ref_count = response['data']['records']['0']['fields']['Total_referred_count']
  var ranking = response['data']['records']['0']['fields']['Ranking']
  url = response_url['data']['records']['0']['fields']['referral_URL']
  document.getElementById('url').innerHTML = url
  document.getElementById('url').setAttribute('value', url);
  var computed_ranking = (ranking - (ref_count * 10)) - 1;
  if (computed_ranking <= 1) {
    computed_ranking = 1
    document.getElementById('Ranking').innerHTML = computed_ranking.toString() + ' ' + 'propriétaire est devant vous'
  } else {
    document.getElementById('Ranking').innerHTML = computed_ranking.toString() + ' ' + 'propriétaires sont devant vous'
  };
}

const asynchronousFunction2 = async (app_key, IDKey, url_p5, Type) => {
  const response_comps = await getToken(app_key, IDKey, url_p4, url_p5);
  var size = Object.keys(response_comps['data']['records']).length
  var new_var = 0

  for (let step = 0; step < size; step++) {
    if (!response_comps['data']['records'][new_var]['fields']['Checkbox comps']) {
      response_comps['data']['records'].splice(new_var, 1);
    } else {
      new_var += 1;
    }
  }

  if (Object.keys(response_comps['data']['records']).length <= 4) {
    hide();
    var size = 2;
    if (Object.keys(response_comps['data']['records']).length <= 1) {
      hide_div();
    }
  } else {
    var size = 3;
  }


  for (let x = 0; x <= size; x++) {
    document.getElementById('image-' + x).src = response_comps['data']['records'][x]['fields']['Pictures'][0]['url'];
    var title = Type + " à " + response_comps['data']['records'][x]['fields']['Ville'];
    document.getElementById('title-' + x).innerHTML = title
    if (title.length != 0) {
      resize()
    }
    var prix_de_vente = response_comps['data']['records'][x]['fields']['Prix_de_vente'];
    document.getElementById('pricing-' + x).innerHTML = Math.round(prix_de_vente / 1000).toString() + " 000 €";
    var sqm = response_comps['data']['records'][x]['fields']['Surface_habitable']
    document.getElementById('sqm-' + x).innerHTML = sqm.substring(0, sqm.length - 2) + " m²";
    document.getElementById('roomcnt-' + x).innerHTML = response_comps['data']['records'][x]['fields']['Nb_pieces'].replace("p", "");
    document.getElementById('bedroomcnt-' + x).innerHTML = response_comps['data']['records'][x]['fields']['Nb_chambres'].replace("ch", "");
  }
}

asynchronousFunction(app_key, AddressKey, url_p2);
asynchronousFunction2(app_key, IDKey, url_p5, Type);

function hide_div() {
  $(document).ready(function() {
    $("#comps-div").hide();
  });
}

function hide_div_referral() {
  $(document).ready(function() {
    $("#referral-2").hide();
  });
}

function hide() {
  $(document).ready(function() {
    $("#arrow-slider").hide();
    $("#slide-2").hide();
  });
}

function resize() {
  $(document).ready(function() {
    var height = Math.max($("#div-" + '0').height(), $("#div-" + '1').height(), $("#div-" + '2').height(), $("#div-" + '3').height());
    for (let step2 = 0; step2 < 4; step2++) {
      $("#div-" + step2).height(height).css('margin-bottom', 22 + 'px');
    }
    var height_card = Math.max($("#card-label-0").height(), $("#card-label-1").height());
    $("#card-label-0").height(height_card)
    $("#card-label-1").height(height_card)
  });
}

function getBrowserSize() {
  var w, h;

  if (typeof window.innerWidth != 'undefined') {
    w = window.innerWidth; //other browsers
    h = window.innerHeight;
  } else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
    w = document.documentElement.clientWidth; //IE
    h = document.documentElement.clientHeight;
  } else {
    w = document.body.clientWidth; //IE
    h = document.body.clientHeight;
  }
  return {
    'width': w,
    'height': h
  };
}

$(document).ready(function() {
  var substr = "criteria-"
  var list = ["Pièces", "Salles de bain", "Étages", "Chambres", "Parking"]
  for (let i = 0; i <= 4; i++) {
    if (Number($("#" + substr + (i + 1).toString() + "-a").html()) > 1) {
      $("#" + substr + (i + 1).toString() + "-b").html($(list).get(i));
    }
    if ($("#" + substr + (i + 1).toString() + "-a").html() === "") {
      $("#map").hide();
    }
  }
});
