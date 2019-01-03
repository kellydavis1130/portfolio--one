$('#circle').hover(function() {
    $('p').html("We changed the text!");
   });

   $('#circle').click(function() {
    $('img').attr('src', 'https://static.boredpanda.com/blog/wp-content/uploads/2018/10/cutest-puppy-dog-pictures-coverimage.jpg');
   });

   $('.square').click(function() {
       $(this).css('background-color', 'blue');
   });
//background-color is the key and blue is the value
//.addClass(), .removeClass() in java script & Ruby is .prepend or .append

$(function() {
  $('#draggable').draggable();
});
