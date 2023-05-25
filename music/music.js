var i = 0; //监测是否播放完毕
var music_all = ['audio/陈奕迅 - 七百年后.mp3','audio/Mr. - 森林.mp3','audio/AGA - 孤雏.mp3','audio/张敬轩 - 樱花树下.mp3','audio/张智霖 - 天梯 (Live).mp3','audio/陈奕迅 - 岁月如歌.mp3','audio/林奕匡 - 高山低谷.mp3','audio/杨千嬅 - 杨千嬅+刘惜君 葡萄成熟时 .mp3'];
var a = document.getElementById('music');
var b = document.getElementById('music_img');
var c = document.getElementById('img1')
var e = document.getElementById('yinbi');
e.style.transition = 'all 1s ease-out'


function checked_music(music){
    this.music = music;
    console.log(music)
    console.log(music_all[music])
    document.getElementById('music_img').src = 'music_img/'+music+'.jpg'

    var pContent = document.getElementById("font"+music).getElementsByTagName("p")[0].innerHTML;
    console.log(pContent);
    document.getElementById('music_font1').innerHTML=pContent

    a.src = music_all[music];
    a.play();

    if(a.play){
        c.src= 'music_img/'+music+'.jpg'
    }

}


var heijiao = document.getElementById("heijiao");
var box = document.getElementById('box');

b.addEventListener("click", function() {
    heijiao.style.display = "block";
    box.style.display= 'none'
});


function back(){
    heijiao.style.display='none'
    box.style.display='flex'
}


var rotateVal = 0 // 旋转角度
var d

function rotate() {
    d = setInterval(function() {
        rotateVal += 1
        c.style.transform = 'rotate(' + rotateVal + 'deg)'
        c.style.transition = '0.1s linear'
    }, 100)
}
a.addEventListener('play', function() {
    rotate();
    e.style.transform='none'

});
a.addEventListener('pause', function() {
    clearInterval(d);
    e.style.transform= 'rotate(-'+30+'deg)'
});
a.addEventListener('ended', function() {
    clearInterval(d);
    e.style.transform= 'rotate(-'+30+'deg)'
});

