var answers = ["HTML","ECMAscript","css file","js file"];
var pointPerCorrect = 25;


function percentage(score) {
return "Your score is " + parseInt((score / 100) * 100) + "%";
}

$(document).ready(function(){
   $("#questions").submit(function (event) {


      $('#result').text('');
      var score = 0;
      var answerOne = ($("input[type=radio][name=answer]:checked").val());
      var answerTwo = ($("input[type=radio][name=answer1]:checked").val());
      var answerThree = ($("input[type=radio][name=answer2]:checked").val());
      var answerFour = ($("input[type=radio][name=answer3]:checked").val());

      if (answerOne === undefined || answerTwo === undefined || answerThree === undefined || answerFour === undefined) {
  $('#questionsIncomplete').text('Please Complete questions Before Submitting');
  $('#questionsIncomplete').fadeOut(10000);
} else {
         if (answerOne === answers[0]) {
    score += pointPerCorrect;
  }
         if (answerTwo === answers[1]) {
    score += pointPerCorrect;
  }
         if (answerThree === answers[2]) {
    score += pointPerCorrect;
  }
        if (answerFour === answers[3]) {
  score += pointPerCorrect;
  }


        $("input[type=radio][name=answer]:checked").prop('checked', false);
        $("input[type=radio][name=answer1]:checked").prop('checked', false);
        $("input[type=radio][name=answer2]:checked").prop('checked', false);
        $("input[type=radio][name=answer3]:checked").prop('checked', false);
        $('#questionsIncomplete').text('');
        $('#result').text(percentage(score));
}
          event.preventDefault();
 });
});
