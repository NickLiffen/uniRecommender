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

          $(".hidden").attr('class', 'block');

          let likesPercentage, starTotal, dislikesPercentage;
          let result = '';

          result+=`<div id='uni'>`;
          result+=`Our Recommendation is: <b>${response.uniName} </b>`;


          $("#reccommendation").html(result);

          //Get the Precentage of Total Likes by dividing likes by total responses
          likesPercentage = (response.uniLikes / (response.uniLikes + response.uniDislikes)*100).toFixed(1);

          console.log(likesPercentage);

          dislikesPercentage = (response.uniDislikes / (response.uniDislikes + response.uniLikes)*100).toFixed(1);
          //Finds the percentage of likes out of 5 due to the 5 star rating system.

          console.log(dislikesPercentage);


          starTotal = ((likesPercentage/100)*5).toFixed(1);

          console.log(starTotal);

          if(starTotal <= 1.0){
            starTotal = 0.5;
          }

          //$("#input-id").rating({min:1, max:5,  disabled: true, size:'sm'});
          $('#input-2').rating('update', starTotal);
          $('#totalCount').html(response.uniDislikes + response.uniLikes + "  Total Reviews");

          let likProgressInfo = '';
          likProgressInfo+=`<div class='paddingTop'></div>`;
          likProgressInfo+=`<div class="col-sm-4">`;
          likProgressInfo+=`<p class='floatRight'>Likes:</p>`;
          likProgressInfo+=`</div>`;

          likProgressInfo+=`<div class="col-sm-4">`;
          likProgressInfo+=`<div class="progress">`;
          likProgressInfo+=`<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="${likesPercentage}" aria-valuemin="0" aria-valuemax="100" style="width:${likesPercentage}%">`;
          likProgressInfo+=`${likesPercentage}%`;
          likProgressInfo+=`</div>`;
          likProgressInfo+=`</div>`;
          likProgressInfo+=`</div>`;

          likProgressInfo+=`<div class="col-sm-4">`;
          likProgressInfo+=`<p>${response.uniLikes}  <span class='glyphicon glyphicon-thumbs-up'></p>`;
          likProgressInfo+=`</div>`;

        $("#progressLikes").html(likProgressInfo);

        let dislikProgressInfo = '';
        dislikProgressInfo+=`<div class="col-sm-4">`;
        dislikProgressInfo+=`<p class='floatRight'>Dislikes: </p>`;
        dislikProgressInfo+=`</div>`;

        dislikProgressInfo+=`<div class="col-sm-4">`;
        dislikProgressInfo+=`<div class="progress">`;
        dislikProgressInfo+=`<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="${dislikesPercentage}" aria-valuemin="0" aria-valuemax="100" style="width:${dislikesPercentage}%">`;
        dislikProgressInfo+=`${dislikesPercentage}%`;
        dislikProgressInfo+=`</div>`;
        dislikProgressInfo+=`</div>`;
        dislikProgressInfo+=`</div>`;

        dislikProgressInfo+=`<div class="col-sm-4">`;
        dislikProgressInfo+=`<p>${response.uniDislikes}  <span class='glyphicon glyphicon-thumbs-down'></p>`;
        dislikProgressInfo+=`</div>`;

      $("#progressDislikes").html(dislikProgressInfo);

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
