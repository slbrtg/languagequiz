$(document).ready(function() {
   $("form#quiz").submit(function(event) {
     event.preventDefault();

     //capture the value from the form and if no input is made
     //default the value to 0
     var score1= parseInt($("input:radio[name=score1]:checked").val());
     if (isNaN(score1)) { score1 = 0; }
     var score2= parseInt($("input:radio[name=score2]:checked").val());
     if (isNaN(score1)) { score2 = 0; }
     var score3= parseInt($("input:radio[name=score3]:checked").val());
     if (isNaN(score1)) { score3 = 0; }
     var score4= parseInt($("input:radio[name=score4]:checked").val());
     if (isNaN(score1)) { score4 = 0; }
     var score5= parseInt($("input:radio[name=score5]:checked").val());
     if (isNaN(score1)) { score5 = 0; }

     var total = score1 + score2 + score3 + score4 + score5
     console.log(score1);
  });
});
