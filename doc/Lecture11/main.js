// JavaScript source code



        $("document").ready(function(){
            $(document.body).on('click',".fa-heart",function(){
                if(!$(this).hasClass("red")){
                    $(this).addClass("red");   // change color of icon
                    $(this).parent().find('img').css({
                                                               'width' : '250px',
                                                               'height' : '250px'
                                                            });   // chnage image size
                }else{
                    $(this).removeClass("red");   // chane color of icon
                     $(this).parent().find('img').css({
                                                               'width' : '200px',
                                                               'height' : '200px'
                                                            });   // change image size
                }
            });
        });

        /*
         *  This function is to add new image on page
         */
        function addImage(){
            var img = $("#image").val() ;
            //console.log(img);
            //console.log($(".flex-container").last(".img-container"));
            var  html = '<div class="img-container">               <img src="'+ img +'">                   <span class="fa fa-heart" style="color:none;"></span>            </div> ';
            $(".flex-container").last("div.img-container").append(html);
        }

