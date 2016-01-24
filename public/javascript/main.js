"use strict";

$(document).ready(function() {

  $('#getReccommendation').submit(function() {
      //Stop the Form from submiting automatically
      event.preventDefault();
      //Declaring varibales
      let locationValue, specialityValue, info;
      //Get Values from the add parents option
      locationValue = $('#sel1').val();
      //Get Values from the add parents option
      specialityValue = $('#sel2').val();
      //Put variables into document
      info = {
        locationValue: locationValue,
        specialityValue: specialityValue
      };
      //Ajax Request to get the info
      $.ajax({
          type: 'POST',
          data: info,
          url: '/update',
          dataType: 'JSON'
      }).done(function(response) {

            let result = '';

            result+=`<div id='uni'>`;
            result+=`Uni Name: ${response.uniName} `;
            result+=`<span class='glyphicon glyphicon-thumbs-up'> ${response.uniLikes} `;

            $("#reccommendation").html(result);

      });
  });

  $('#insertReccommendation').submit(function(){
    //Stop the Form from submiting automatically
    event.preventDefault();
    //Declaring varibales
    let uniName, rating, info;
    //Get Values from the add parents option
    uniName = $('#sel3').val();
    //Get Values from the add parents option
    rating = $('#sel4').val();
    //Put variables into document
    info = {
      uniName: uniName,
      rating: rating
    };
    //Ajax Request to get the info
    $.ajax({
        type: 'POST',
        data: info,
        url: '/recommend',
        dataType: 'JSON'
    }).done(function() {

          let result = '';

          result='Thankyou for your vote :)';

          $("#reccommendation").html(result);

    });

  });


});
