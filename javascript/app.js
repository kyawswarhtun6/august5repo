// start jquery area

   $(document).ready(function(){
    $("#banner_coursel").owlCarousel({
        items: 1,
        loop: true,
        // autoplay:true,
        dots: false,
    });


    $(".product_edit_btn").click(function(){
        // console.log($(this));
        $(this).toggleClass("active");
        // console.log($(this).parent());  //result =product_main_container
        // console.log($(this).parent().find(".product_name_group")); // get product_name_group class
        $(this).parent().find(".product_name_group").toggleClass("active");
        // console.log( $(this).parent().find(".product_edit_form"));
        $(this).parent().find(".product_edit_form").toggleClass("active");
    
       })
    
   })

  

// end juery area