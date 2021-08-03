$(function(){
    //접속기기 가로크기 480이상시 menu영역 보이고, 480이하시 menu영역 숨김
    var winWidth=$(window).width();
    if(winWidth>480){
        //PC, 태블릿 버전
        $('header nav').show();
    }else{
        //모바일 버전
        $('header nav').hide();
    }

    $('.mo_menu').hide();
    $('.sitemap').hide();
    //menu_btn클릭 sitemap 보이기
    $('.menu_btn').click(function(){
        if(winWidth>=1600){
            $('.sitemap').show();
        }else{
            $('.mo_menu').show();
        }
    });
    //close_btn클릭 sitemap 영역 사라짐
    $('.site_close').click(function(){
        $('.sitemap').hide();
    });
    $('.mo_close').click(function(){
        $('.mo_menu').hide();
    });

    //모바일버전 네비게이션 아코디언 메뉴
    $('.mo_nav .sub').hide();
    $('.mo_nav > ul > li').click(function(){
        if($(this).attr('class') != 'active'){                      //active 안되있으면
            $('.mo_nav > ul > li').removeClass('active');           //모든 nav ul li에 active 제거 하고
            $(this).addClass('active');                             //클릭한 메뉴만 active 설정하고
            $('.mo_nav .sub').slideUp();                            //모든 sub메뉴 올리고(숨기고)
            $(this).find('.sub').slideToggle();                     //내가 누른 서브메뉴 보이고
        }else{
            $(this).removeClass('active');                          //클릭메뉴 active 제거
            $(this).find('.sub').slideUp();                         //클릭메뉴 서브메뉴 숨김
        }
    })

    //메인 슬라이드 //메인 슬라이드 //메인 슬라이드 //메인 슬라이드 //메인 슬라이드 //메인 슬라이드
    var num=0;  //인덱스 번호
    var total=$('.photo').length;
    var imgHeight=$('.photo').height();  //왼쪽 이미지 높이 imgHeight 변수에 저장

    if(winWidth>=1600){ //PC버전 //PC버전 //PC버전 //PC버전 //PC버전 //PC버전 //PC버전 //PC버전 //PC버전 //PC버전
        
        //왼쪽 이미지 영역 - 첫번째 이미지 보임
        $('.photo').css('z-index',1);
        $('.p1').css('z-index',5)

        //가운데 이미지 영역 - 첫번째 이미지 보임
        $('.small').hide();
        $('.small:first').show();

        //오른쪽 글자 영역 - 첫번째 글자만 보임
        $('.txt').hide();
        $('.txt:first').show();
        //number(슬라이드 표시자) 첫번째 숫자만 보임
        $('.number a').hide();
        $('.number a:first').show();

        //NEXT버튼을 클릭하면 왼쪽 이미지가 위로 올라옴 //NEXT버튼을 클릭하면 왼쪽 이미지가 위로 올라옴
        $('.next_btn').click(function(){
            //상단바 타이머 초기화
            clearInterval(auto);
            auto=setInterval(movefn,9500);
            barfn();

            //이미지 인덱스번호 1씩 증가시킴
            num++;
            //이미지 인덱스번호 슬라이드개수 보다 크면 초기화
            if(num>=3) {num=0}

            //왼쪽 이미지의 개수만큼 반복
            $('.photo').each(function(){
                //왼쪽 이미지의 인덱스번호 imgNum변수에 저장
                var imgNum=$(this).index();
                //만약 num값과 imgNum값이 같으면
                if(num==imgNum){
                    $('.photo').css('z-index',1)
                    //imgNum 인덱스번호에 해당하는 이미지
                    $(this).css({'top':imgHeight, 'z-index':5});
                    $(this).animate({'top':0},700,'easeOutExpo');
                    $(this).prev().css('z-index',3);
                }
            });

            //가운데 떠다니는 이미지
            $('.small').each(function(){
                //가운데 이미지의 인덱스번호를 centerNum변수에 저장
                var centerNum=$(this).index();
                //만약 num값과 centerNum값이 같다면
                if(num==centerNum){
                    //모든 가운데 이미지 안보임
                    $('.small').fadeOut();
                    $(this).fadeIn();
                }
            })

            //슬라이드 표시자 숫자
            $('.number a').each(function(){
                //숫자(a태그)의 인덱스 번호를 변수로 저장
                var aNum=$(this).index();
                //만약 num값과 aNum값이 같다면
                if(num==aNum){
                    //모든숫자 안보임
                    $('.number a').hide();
                    //현재숫자 보임
                    $(this).show();
                }
            })

            //right_txt영역 글자 애니메이션
            $('.txt').each(function(){
                //txt영역의 인덱스번호를 txtNum변수에 저장
                var txtNum=$(this).index();
                //만약 num값과 txtNum값이 같다면
                if(num==txtNum){
                    $('.txt').fadeOut();
                    $(this).fadeIn();
                }
            })

            
        });

        //PREV버튼을 클릭하면 왼쪽 이미지가 아래로 내려옴 //PREV버튼을 클릭하면 왼쪽 이미지가 아래로 내려옴
        $('.prev_btn').click(function(){
            //상단바 타이머 초기화
            clearInterval(auto);
            auto=setInterval(movefn,9500);
            barfn();

            //이미지 인덱스번호 1씩 감소시킴
            num--;
            //이미지 인덱스번호 슬라이드개수 보다 크면 초기화
            if(num<0) {num=total-1}

            //왼쪽 이미지의 개수만큼 반복
            $('.photo').each(function(){
                //왼쪽 이미지의 인덱스번호 imgNum변수에 저장
                var imgNum=$(this).index();
                //만약 num값과 imgNum값이 같으면
                if(num==imgNum){
                    $('.photo').css('z-index',2)
                    //imgNum 인덱스번호에 해당하는 이미지
                    $(this).css({'top':-imgHeight, 'z-index':5});
                    $(this).animate({'top':0},700,'easeOutExpo');
                    $(this).prev().css('z-index',1);
                    $(this).next().css('z-index',3);
                }
            });
            //가운데 떠다니는 이미지
            $('.small').each(function(){
                //가운데 이미지의 인덱스번호를 centerNum변수에 저장
                var centerNum=$(this).index();
                //만약 num값과 centerNum값이 같다면
                if(num==centerNum){
                    //모든 가운데 이미지 안보임
                    $('.small').fadeOut();
                    $(this).fadeIn();
                }
            })

            //슬라이드 표시자 숫자
            $('.number a').each(function(){
                //숫자(a태그)의 인덱스 번호를 변수로 저장
                var aNum=$(this).index();
                //만약 num값과 aNum값이 같다면
                if(num==aNum){
                    //모든숫자 안보임
                    $('.number a').hide();
                    //현재숫자 보임
                    $(this).show();
                }
            })

            //right_txt영역 글자 애니메이션
            $('.txt').each(function(){
                //txt영역의 인덱스번호를 txtNum변수에 저장
                var txtNum=$(this).index();
                //만약 num값과 txtNum값이 같다면
                if(num==txtNum){
                    $('.txt').fadeOut();
                    $(this).fadeIn();
                }
            })

            

        });

        //슬라이드 표시자 숫자 클릭시 next 효과
        $('.number').click(function(){
            //상단바 타이머 초기화
            clearInterval(auto);
            auto=setInterval(movefn,9500);
            barfn();

            //이미지 인덱스번호 1씩 증가시킴
            num++;
            //이미지 인덱스번호 슬라이드개수 보다 크면 초기화
            if(num>=3) {num=0}

            //왼쪽 이미지의 개수만큼 반복
            $('.photo').each(function(){
                //왼쪽 이미지의 인덱스번호 imgNum변수에 저장
                var imgNum=$(this).index();
                //만약 num값과 imgNum값이 같으면
                if(num==imgNum){
                    $('.photo').css('z-index',1)
                    //imgNum 인덱스번호에 해당하는 이미지
                    $(this).css({'top':imgHeight, 'z-index':5});
                    $(this).animate({'top':0},700,'easeOutExpo');
                    $(this).prev().css('z-index',3);
                }
            });

            //가운데 떠다니는 이미지
            $('.small').each(function(){
                //가운데 이미지의 인덱스번호를 centerNum변수에 저장
                var centerNum=$(this).index();
                //만약 num값과 centerNum값이 같다면
                if(num==centerNum){
                    //모든 가운데 이미지 안보임
                    $('.small').fadeOut();
                    $(this).fadeIn();
                }
            })

            //슬라이드 표시자 숫자
            $('.number a').each(function(){
                //숫자(a태그)의 인덱스 번호를 변수로 저장
                var aNum=$(this).index();
                //만약 num값과 aNum값이 같다면
                if(num==aNum){
                    //모든숫자 안보임
                    $('.number a').hide();
                    //현재숫자 보임
                    $(this).show();
                }
            })

            //right_txt영역 글자 애니메이션
            $('.txt').each(function(){
                //txt영역의 인덱스번호를 txtNum변수에 저장
                var txtNum=$(this).index();
                //만약 num값과 txtNum값이 같다면
                if(num==txtNum){
                    $('.txt').fadeOut();
                    $(this).fadeIn();
                }
            })

            
        });

        

        //슬라이드 자동 시스템
        var auto=setInterval(movefn, 9500);  //9.5초 타이머 설정

        //함수선언 
        function movefn(){
            $('.next_btn').trigger('click');
            barfn();
        }

        //함수 선언
        function barfn(){
            //slide_bar 안의 자식 객체 bar의 가로길이 늘림으로 진행시간 디스플레이
            $('.bar').stop();
            $('.bar').css('width',0);
            //slide_bar 안의 자식 객체 bar 가로길이 늘리기
            $('.bar').animate({'width':'100%'},9500)

        }

        //함수 호출
        barfn();



        //.box_btn클릭시 오른쪽 화면으로 이동
        var sw=0;
        $('.box_btn').click(function(e){
            e.preventDefault();
            //만약 sw값이 0이면
            if(sw==0){
                sw=1;
                $('.box_btn').css('background-position','left center');
                $('.box ul').stop().animate({left:'-100vw'},700,'easeInOutExpo');
            }else{
                sw=0;
                $('.box_btn').css('background-position','right center');
                $('.box ul').stop().animate({left:0},700,'easeInOutExpo');
            }
        })


        //fullpage
        $('#fullpage').fullpage({
            navigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['MAIN','FEATURED','ETC','BEGINNER','GALLERY'],
            showActiveTooltip: true,
            afterLoad:function(anchorLink, index, direction){
                if(index==3 || index==4){
                    $('header nav > ul > li > a').addClass('active');
                    $('#fp-nav ul li .fp-tooltip').addClass('active');
                }
                if(index==1 || index==2 || index==5){
                $('header nav > ul > li > a').removeClass('active');
                $('#fp-nav ul li .fp-tooltip').removeClass('active');
                }
            },
            onLeave:function(index, nextIndex, direction){
                if(index==5 && nextIndex==6){
                    $('header .menu').fadeOut();
                    $('header .main_icon').fadeOut();
                }else{
                    $('header .menu').fadeIn();
                    $('header .main_icon').fadeIn();
                }
            }
        });

    }else{
        //태블릿, 모바일버전
        var mo_num=0;
        var mo_total=$('.photo').length;
        var imgWidth=$('.photo').width();
        $('.photo').show();
        $('.small').show();
        //number(슬라이드 표시자) 첫번째 숫자만 보임
        $('.number a').hide();
        $('.number a:first').show();
        //오른쪽 글자 영역 - 첫번째 글자만 보임
        $('.txt').hide();
        $('.txt:first').show();
        

        $('.photo:last-child').prependTo('.left_img');
        $('.small:last-child').prependTo('.center_img');

        $('.left_img').css('left',-imgWidth);
        $('.center_img').css('left',-imgWidth);

        //next 버튼 next 버튼 next 버튼 next 버튼 next 버튼 next 버튼 next 버튼 next 버튼 next 버튼
        $('.next_btn').click(function(){

            mo_num++;
            if(mo_num>=3) {mo_num=0}

            $('.left_img').animate({left:'-='+imgWidth},700,'easeOutExpo',
            function(){
                $('.photo:first-child').appendTo('.left_img');
                $('.left_img').css('left',-imgWidth);
            });
            
            $('.center_img').animate({left:'-='+imgWidth},700,'easeOutExpo',
            function(){
                $('.small:first-child').appendTo('.center_img');
                $('.center_img').css('left',-imgWidth);
            });

            
            //슬라이드 표시자 숫자
            $('.number a').each(function(){
                //숫자(a태그)의 인덱스 번호를 변수로 저장
                var aNum=$(this).index();
                //만약 num값과 aNum값이 같다면
                if(mo_num==aNum){
                    //모든숫자 안보임
                    $('.number a').hide();
                    //현재숫자 보임
                    $(this).show();
                }
            })

            //right_txt영역 글자 애니메이션
            $('.txt').each(function(){
                //txt영역의 인덱스번호를 txtNum변수에 저장
                var txtNum=$(this).index();
                //만약 num값과 txtNum값이 같다면
                if(mo_num==txtNum){
                    $('.txt').fadeOut();
                    $(this).fadeIn();
                }
            })
        });

        //prev 버튼 prev 버튼 prev 버튼 prev 버튼 prev 버튼 prev 버튼 prev 버튼 prev 버튼 prev 버튼
        $('.prev_btn').click(function(){

            mo_num--;
            if(mo_num<0) {mo_num=mo_total-1;}

            $('.left_img').animate({left:'+='+imgWidth},700,'easeOutExpo',
            function(){
                $('.photo:last-child').prependTo('.left_img');
                $('.left_img').css('left',-imgWidth);
            });
            
            $('.center_img').animate({left:'+='+imgWidth},700,'easeOutExpo',
            function(){
                $('.small:last-child').prependTo('.center_img');
                $('.center_img').css('left',-imgWidth);
            });

            
            //슬라이드 표시자 숫자
            $('.number a').each(function(){
                //숫자(a태그)의 인덱스 번호를 변수로 저장
                var aNum=$(this).index();
                //만약 num값과 aNum값이 같다면
                if(mo_num==aNum){
                    //모든숫자 안보임
                    $('.number a').hide();
                    //현재숫자 보임
                    $(this).show();
                }
            })

            //right_txt영역 글자 애니메이션
            $('.txt').each(function(){
                //txt영역의 인덱스번호를 txtNum변수에 저장
                var txtNum=$(this).index();
                //만약 num값과 txtNum값이 같다면
                if(mo_num==txtNum){
                    $('.txt').fadeOut();
                    $(this).fadeIn();
                }
            })
        });

        //숫자 버튼 숫자 버튼 숫자 버튼 숫자 버튼 숫자 버튼 숫자 버튼 숫자 버튼 숫자 버튼 숫자 버튼
        $('.number').click(function(){

            mo_num++;
            if(mo_num>=3) {mo_num=0}

            $('.left_img').animate({left:'-='+imgWidth},700,'easeOutExpo',
            function(){
                $('.photo:first-child').appendTo('.left_img');
                $('.left_img').css('left',-imgWidth);
            });
            
            $('.center_img').animate({left:'-='+imgWidth},700,'easeOutExpo',
            function(){
                $('.small:first-child').appendTo('.center_img');
                $('.center_img').css('left',-imgWidth);
            });

            
            //슬라이드 표시자 숫자
            $('.number a').each(function(){
                //숫자(a태그)의 인덱스 번호를 변수로 저장
                var aNum=$(this).index();
                //만약 num값과 aNum값이 같다면
                if(mo_num==aNum){
                    //모든숫자 안보임
                    $('.number a').hide();
                    //현재숫자 보임
                    $(this).show();
                }
            })

            //right_txt영역 글자 애니메이션
            $('.txt').each(function(){
                //txt영역의 인덱스번호를 txtNum변수에 저장
                var txtNum=$(this).index();
                //만약 num값과 txtNum값이 같다면
                if(mo_num==txtNum){
                    $('.txt').fadeOut();
                    $(this).fadeIn();
                }
            })
        });

        //슬라이드 자동 시스템
        var auto=setInterval(movefn, 5000);  //5초 타이머 설정

        //함수선언 
        function movefn(){
            $('.next_btn').trigger('click');
        }

        //.box_btn클릭시 오른쪽 화면으로 이동
        var sw=0;
        $('.box_btn').click(function(e){
            e.preventDefault();
            //만약 sw값이 0이면
            if(sw==0){
                sw=1;
                $('.box_btn').css('background-position','left center');
                $('.box ul').stop().animate({left:'-100vw'},700,'easeInOutExpo');
            }else{
                sw=0;
                $('.box_btn').css('background-position','right center');
                $('.box ul').stop().animate({left:0},700,'easeInOutExpo');
            }
        })
    }
})