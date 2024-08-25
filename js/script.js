  

  $(document).ready(function() {

    //ex1
    $( "#draggable" ).draggable();
     
     //ex2
      $( "#sortable" ).sortable();

      //ex3
         $( "#accordion" ).accordion();

      //ex4
         var data =["HTML",

          "CSS",
          "Bootstrap",
          "JS",
          "JQ"
          ];
      $( "#subject" ).autocomplete({
      source: data
    });

      //ex5
      $( "radio" ).checkboxradio();
         

       //ex6
      $("#datepicker" ).datepicker();

       //ex7
         $( "#dialog" ).dialog();

         //ex8
         $( "#menu" ).menu();

         //ex9
   $( "#progressbar" ).progressbar({
      value: 37
    });

   //ex10
      $( "#slider" ).slider();

      //ex11
        var spinner = $( "#spinner" ).spinner();
    
      //ex12
         $( "#tabs" ).tabs();

      //ex13
         $( document ).tooltip();


  } );
      //ex14
          var state = true;
      $( "#button_t" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  

  //ex15
      $( function() {
    if ( !$( "<canvas>" )[0].getContext ) {
      $( "<div>" ).text(
        "Your browser doesn't support canvas, which is required for this demo."
      ).appendTo( "#graphs" );
      return;
    }
 
    var i = 0,
      width = 100,
      height = 100;
 
    $.each( $.easing, function( name, impl ) {
      var graph = $( "<div>" ).addClass( "graph" ).appendTo( "#graphs" ),
        text = $( "<div>" ).text( ++i + ". " + name ).appendTo( graph ),
        wrap = $( "<div>" ).appendTo( graph ).css( 'overflow', 'hidden' ),
        canvas = $( "<canvas>" ).appendTo( wrap )[ 0 ];
 
      canvas.width = width;
      canvas.height = height;
      var drawHeight = height * 0.8,
        cradius = 10,
        ctx = canvas.getContext( "2d" );
      ctx.fillStyle = "black";
 
      // Draw background
      ctx.beginPath();
      ctx.moveTo( cradius, 0 );
      ctx.quadraticCurveTo( 0, 0, 0, cradius );
      ctx.lineTo( 0, height - cradius );
      ctx.quadraticCurveTo( 0, height, cradius, height );
      ctx.lineTo( width - cradius, height );
      ctx.quadraticCurveTo( width, height, width, height - cradius );
      ctx.lineTo( width, 0 );
      ctx.lineTo( cradius, 0 );
      ctx.fill();
 
      // Draw bottom line
      ctx.strokeStyle = "#555";
      ctx.beginPath();
      ctx.moveTo( width * 0.1, drawHeight + .5 );
      ctx.lineTo( width * 0.9, drawHeight + .5 );
      ctx.stroke();
 
      // Draw top line
      ctx.strokeStyle = "#555";
      ctx.beginPath();
      ctx.moveTo( width * 0.1, drawHeight * .3 - .5 );
      ctx.lineTo( width * 0.9, drawHeight * .3 - .5 );
      ctx.stroke();
 
      // Plot easing
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.moveTo( width * 0.1, drawHeight );
      $.each( new Array( width ), function( position ) {
        var state = position / width,
          val = impl( state, position, 0, 1, width );
        ctx.lineTo( position * 0.8 + width * 0.1,
          drawHeight - drawHeight * val * 0.7 );
      });
      ctx.stroke();
 
      // Animate on click
      graph.on( "click", function() {
        wrap
          .animate( { height: "hide" }, 2000, name )
          .delay( 800 )
          .animate( { height: "show" }, 2000, name );
      });
 
      graph.width( width ).height( height + text.height() + 10 );
    });
  } );