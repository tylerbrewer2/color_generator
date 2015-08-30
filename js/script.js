$( document ).ready(function() {
  $( "div.color_box" ).click(function() {
    r = Math.floor((Math.random() * 254) + 1);
    g = Math.floor((Math.random() * 254) + 1);
    b = Math.floor((Math.random() * 254) + 1);
    console.log(r);
    console.log(g);
    console.log(b);
    console.log("rgb(" + r + "," + g + "," + b + ")");
    $(this).css("background-color","rgb(" + r + "," + g + "," + b + ")");
    ele = $('div.color_info h3').length;
    if ( ele == 0 ) {
      $( "div.color_info" ).append( "<h3>rgb(" + r + "," + g + "," + b + ")</h3>" );
    }
    else {
      $("div.color_info h3").text("rgb(" + r + "," + g + "," + b + ")")
    };
  });
});
