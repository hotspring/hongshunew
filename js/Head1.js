$(".navera #tipa").bind("mouseenter",function(){
    var obj = $(this).children(".navpchka");
    if($(obj).length){
        $(this).removeClass("navpa tipsa");
        $(this).addClass("navp1a tipsa");
        $(obj).css("display","");
    }
}).bind("mouseleave",function(){
    var obj = $(this).children(".navpchka");
    if($(obj).length){
        $(this).removeClass("navp1a tipsa");
        $(this).addClass("navpa tipsa");
        $(obj).css("display","none");
    }
});