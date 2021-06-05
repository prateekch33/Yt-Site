window.videoChanger=function(clicked){
    $('#player').attr('src', clicked);    
}
$('.row').on('click', function(event){
    $(this).siblings('.row').removeClass('active');
    $(this).addClass('active');
    event.stopPropagation();
});