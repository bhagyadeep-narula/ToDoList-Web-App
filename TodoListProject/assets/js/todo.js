// $('li').click(function() {
//   if ($(this).css("color") === "rgb(128, 128, 128)") {
//     $(this).css({
//       color: "black",
//       textDecoration: "none"
//     });
//   } else {
//     $(this).css({
//       color: "gray",
//       textDecoration: "line-through"
//     });
//   }
// });
//  or // the code below does the same thing as above


$('ul').on("click", "li", function() {
  $(this).toggleClass('completed')
});

$('ul').on("click", "span", function(event) {
  $(this).parent().fadeOut(300, function() {
    $(this).remove();
  });
  event.stopPropagation();
});


var intt = $('input')
var ul = $('ul')
console.log(intt);
console.log(ul);
console.log(intt.length);


$("#monday").keypress( function(event) {
  if (event.which === 13) {
    likh = $(this).val() ;
    $("input").val("");
    $(".monday").append("<li><span><i class='fa fa-trash-alt'></i> </span>" + likh + "</li>");
  }
});

$("#tuesday").keypress( function(event) {
  if (event.which === 13) {
    likh = $(this).val() ;
    $("input").val("");
    $(".tuesday").append("<li><span><i class='fa fa-trash-alt'></i> </span>" + likh + "</li>");
  }
});


$("#wednesday").keypress( function(event) {
  if (event.which === 13) {
    likh = $(this).val() ;
    $("input").val("");
    $(".wednesday").append("<li><span><i class='fa fa-trash-alt'></i> </span>" + likh + "</li>");
  }
});


$("#thursday").keypress( function(event) {
  if (event.which === 13) {
    likh = $(this).val() ;
    $("input").val("");
    $(".thursday").append("<li><span><i class='fa fa-trash-alt'></i> </span>" + likh + "</li>");
  }
});


$("#friday").keypress( function(event) {
  if (event.which === 13) {
    likh = $(this).val() ;
    $("input").val("");
    $(".friday").append("<li><span><i class='fa fa-trash-alt'></i> </span>" + likh + "</li>");
  }
});


$("#saturday").keypress( function(event) {
  if (event.which === 13) {
    likh = $(this).val() ;
    $("input").val("");
    $(".saturday").append("<li><span><i class='fa fa-trash-alt'></i> </span>" + likh + "</li>");
  }
});


$("#sunday").keypress( function(event) {
  if (event.which === 13) {
    likh = $(this).val() ;
    $("input").val("");
    $(".sunday").append("<li><span><i class='fa fa-trash-alt'></i> </span>" + likh + "</li>");
  }
});


$('h1').on("click", ".fa-plus", function() {
  $('input[type="text"]').fadeToggle(300);
});
