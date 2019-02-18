
let audio=$("audio")[0];
audio.play();
let flag=1;
$(".music").on("tap",muisc);
function muisc(){
    if(flag==1){
        audio.pause();
        $(".music").css("animation","none");
        flag=0;
    }else{
        audio.play();
        $(".music").css("animation","move 1s linear infinite");
        flag=1;
    }
}


/* 切换页面 */ 
function changePage() {
    document.ontouchstart = function (e) {
        e = e || window.event;
        this.startY = e.touches[0].pageY;
    };
    document.addEventListener('touchmove', fn, {passive:false});
    function fn(e) {
        e = e || window.event;
        e.preventDefault();
        e.returnValue = false;
        let sections = document.getElementsByTagName('section');
        let str = '';
        e.path.forEach(item => {
            if (item.tagName && /section/.test(item.tagName.toLowerCase())) {
                str = item.className;
                [...sections].forEach((item,index) => {
                    if (item.className == str) {
                        if (e.touches[0].pageY - this.startY <= -30 && index < sections.length-1) {
                            // 上一页
                            item.style.display = 'none';
                            sections[index+1].style.display = 'block';
                            flicker();
                            animation(sections[index+1]);
                        }else if (e.touches[0].pageY - this.startY >= 30 && index >= 1) {
                            // 下一页
                            item.style.display = 'none';
                            sections[index-1].style.display = 'block';
                            if (index > 1) {
                                flicker()
                                animation(sections[index-1]);
                            }
                            
                        }
                    }
                })
            }
        });
    }
}
changePage();