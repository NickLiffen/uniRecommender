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


});
