(function($){

  $(document).ready(function(){
    var slides = $("#slideshow > li");
    var count = 0;

    function toggle_slide(){
      count = (count + 1) % 3;
      slides.removeClass("current").eq(count).addClass("current");
    }
    
    setInterval(toggle_slide, 4000);

  });


    $(function(){
        var slides2 = $("#slideshow2 > li");
        var count = 0;

        function toggle_slide(){
            count = (count + 1) % 3;
            slides2.removeClass("current").eq(count).addClass("current");
        }

        setInterval(toggle_slide, 4000);

    });


    $(function(){
        var slides3 = $("#slideshow3 > li");
        var count = 0;

        function toggle_slide(){
            count = (count + 1) % 3;
            slides3.removeClass("current").eq(count).addClass("current");
        }

        setInterval(toggle_slide, 4000);

    });







})(jQuery);
