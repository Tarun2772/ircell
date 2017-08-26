/**
 * Created by Tarun on 8/26/2017.
 */
$(document).ready(function(){
    $("#about-us").mouseenter(function(){
        $("#research").hide()
        $("#awards").hide();
        $("#alumni").hide();
        $("H2").hide();
        $(this).animate({
            width: '50%'
        }, "slow")
        $("#about-us-detail").css("display","block");
        $(this).css(
            "box-shadow","2px 2px 2px purple"
        )
    });
    $("#about-us").mouseleave(function(){
        $("#research").show()
        $("#awards").show();
        $("#alumni").show();
        $("H2").show();
        $(this).animate({
            width: '25%'
        }, "slow")
        $("#about-us-detail").css("display","none");
        $(this).css(
            "box-shadow","none"
        )
    });
    $("#research").mouseenter(function(){
        //$("#about-us").hide()
        $("#awards").hide();
        $("#alumni").hide();
        $("H2").hide();
        $(this).animate({
            width: '50%'
        }, "slow")
        $("#research-detail").css("display","block");
        $(this).css(
            "box-shadow","2px 2px 2px purple"
        )
    });
    $("#research").mouseleave(function(){
       // $("#about-us").show()
        $("#awards").show();
        $("#alumni").show();
        $("H2").show();
        $(this).animate({
            width: '25%'
        }, "slow")
        $("#research-detail").css("display","none");
        $(this).css(
            "box-shadow","none"
        )
    });
    $("#alumni").mouseenter(function(){
        //$("#about-us").hide()
        $("#awards").hide();
      //  $("#research").hide();
        $("H2").hide();
        $(this).animate({
            width: '50%'
        }, "slow")
        $("#alumni-detail").css("display","block");
        $(this).css(
            "box-shadow","2px 2px 2px purple"
        )
    });
    $("#alumni").mouseleave(function(){
        // $("#about-us").show()
        $("#awards").show();
        $("#research").show();
        $("H2").show();
        $(this).animate({
            width: '25%'
        }, "slow")
        $("#alumni-detail").css("display","none");
        $(this).css(
            "box-shadow","none"
        )
    });
    $("#awards").mouseenter(function(){
      //  $("#about-us").hide()
       // $("#awards").hide();
        //  $("#research").hide();
        $("H2").hide();
        $(this).animate({

            width: '25%',
            //right: '50%',
        }, "slow")
        $("#awards-detail").css("display","block");
        $(this).css(
            "box-shadow","2px 2px 2px purple"
        )
    });
    $("#awards").mouseleave(function(){
        // $("#about-us").show()
       // $("#awards").show();
       // $("#research").show();
        $("H2").show();
        $(this).animate({
            right:'0',
            width: '25%'
        }, "slow")
        $("#awards-detail").css("display","none");
        $(this).css(
            "box-shadow","none"
        )
    });
});
