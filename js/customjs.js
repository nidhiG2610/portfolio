// JavaScript source code


/*  home page scrolloing*/

$(document).ready(function (){
            $(".detail1").click(function (){
                $('html, body').animate({
                    scrollTop: $("#detail1").offset().top
                }, 2000);
            });
    
            $(".detail2").click(function (){
                $('html, body').animate({
                    scrollTop: $("#detail2").offset().top
                }, 2000);
            });
            $(".detail3").click(function (){
                $('html, body').animate({
                    scrollTop: $("#detail3").offset().top
                }, 2000);
            });

          $(".back-to-top").click(function (){
                $('html, body').animate({
                    scrollTop: $("html,body").offset().top
                }, 1000);
            });          
        });

       

  function openTab(evt, cityName) {
          var i, tabcontent, tablinks;
          tabcontent = document.getElementsByClassName("tabcontent");
          for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }
          tablinks = document.getElementsByClassName("tablinks");
          for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
          }
          document.getElementById(cityName).style.display = "block";
          evt.currentTarget.className += " active";
        }

    $( function() {
        console.log($( "#accordion" ));
   
    $( "#accordion1" ).accordion({
         animate: 200,
         heightStyle: "content",
         collapsible: true
        });
    $( "#accordion2" ).accordion({
             animate: 200,
             heightStyle: "content",
             collapsible: true,
             active: false
            });
    });


$(".fa-heart").on('click',function(){ 
    if( $(this).css("color") == "rgb(0, 0, 0)"){        
        $(this).css("color", "red");
    }else{
       $(this).css("color", "black"); 
    }
});

$( function() {
    $( "#dialogBox1" ).dialog({
      autoOpen: false,
       width: "auto",
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#openDialogue1" ).on( "click", function() {
        $("#dialogBox1").dialog("open");
      
    });

    $( "#dialogBox2" ).dialog({
      autoOpen: false,    
       width: "auto",
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#openDialogue2" ).on( "click", function() {
        $("#dialogBox2").dialog("open");
      
    });
    $( "#dialogBox3" ).dialog({
          autoOpen: false,
          width: "auto",
          show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "explode",
            duration: 1000
          }
        });
 
        $( "#openDialogue3" ).on( "click", function() {
            $("#dialogBox3").dialog("open");
      
        });
    $( "#dialogBox4" ).dialog({
      autoOpen: false,      
       width: "auto",  
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#openDialogue4" ).on( "click", function() {
        $("#dialogBox4").dialog("open");
      
    });
    $( "#dialogBox5" ).dialog({
      autoOpen: false,
       width: "auto",
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#openDialogue5" ).on( "click", function() {
        $("#dialogBox5").dialog("open");
      
    });
    $( "#dialogBox6" ).dialog({
      autoOpen: false,
       width: "auto",
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#openDialogue6" ).on( "click", function() {
        $("#dialogBox6").dialog("open");
      
    });

     $( "#dialogBox7" ).dialog({
      autoOpen: false,
       width: "auto",
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#openDialogue7" ).on( "click", function() {
        $("#dialogBox7").dialog("open");
      
    });
     $( "#dialogBox8" ).dialog({
      autoOpen: false,
       width: "auto",
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#openDialogue8" ).on( "click", function() {
        $("#dialogBox8").dialog("open");
      
    });
});

