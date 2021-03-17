jQuery(document).ready(function () {

    //메뉴버튼 클릭하면 주메뉴(nav) 나옴
    $('.menu_btn').click(function () {

        $('nav').show(function () {
            $('nav ul li').each(function () {
                var indexNum = $(this).index();
                $(this).delay(indexNum * 300).fadeIn();
            });
        });
    });
    $('nav .close').click(function () {
        $('nav').hide();
    });


    //주메뉴를 클릭하면 해당 section으로 이동
    $('nav ul li a').click(function () {
        $('nav').hide();
        var menu_attr = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(menu_attr).offset().top
        }, 1000);
    });


   //스킬바
    $(window).scroll(function(){
        //화면 맨위쪽 위치 : 0을 변수에 저장
        var winTop=$(window).scrollTop();
        //화면 아래쪽 위치를 변수에 저장
        var winBottom=winTop+$(window).height();
        
        //두번째 section의 시작 위치값을 변수에 저장
        var secTop=$('.profile').offset().top+300;
        var secBottom=secTop+$('.profile').height()+500;
        
        //top < wBottom && bottom > wTop
        if(secTop<winBottom && secBottom>winTop){
            $('.skillbar').each(function(){
		          $(this).find('.skillbar-bar').addClass('active');
	        });
        }else{
            $('.skillbar').each(function(){
		          $(this).find('.skillbar-bar').removeClass('active');
	        });
        }
            
        
    });

    //프로필 탭메뉴
    $(function () {
        //클릭한 제목의 인덱스 번호를 저장하는 변수 선언
        var num = 0;

        //모든 내용 안보임
        $('.content > div').hide();
        //첫번째 내용만 보임
        $('.m1').show();
        $('.title ul li').click(function () {
            //num변수에 클릭한 li의 인덱스번호를 저장
            num = $(this).index();

            //모든 제목의 active 제거
            $('.title ul li').removeClass('active');

            //클릭한 제목에만 active 추가
            $(this).addClass('active');

            //.content 안의 자식객체 div개수만큼 반복
            $('.content > div').each(function () {
                //.content > div 의 인덱스 번호를 idx변수에 저장
                var idx = $(this).index();
                //만약 num값과 idx값이 같다면
                if (num == idx) {
                    //모든 내용은 안보임
                    $('.content > div').hide();
                    //idx번호에 해당하는 div만 보임
                    $(this).fadeIn();
                }
            });
        });

        //슬라이드
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });


        //팝업갤러리(lightbox)
        var $gallery = new SimpleLightbox('.front a', {

        });

        $('#fullpage').fullpage({
            navigation: true,
            navigationPosition: 'left',
            afterLoad: function (anchorLink, index) {
                if (index === 1 || index === 5) {
                    $('#fp-nav').fadeOut();
                } else {
                    $('#fp-nav').fadeIn();
                }
                if (index == 1) {
                    $('.banner.animated').removeClass('active');
                } else
                if (index == 2) {
                    $('.banner .animated').addClass('active');
                    $('.item .animated').removeClass('active');
                    $('.list .animated').removeClass('active');

                }
            }
        });
    });
});
