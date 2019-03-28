$(document).ready(function () {    

    $( ".nav-link" ).click(function () { //when a .nav-link is clicked, scroll to the href of the link
        var linkTo = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(linkTo).offset().top }, 2000);
    });

});