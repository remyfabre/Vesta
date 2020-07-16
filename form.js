var HomeAddress = HomeAddress || [];
var componentForm = [
	"street_number",
	"route",
	"postal_code",
	"locality",
	"administrative_area_level_1",
	"country"
];

// A custom function to get cookies
// Split cookie string and get all individual name=value pairs in an array
var cookieArr = document.cookie.split(';');
// Loop through the array elements
for (var i = 0; i < cookieArr.length; i++) {
	var cookiePair = cookieArr[i].split('=');
	var cookieidentifier = cookiePair[0].trim();
	if (cookieidentifier == componentForm[0]) {
		HomeAddress.push(decodeURIComponent(cookiePair[1]));
		break;
	}
}
for (var i = 0; i < cookieArr.length; i++) {
	var cookiePair = cookieArr[i].split('=');
	var cookieidentifier = cookiePair[0].trim();
	if (cookieidentifier == componentForm[1]) {
		HomeAddress.push(decodeURIComponent(cookiePair[1]));
		break;
	}
}
for (var i = 0; i < cookieArr.length; i++) {
	var cookiePair = cookieArr[i].split('=');
	var cookieidentifier = cookiePair[0].trim();
	if (cookieidentifier == componentForm[2]) {
		HomeAddress.push(decodeURIComponent(cookiePair[1]));
		break;
	}
}
for (var i = 0; i < cookieArr.length; i++) {
	var cookiePair = cookieArr[i].split('=');
	var cookieidentifier = cookiePair[0].trim();
	if (cookieidentifier == componentForm[3]) {
		HomeAddress.push(decodeURIComponent(cookiePair[1]));
		break;
	}
}
for (var i = 0; i < cookieArr.length; i++) {
	var cookiePair = cookieArr[i].split('=');
	var cookieidentifier = cookiePair[0].trim();
	if (cookieidentifier == componentForm[4]) {
		HomeAddress.push(decodeURIComponent(cookiePair[1]));
		break;
	}
}
for (var i = 0; i < cookieArr.length; i++) {
	var cookiePair = cookieArr[i].split('=');
	var cookieidentifier = cookiePair[0].trim();
	if (cookieidentifier == componentForm[5]) {
		HomeAddress.push(decodeURIComponent(cookiePair[1]));
		break;
	}
}

document.getElementById("Home Address 1").innerHTML = (HomeAddress[0] + ' ' + HomeAddress[1]);
document.getElementById("Home Address 2").innerHTML = (HomeAddress[2] + ' ' + HomeAddress[3]);
document.getElementById("Home Address 3").innerHTML = (HomeAddress[5]);

// Get each component of the address from the place details,
// and then fill-in the corresponding field on the form.
for (var i = 0; i <= HomeAddress.length; i++) {
	if (document.getElementById(componentForm[i]) !== null) {
		document.getElementById(componentForm[i]).value = HomeAddress[i];
	}	
}

function displayOne() {
	for (var i = 0; i <= 2; i++) {
		var apartmenti = document.getElementById("isapartment" + i);
		var housei = document.getElementById("ishouse" + i);
		if (document.getElementById("apartment").checked) {
			housei.style.display = "none";
			apartmenti.style.display = "initial";
		} else if (document.getElementById("house").checked) {
			housei.style.display = "initial";
			apartmenti.style.display = "none";
		}
	}
}

var Webflow = Webflow || [];
Webflow.push(function() {
	var l = $('#flowbaseSlider .w-slider-arrow-left');
	var r = $('#flowbaseSlider .w-slider-arrow-right');
	$('#flowbaseSlider')
		.on('click', '.slider-left', function() {
			l.trigger('tap');
		})
		.on('click', '.slider-right', function() {
			r.trigger('tap');
		});
});

$('#startbutton').prop('disabled', true);
document.getElementById("startbutton").style.color = "#62636b";
document.getElementById("startbutton").style.backgroundColor = "#f8f6f4";
document.getElementById("startbutton").style.opacity = "0.5";

$(document).ready(function() {
	$("input[name='owner']").click(function() {
		if ($("input[name='owner']:checked").val()) {
			$('#startbutton').prop('disabled', false);
			document.getElementById("startbutton").style.color = "#ffffff";
			document.getElementById("startbutton").style.backgroundColor = "#1277e1";
			document.getElementById("startbutton").style.opacity = "1";
		}
	});
});

$('#buttonslide2').prop('disabled', true);
document.getElementById("buttonslide2").style.color = "#62636b";
document.getElementById("buttonslide2").style.backgroundColor = "#f8f6f4";
document.getElementById("buttonslide2").style.opacity = "0.5";

$(document).ready(function() {
	$("input[name='hometype']").click(function() {
		if ($("input[name='hometype']:checked").val()) {
			$('#buttonslide2').prop('disabled', false);
			document.getElementById("buttonslide2").style.color = "#ffffff";
			document.getElementById("buttonslide2").style.backgroundColor = "#1277e1";
			document.getElementById("buttonslide2").style.opacity = "1";
		}
	});
});

$('#buttonslide3').prop('disabled', true);
var buttonslide3 = document.getElementById("buttonslide3");
buttonslide3.style.color = "#62636b";
buttonslide3.style.backgroundColor = "#f8f6f4";
buttonslide3.style.opacity = "0.5";
var bool1 = false,
	bool2 = false,
	bool3 = false,
	bool4 = false;

$(document).ready(function() {
	$("#housesizesqft").keyup(function() {
		if ($("#housesizesqft").val() <= 10000 && $("#housesizesqft").val() >= 1) {
			document.getElementById("divhousesizesqft").style.borderColor = "#f8f6f4";
			document.getElementById("error1housesizesqft").style.display = 'none';
			document.getElementById("error2housesizesqft").style.display = 'none';
			bool1 = true;
		} else if (!$("#housesizesqft").val()) {
			document.getElementById("divhousesizesqft").style.borderColor = "#ed6a5e";
			document.getElementById("error1housesizesqft").style.display = 'none';
			document.getElementById("error2housesizesqft").style.display = 'block';
			bool1 = false;
		} else {
			document.getElementById("divhousesizesqft").style.borderColor = "#ed6a5e";
			document.getElementById("error2housesizesqft").style.display = 'none';
			document.getElementById("error1housesizesqft").style.display = 'block';
			bool1 = false;
		}
	});
});

$(document).ready(function() {
	$("#landsizesqft").keyup(function() {
		if ($("#landsizesqft").val() <= 1000000 && $("#landsizesqft").val() >= 1) {
			document.getElementById("divlandsizesqft").style.borderColor = "#f8f6f4";
			document.getElementById("error1landsizesqft").style.display = 'none';
			document.getElementById("error2landsizesqft").style.display = 'none';
			bool2 = true;
		} else if (!$("#landsizesqft").val()) {
			document.getElementById("divlandsizesqft").style.borderColor = "#ed6a5e";
			document.getElementById("error1landsizesqft").style.display = 'none';
			document.getElementById("error2landsizesqft").style.display = 'block';
			bool2 = false;
		} else {
			document.getElementById("divlandsizesqft").style.borderColor = "#ed6a5e";
			document.getElementById("error2landsizesqft").style.display = 'none';
			document.getElementById("error1landsizesqft").style.display = 'block';
			bool2 = false;
		}
	});
});

$(document).ready(function() {
	$("#availablelandsizesqft").keyup(function() {
		if ($("#availablelandsizesqft").val() <= 10000 && $("#availablelandsizesqft").val() >= 0) {
			document.getElementById("divavailablelandsizesqft").style.borderColor = "#f8f6f4";
			document.getElementById("error1availablelandsizesqft").style.display = 'none';
			document.getElementById("error2availablelandsizesqft").style.display = 'none';
			bool3 = true;
		} else {
			document.getElementById("divavailablelandsizesqft").style.borderColor = "#ed6a5e";
			document.getElementById("error2availablelandsizesqft").style.display = 'none';
			document.getElementById("error1availablelandsizesqft").style.display = 'block';
			bool3 = false;
		}
	});
});

$(document).ready(function() {
	$("#apartmentsizesqft").keyup(function() {
		if ($("#apartmentsizesqft").val() <= 2000 && $("#apartmentsizesqft").val() >= 1) {
			document.getElementById("divapartmentsizesqft").style.borderColor = "#f8f6f4";
			document.getElementById("error1apartmentsizesqft").style.display = 'none';
			document.getElementById("error2apartmentsizesqft").style.display = 'none';
			bool4 = true;
		} else if (!$("#apartmentsizesqft").val()) {
			document.getElementById("divapartmentsizesqft").style.borderColor = "#ed6a5e";
			document.getElementById("error1apartmentsizesqft").style.display = 'none';
			document.getElementById("error2apartmentsizesqft").style.display = 'block';
			bool4 = false;
		} else {
			document.getElementById("divapartmentsizesqft").style.borderColor = "#ed6a5e";
			document.getElementById("error2apartmentsizesqft").style.display = 'none';
			document.getElementById("error1apartmentsizesqft").style.display = 'block';
			bool4 = false;
		}
	});
});

$(document).ready(function() {
	$("#formcontentslide3").keyup(function() {
		if (bool1 == true && bool2 == true && bool3 == true) {
			$('#buttonslide3').prop('disabled', false);
			buttonslide3.style.color = "#ffffff";
			buttonslide3.style.backgroundColor = "#1277e1";
			buttonslide3.style.opacity = "1";
		} else if (bool4 == true) {
			$('#buttonslide3').prop('disabled', false);
			buttonslide3.style.color = "#ffffff";
			buttonslide3.style.backgroundColor = "#1277e1";
			buttonslide3.style.opacity = "1";
		} else {
			$('#buttonslide3').prop('disabled', true);
			buttonslide3.style.color = "#62636b";
			buttonslide3.style.backgroundColor = "#f8f6f4";
			buttonslide3.style.opacity = "0.5";
		}
	});
});

$('#buttonslide4').prop('disabled', true);
var buttonslide4 = document.getElementById("buttonslide4");
buttonslide4.style.color = "#62636b";
buttonslide4.style.backgroundColor = "#f8f6f4";
buttonslide4.style.opacity = "0.5";

$('#up1').click(function() {
	var val = parseInt($('#bathroomcnt').val(), 10);
	if (val) {
		$('#bathroomcnt').val(Math.min(val + 1, 20));
	} else {
		$('#bathroomcnt').val(1, 10);
	}
});

$('#down1').click(function() {
	var val = parseInt($('#bathroomcnt').val(), 10);
	if (val) {
		$('#bathroomcnt').val(Math.max(val - 1, 1));
	} else {
		$('#bathroomcnt').val(1, 10);
	}
});

$('#up').click(function() {
	var val1 = parseInt($('#roomcnt').val(), 10);
	var val2 = parseInt($('#bedroomcnt').val(), 10);
	if (val1) {
		if (val1 < val2) {
			$('#roomcnt').val($('#bedroomcnt').val());
		} else {
			$('#roomcnt').val(Math.min(val1 + 1, 20));
		}
	} else {
		if (!val2) {
			$('#roomcnt').val(1, 10);
		} else {
			$('#roomcnt').val(Math.max(val2, 1));
		}
	}
});

$('#down').click(function() {
	var val1 = parseInt($('#roomcnt').val(), 10);
	var val2 = parseInt($('#bedroomcnt').val(), 10);
	if (val1) {
		if (val1 <= val2) {
			$('#roomcnt').val($('#bedroomcnt').val());
		} else {
			$('#roomcnt').val(Math.max(val1 - 1, 1));
		}
	} else {
		if (!val2) {
			$('#roomcnt').val(1, 10);
		} else {
			$('#roomcnt').val(Math.max(val2, 1));
		}
	}
});

$('#up2').click(function() {
	var val1 = parseInt($('#roomcnt').val(), 10);
	var val2 = parseInt($('#bedroomcnt').val(), 10);
	if (val2) {
		if (val1 <= val2) {
			$('#bedroomcnt').val($('#roomcnt').val());
		} else {
			$('#bedroomcnt').val(Math.min(val2 + 1, 20));
		}
	} else {
		if (!val1) {
			$('#bedroomcnt').val(1, 10);
		} else {
			$('#bedroomcnt').val(Math.min(val1, 1));
		}
	}
});

$('#down2').click(function() {
	var val1 = parseInt($('#roomcnt').val(), 10);
	var val2 = parseInt($('#bedroomcnt').val(), 10);
	if (val2) {
		if (val1 < val2) {
			$('#bedroomcnt').val($('#roomcnt').val());
		} else {
			$('#bedroomcnt').val(Math.max(val2 - 1, 1));
		}
	} else {
		if (!val1) {
			$('#bedroomcnt').val(1, 10);
		} else {
			$('#bedroomcnt').val(Math.min(val1, 1));
		}
	}
});

$('#roomcnt').keyup(function() {
	var val = parseInt($('#roomcnt').val(), 10);
	var val2 = parseInt($('#bedroomcnt').val(), 10);
	if (val < 1) {
		$('#roomcnt').val(1);
	} else if (val >= 20) {
		$('#roomcnt').val(20);
	} else if (val <= val2) {
		$('#roomcnt').val($('#bedroomcnt').val());
	}
});

$('#bathroomcnt').keyup(function() {
	var val = parseInt($('#bathroomcnt').val(), 10);
	if (val < 1) {
		$('#bathroomcnt').val(1);
	} else if (val >= 20) {
		$('#bathroomcnt').val(20);
	}
});

$('#bedroomcnt').keyup(function() {
	var val = parseInt($('#roomcnt').val(), 10);
	var val2 = parseInt($('#bedroomcnt').val(), 10);
	if (val2 < 1) {
		$('#bedroomcnt').val(1);
	} else if (val2 >= 20 || val2 >= val) {
		$('#bedroomcnt').val(Math.min(val, 20));
	}
});

$(document).ready(function() {
	$("#formcontentslide4").on("click keyup", function() {
		var buttonslide4 = document.getElementById("buttonslide4");
		if ($('#roomcnt').val() && $('#bathroomcnt').val() && $('#bedroomcnt').val()) {
			$('#buttonslide4').prop('disabled', false);
			buttonslide4.style.color = "#ffffff";
			buttonslide4.style.backgroundColor = "#1277e1";
			buttonslide4.style.opacity = "1";
		} else {
			$('#buttonslide4').prop('disabled', true);
			buttonslide4.style.color = "#62636b";
			buttonslide4.style.backgroundColor = "#f8f6f4";
			buttonslide4.style.opacity = "0.5";
		}
	});
});

$('#buttonslide5').prop('disabled', true);
var buttonslide5 = document.getElementById("buttonslide5");
buttonslide5.style.color = "#62636b";
buttonslide5.style.backgroundColor = "#f8f6f4";
buttonslide5.style.opacity = "0.5";

var count = 0;

$('#up33').click(function() {
	var valup33 = parseInt($('#housefloorscnt').val(), 10);
  if (valup33) {
		$('#housefloorscnt').val(Math.min(valup33 + 1, 10));
	} else {
		$('#housefloorscnt').val(2, 10);
	}
});

$('#housefloorscnt').keypress(function(e) {
    e.preventDefault();
});

$("#housefloorscnt").keydown(function (e) {
  var key = e.keyCode || e.charCode;
  if (key == 8 || key == 46) {
      e.preventDefault();
      e.stopPropagation();
  }
});

$('#down33').click(function() {
  var valdown33 = parseInt($('#housefloorscnt').val(), 10);
  if (valdown33) {
 		if(parseInt($('#housefloorscnt').val(), 10) == '2') {
      $('#housefloorscnt').val("Plain-pied");
    } else {
    	$('#housefloorscnt').val(Math.max(valdown33 - 1, 0));
    }
  } else {
  	$('#housefloorscnt').val('Plain-pied');
  }
});

$('#housefloorscnt').keyup(function() {
	var val = parseInt($('#housefloorscnt').val(), 10);
	if (val < 1) {
		$('#housefloorscnt').val(0);
	} else if (val >= 10) {
		$('#housefloorscnt').val(10);
	}
});

$('#up11').click(function() {
	var val1 = parseInt($('#buildingfloorscnt').val(), 10);
	var val2 = parseInt($('#floorscnt').val(), 10);
	if (val1) {
		if (val1 < val2) {
			$('#buildingfloorscnt').val($('#floorscnt').val());
		} else {
			$('#buildingfloorscnt').val(Math.min(val1 + 1, 10));
		}
	} else {
		if (!val2) {
			$('#buildingfloorscnt').val(1, 10);
		} else {
			$('#buildingfloorscnt').val(Math.max(val2, 0));
		}
	}
});

$('#down11').click(function() {
	var val1 = parseInt($('#buildingfloorscnt').val(), 10);
	var val2 = parseInt($('#floorscnt').val(), 10);
	if (val1) {
		if (val1 <= val2) {
			$('#buildingfloorscnt').val($('#floorscnt').val());
		} else {
			$('#buildingfloorscnt').val(Math.max(val1 - 1, 1));
		}
	} else {
		if (!val2) {
			$('#buildingfloorscnt').val(1, 10);
		} else {
			$('#buildingfloorscnt').val(Math.max(val2, 1));
		}
	}
});

$('#up22').click(function() {
	var val1 = parseInt($('#buildingfloorscnt').val(), 10);
	var val2 = parseInt($('#floorscnt').val(), 10);
	if (val2) {
		if (val1 <= val2) {
			$('#floorscnt').val($('#buildingfloorscnt').val());
		} else {
			$('#floorscnt').val(Math.min(val2 + 1, 10));
		}
	} else {
		if (!val1) {
			$('#floorscnt').val(1, 10);
		} else {
			$('#floorscnt').val(Math.min(val1, 1));
		}
	}
});

$('#down22').click(function() {
	var val1 = parseInt($('#buildingfloorscnt').val(), 10);
	var val2 = parseInt($('#floorscnt').val(), 10);
	if (val2) {
		if (val1 < val2) {
			$('#floorscnt').val($('#buildingfloorscnt').val());
		} else {
			$('#floorscnt').val(Math.max(val2 - 1, 0));
		}
	} else {
		if (!val1) {
			$('#floorscnt').val(0, 10);
		} else {
			$('#floorscnt').val(Math.min(val1, 0));
		}
	}
});

$('#buildingfloorscnt').keyup(function() {
	var val = parseInt($('#buildingfloorscnt').val(), 10);
	var val2 = parseInt($('#floorscnt').val(), 10);
	if (val < 0) {
		$('#buildingfloorscnt').val(1);
	} else if (val >= 10) {
		$('#buildingfloorscnt').val(10);
	} else if (val <= val2) {
		$('#buildingfloorscnt').val($('#floorscnt').val());
	}
});

$('#floorscnt').keyup(function() {
	var val = parseInt($('#buildingfloorscnt').val(), 10);
	var val2 = parseInt($('#floorscnt').val(), 10);
	if (val2 < 0) {
		$('#floorscnt').val(0);
	} else if (val2 >= 10 || val2 >= val) {
		$('#floorscnt').val(Math.min(val, 10));
	}
});

$(document).ready(function() {
	$("#formcontentslide5").on("click keyup", function() {
		var buttonslide5 = document.getElementById("buttonslide5");
		if ($('#floorscnt').val() && $('#buildingfloorscnt').val() || $('#housefloorscnt').val()) {
			$('#buttonslide5').prop('disabled', false);
			buttonslide5.style.color = "#ffffff";
			buttonslide5.style.backgroundColor = "#1277e1";
			buttonslide5.style.opacity = "1";
		} else {
			$('#buttonslide5').prop('disabled', true);
			buttonslide5.style.color = "#62636b";
			buttonslide5.style.backgroundColor = "#f8f6f4";
			buttonslide5.style.opacity = "0.5";
		}
	});
});

$('#buttonslide6').prop('disabled', true);
var buttonslide6 = document.getElementById("buttonslide6");
buttonslide6.style.color = "#62636B";
buttonslide6.style.backgroundColor = "#F8F6F4";
buttonslide6.style.opacity = "0.5";

$('.upslide6').click(function() {
	var $input = $(this).parents('.form-input-card').find('.inputslide6');
	var val = parseInt($input.val(), 10);
	if (val) {
		$input.val(Math.min(val + 1, 10));
	} else {
		$input.val(1, 10);
	}
});

$('.downslide6').click(function() {
	var $input = $(this).parents('.form-input-card').find('.inputslide6');
	var val = parseInt($input.val(), 10);
	if (val) {
		$input.val(Math.max(val - 1, 0));
	} else {
		$input.val(0, 10);
	}
});

$('.inputslide6').keyup(function() {
	var $input = $(this).parents('.form-input-card').find('.inputslide6');
	var val = parseInt($input.val(), 10);
	if (val < 1) {
		$input.val(0);
	} else if (val >= 10) {
		$input.val(10);
	}
});

$(document).ready(function() {
	$("#formcontentslide6").on("click keyup", function() {
		var buttonslide6 = document.getElementById("buttonslide6");
		if ($('#boxgaragecnt').val() && $('#garagecarcnt').val()) {
			$('#buttonslide6').prop('disabled', false);
			buttonslide6.style.color = "#FFFFFF";
			buttonslide6.style.backgroundColor = "#1277E1";
			buttonslide6.style.opacity = "1";
		} else {
			$('#buttonslide6').prop('disabled', true);
			buttonslide6.style.color = "#62636B";
			buttonslide6.style.backgroundColor = "#F8F6F4";
			buttonslide6.style.opacity = "0.5";
		}
	});
});

$('#buttonslide7').prop('disabled', true);
var buttonslide7 = document.getElementById("buttonslide7");
buttonslide7.style.color = "#62636B";
buttonslide7.style.backgroundColor = "#F8F6F4";
buttonslide7.style.opacity = "0.5";

$('.inputslide7').change(function() {
	var $input = $(this);
	var val = parseInt($input.val(), 10);
	if (val < 1) {
		$input.val(0, 10);
	} else if (val >= 1000) {
		$input.val(1000, 10);
	}
});

$(document).ready(function() {
  $("#formcontentslide7").click(function() {
    var buttonslide7 = document.getElementById("buttonslide7");
    if($("input[type='checkbox']:checked").val()){
      $('#buttonslide7').prop('disabled', false);
      buttonslide7.style.color = "#FFFFFF";
      buttonslide7.style.backgroundColor = "#1277E1";
      buttonslide7.style.opacity = "1";
    } else {
      $('#buttonslide7').prop('disabled', true);
      buttonslide7.style.color = "#62636B";
      buttonslide7.style.backgroundColor = "#F8F6F4";
      buttonslide7.style.opacity = "0.5";
    }
  });
});

$('#buttonslide8').prop('disabled', true);
var buttonslide8 = document.getElementById("buttonslide8");
buttonslide8.style.color = "#62636B";
buttonslide8.style.backgroundColor = "#F8F6F4";
buttonslide8.style.opacity = "0.5";

$(document).ready(function() {
  $("#formcontentslide8").click(function() {
    var buttonslide8 = document.getElementById("buttonslide8");
    if($("input[id='checkboxslide8']:checked").val()){
      $('#buttonslide8').prop('disabled', false);
      buttonslide8.style.color = "#FFFFFF";
      buttonslide8.style.backgroundColor = "#1277E1";
      buttonslide8.style.opacity = "1";
    } else {
      $('#buttonslide8').prop('disabled', true);
      buttonslide8.style.color = "#62636B";
      buttonslide8.style.backgroundColor = "#F8F6F4";
      buttonslide8.style.opacity = "0.5";
    }
  });
});

$('.buttonslideradio').prop('disabled', true);
$('.buttonslideradio').css({"background-color": "#F8F6F4", "color": "#62636B", "opacity": "0.5"});

var dataName = [
  "kitchenquality",
  "kitchencondition",
  "floorquality",
  "floorcondition",
  "bathroomcondition",
  "paintquality",
  "paintcondition",
  "windowsquality",
  "windowscondition",
  "situation",
  "sellingdate",
  "sellerproblem"
];

$(document).ready(function() {
  $('.formcontentslideradio').change(function() {
    for (var i = 0; i <= dataName.length; i++) {
      var input = 'input[name=' + "'" + dataName[i] + "'" + ']:checked';
      if($(input).val()) {
        $("#buttonslideradio" + (i + 1)).prop('disabled', false);
        $("#buttonslideradio" + (i + 1)).css({"background-color": "#1277E1", "color": "#FFFFFF", "opacity": "1"});
      } else {
        $("#buttonslideradio" + (i + 1)).prop('disabled', true);
        $("#buttonslideradio" + (i + 1)).css({"background-color": "#F8F6F4", "color": "#62636B", "opacity": "0.5"});
      }
    }
  });
});
