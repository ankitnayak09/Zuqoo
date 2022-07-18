// $(document).ready(function () {
//   $("#main_app").load("./html/navbar.html");
// });

// $("#cdn_link").load("/html/link.html");

$('.desk_nav').load("/html/navbar.html");

$('.footer').load("/html/footer.html");
// $(".menu").click(function () {
//   $("#mobile_navbar_container").fadeToggle();
// });

// TODO: Not Working
// $(document).ready(function() {
//     $('#product-container .col:nth-of-type(3) .row').each( (el) => {
//         $(el).hide();
//     })
// })
// $('#product-container .col:nth-of-type(2) .row .col').click(function (element) {
//     $("#product-container .col:nth-of-type(2) .row .col").each(function() {
//         $(this).removeClass('active');
//     })
//     $(this).addClass('active');

//     var id = $(this).attr("data-category");
//     $(`#${id}`).show();

// })

$("#product-container .col:nth-of-type(2) .row .col")
	.first()
	.addClass("active");

$("#product-container .col:nth-of-type(2) .row .col").click(function () {
	var $this = $(this);
	($siblings = $this.parent().children()),
		(position = $siblings.index($this));
	console.log(position);
	$("#product-container .col:nth-of-type(3) .row")
		.removeClass("active")
		.eq(position)
		.addClass("active");

	$siblings.removeClass("active");
	$this.addClass("active");
});
