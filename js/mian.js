//监视滑动菜单事件
window.onscroll = function () {
    var kstop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条y轴上的距离
    // console.log(kstop);
    var ksheight = document.documentElement.clientHeight || document.body.clientHeight; //可视区域的高度
    // console.log(ksheight);
    if (kstop >= 400) {
        $(".right_fixed_box").show();
        $(".header-one").addClass("bg-dark");
    } else {
        $(".header-one").removeClass("bg-dark");
        $(".right_fixed_box").hide();
    }
};
//导航切换
for (let i = 0; i < $("#tab li").length; i++) {
    $("#tab li")[i].addEventListener("click", function () {
        $("#tab li").eq(i).addClass('navatcvie').siblings().removeClass('navatcvie');
        //$(this).addClass('curNav').siblings().removeClass('curNav');
        $(".tab-list").eq(i).addClass('cur').siblings().removeClass('cur');
    }, true)
}
;
//常见问题
for (let ii = 0; ii < $(".cjwt_box ul li").length; ii++) {
    $(".cjwt_box ul li")[ii].addEventListener("click", function () {
            console.log(this);
            $(".cjwt-da").eq(ii).toggle();
        } ,true)
}
