  var HomeAddress = HomeAddress || [];
  var componentForm = [
    "street_number",
    "route",
    "postal_code",
    "locality",
    "administrative_area_level_1",
    "country"
  ];

  //if (HomeAddress == []) {
  // A custom function to get cookies
  // Split cookie string and get all individual name=value pairs in an array
  var cookieArr = document.cookie.split(";");

  // Loop through the array elements
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    var cookieidentifier = cookiePair[0].trim()
    if (cookieidentifier == componentForm[0]){
      HomeAddress.push(cookiePair[1]);
      break;
    }
  }

  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    var cookieidentifier = cookiePair[0].trim()
    if (cookieidentifier == componentForm[1]){
      HomeAddress.push(cookiePair[1]);
      break;
    }
  }

  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    var cookieidentifier = cookiePair[0].trim()
    if (cookieidentifier == componentForm[2]){
      HomeAddress.push(cookiePair[1]);
      break;
    }
  }

  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    var cookieidentifier = cookiePair[0].trim()
    if (cookieidentifier == componentForm[3]){
      HomeAddress.push(cookiePair[1]);
      break;
    }
  }

  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    var cookieidentifier = cookiePair[0].trim()
    if (cookieidentifier == componentForm[4]){
      HomeAddress.push(cookiePair[1]);
      break;
    }
  }

  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    var cookieidentifier = cookiePair[0].trim()
    if (cookieidentifier == componentForm[5]){
      HomeAddress.push(cookiePair[1]);
      break;
    }
  }
  //}

  document.getElementById("Home Address 1").innerHTML = (HomeAddress[0] + ' ' + HomeAddress[1]);
  document.getElementById("Home Address 2").innerHTML = (HomeAddress[2] + ' ' + HomeAddress[3]);
  document.getElementById("Home Address 3").innerHTML = (HomeAddress[5]);

  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  for (var i = 0; i <= HomeAddress.length; i++) {
    document.getElementById(componentForm[i]).value = HomeAddress[i];
  }

  function displayOne() {
    for (var i = 0; i <= 2; i++) {
      var apartmenti = document.getElementById("isapartment" + i);
      var housei = document.getElementById("ishouse" + i)
      if (document.getElementById("apartment").checked) {
        housei.style.display = "none";
        apartmenti.style.display = "initial";
      } else if(document.getElementById("house").checked) {
        housei.style.display = "initial";
        apartmenti.style.display = "none";
      }
    }  
  }

  $('.input-number-increment').click(function() {
    var $input = $(this).parents('.form-input-card').find('.input-number');
    var val = parseInt($input.val(), 10);
    if (val) {
      $input.val(Math.min(val + 1, 10));
    } else {
      $input.val(2, 10);
    }
  });
  $('.input-number-decrement').click(function() {
    var $input = $(this).parents('.form-input-card').find('.input-number');
    var val = parseInt($input.val(), 10);
    if (val) {
      $input.val(Math.max(val - 1, 1));
    } else {
      $input.val(1, 10);
    }
  })

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

  $(document).ready(function(){
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

  $(document).ready(function(){
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

  $(document).ready(function(){
    $("#housesizesqft").keyup(function() {
      if ($("#housesizesqft").val() <= 10000 &&	$("#housesizesqft").val() >= 1) {
        document.getElementById("divhousesizesqft").style.borderColor = "#f8f6f4";
        document.getElementById("error1housesizesqft").style.display = 'none';
        document.getElementById("error2housesizesqft").style.display = 'none';
      } else if (!$("#housesizesqft").val()) {
        document.getElementById("divhousesizesqft").style.borderColor = "#ed6a5e";
        document.getElementById("error1housesizesqft").style.display = 'none';
        document.getElementById("error2housesizesqft").style.display = 'block';
      } else {
        document.getElementById("divhousesizesqft").style.borderColor = "#ed6a5e";
        document.getElementById("error2housesizesqft").style.display = 'none';
        document.getElementById("error1housesizesqft").style.display = 'block';
      }
    });
  });

  $(document).ready(function(){
    $("#landsizesqft").keyup(function() {
      if ($("#landsizesqft").val() <= 1000000 &&	$("#landsizesqft").val() >= 1) {
        document.getElementById("divlandsizesqft").style.borderColor = "#f8f6f4";
        document.getElementById("error1landsizesqft").style.display = 'none';
        document.getElementById("error2landsizesqft").style.display = 'none';
      } else if (!$("#landsizesqft").val()) {
        document.getElementById("divlandsizesqft").style.borderColor = "#ed6a5e";
        document.getElementById("error1landsizesqft").style.display = 'none';
        document.getElementById("error2landsizesqft").style.display = 'block';
      } else {
        document.getElementById("divlandsizesqft").style.borderColor = "#ed6a5e";
        document.getElementById("error2landsizesqft").style.display = 'none';
        document.getElementById("error1landsizesqft").style.display = 'block';
      }
    });
  });

  $(document).ready(function(){
    $("#availablelandsizesqf").keyup(function() {
      if ($("#availablelandsizesqf").val() <= 10000 &&	$("#availablelandsizesqf").val() >= 1) {
        document.getElementById("divavailablelandsizesqf").style.borderColor = "#f8f6f4";
        document.getElementById("error1availablelandsizesqf").style.display = 'none';
        document.getElementById("error2availablelandsizesqf").style.display = 'none';
      } else if (!$("#availablelandsizesqf").val()) {
        document.getElementById("divavailablelandsizesqf").style.borderColor = "#ed6a5e";
        document.getElementById("error1availablelandsizesqf").style.display = 'none';
        document.getElementById("error2availablelandsizesqf").style.display = 'block';
      } else {
        document.getElementById("divavailablelandsizesqf").style.borderColor = "#ed6a5e";
        document.getElementById("error2availablelandsizesqf").style.display = 'none';
        document.getElementById("error1availablelandsizesqf").style.display = 'block';
      }
    });
  });

  $(document).ready(function(){
    $("#apartmentsizesqft").keyup(function() {
      if ($("#apartmentsizesqft").val() <= 2000 &&	$("#apartmentsizesqft").val() >= 1) {
        document.getElementById("divapartmentsizesqft").style.borderColor = "#f8f6f4";
        document.getElementById("error1apartmentsizesqft").style.display = 'none';
        document.getElementById("error2apartmentsizesqft").style.display = 'none';
      } else if (!$("#apartmentsizesqft").val()) {
        document.getElementById("apartmentsizesqft").style.borderColor = "#ed6a5e";
        document.getElementById("error1apartmentsizesqft").style.display = 'none';
        document.getElementById("error2apartmentsizesqft").style.display = 'block';
      } else {
        document.getElementById("divapartmentsizesqft").style.borderColor = "#ed6a5e";
        document.getElementById("error2apartmentsizesqft").style.display = 'none';
        document.getElementById("error1apartmentsizesqft").style.display = 'block';
      }
    });
  });
</script>
