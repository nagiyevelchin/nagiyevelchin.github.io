jQuery(document).ready(function ($) {
    $('.project_filter').click(function (e) {
        e.preventDefault();
        let class_name = $(this).attr('href').substring(1);
        if (class_name) {
            class_name = '.' + class_name;
            $('.projects-section .item' + class_name).show();
            $('.projects-section .item:not(' + class_name+')').hide();
        }else{
            $('.projects-section .item').show();
        }
    })
    /*======= Skillset *=======*/
    $('.level-bar-inner').css('width', '0');
    $(window).on('load', function () {
        $('.level-bar-inner').each(function () {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });
});
