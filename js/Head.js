$(".naver #tip").bind("mouseenter",function(){
    var obj = $(this).children(".navpchk");
    if($(obj).length){
        $(this).removeClass("navp tips");
        $(this).addClass("navp1 tips");
        $(obj).css("display","");
    }
}).bind("mouseleave",function(){
    var obj = $(this).children(".navpchk");
    if($(obj).length){
        $(this).removeClass("navp1 tips");
        $(this).addClass("navp tips");
        $(obj).css("display","none");
    }
});