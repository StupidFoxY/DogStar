/**
 * Created by Fox on 2017/10/10.
 */
$(function(){
    $(window).scroll(function(){
        console.log( $(this).scrollTop() );
        $('.bg1').css('background-position','50% '+($(this).scrollTop()-1100)+'px');
        $('.bg2').css('background-position','10% '+($(this).scrollTop()-2250)+'px');
        $('.bg3').css('background-position','50% '+($(this).scrollTop()-3450)+'px');
        $('.bg4').css('background-position','50% '+($(this).scrollTop()-4600)+'px');
    });
});