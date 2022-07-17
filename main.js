// $(document).ready(function () {
//   $("#main_app").load("./html/navbar.html");
// });

// $("#cdn_link").load("/html/link.html");

$(".desk_nav").load("/html/navbar.html");

$(".footer").load("/html/footer.html");
// $(".menu").click(function () {
//   $("#mobile_navbar_container").fadeToggle();
// });

$('#product-container .col:nth-of-type(2) .row .col').click(function () {
    $("#product-container .col:nth-of-type(2) .row .col").each(function() {
        $(this).removeClass('active');
    })
    $(this).addClass('active');
    
    $("#product-container .col:nth-of-type(3) .row").each(function(el) {
        if($(el).attr('id') != $(this).attr("data-category")){
            $(el).removeClass('active');
        }
        else {
            $(el).addClass('active');
        }
    })

})