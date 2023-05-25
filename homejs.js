/*图片切换*/
var index1 = 0;
var img1_arr = ["homeimg/影视2.jpg","homeimg/影视3.jpg","homeimg/影视4.jpg","homeimg/影视1.jpg"]
var img1 = document.querySelector("div.img-show1 img")

setInterval(function (){
    if(index1 >= img1_arr.length){
        index1 = 0;
    }
    img1.src = img1_arr[index1];
    index1 ++
    },8020)


var index2 = 0;
var img2_arr = ["homeimg/音乐2.jpg","homeimg/音乐3.jpg","homeimg/音乐4.jpg","homeimg/音乐1.jpg"]
var img2 = document.querySelector("div.img-show2 img")

setInterval(function (){
    if(index2 >= img2_arr.length){
        index2 = 0;
    }
    img2.src = img2_arr[index2];
    index2 ++
},8220)


var index3 = 0;
var img3_arr = ["homeimg/书法2.png","homeimg/书法3.jpg","homeimg/书法4.jpg","homeimg/书法1.png"]
var img3 = document.querySelector("div.img-show3 img")

setInterval(function (){
    if(index3 >= img3_arr.length){
        index3 = 0;
    }
    img3.src = img3_arr[index3];
    index3 ++
},8420)


var index4 = 0;
var img4_arr = ["homeimg/美术2.jpg","homeimg/美术3.jpg","homeimg/美术4.jpg","homeimg/美术1.jpg"]
var img4 = document.querySelector("div.img-show4 img")

setInterval(function (){
    if(index4 >= img4_arr.length){
        index4 = 0;
    }
    img4.src = img4_arr[index4];
    index4 ++
},8520)

var index5 = 0;
var img5_arr = ["homeimg/美食2.jpg","homeimg/美食3.jpg","homeimg/美食4.jpg","homeimg/美食1.png"]
var img5 = document.querySelector("div.img-show5 img")

setInterval(function (){
    if(index5 >= img5_arr.length){
        index5 = 0;
    }
    img5.src = img5_arr[index5];
    index5 ++
},8620)

var index6 = 0;
var img6_arr = ["homeimg/动漫2.png","homeimg/动漫3.png","homeimg/动漫4.png","homeimg/动漫1.png"]
var img6 = document.querySelector("div.img-show6 img")

setInterval(function (){
    if(index6 >= img6_arr.length){
        index6 = 0;
    }
    img6.src = img6_arr[index6];
    index6 ++
},8720)

var index7 = 0;
var img7_arr = ["homeimg/书籍2.jpg","homeimg/书籍3.jpg","homeimg/书籍4.jpg","homeimg/书籍1.png"]
var img7 = document.querySelector("div.img-show7 img")

setInterval(function (){
    if(index7 >= img7_arr.length){
        index7 = 0;
    }
    img7.src = img7_arr[index7];
    index7 ++
},8920)

/*方块图片切换*/
var index11 = 0;
var img11_arr = ["homeimg/影视3.jpg","homeimg/影视4.jpg","homeimg/影视1.jpg","homeimg/影视2.jpg"]
var img11 = document.querySelector("div.void-img1 img")

setInterval(function (){

    if(index11 >= img11_arr.length){
        index11 = 0;
    }
    img11.src = img11_arr[index11];
    index11 ++
},8020)

var index21 = 0;
var img21_arr = ["homeimg/音乐3.jpg","homeimg/音乐4.jpg","homeimg/音乐1.jpg","homeimg/音乐2.jpg"]
var img21 = document.querySelector("div.void-img2 img")

setInterval(function (){

    if(index21 >= img21_arr.length){
        index21 = 0;
    }
    img21.src = img21_arr[index21];
    index21 ++
},8220)


var index61 = 0;
var img61_arr = ["homeimg/动漫3.png","homeimg/动漫4.png","homeimg/动漫1.png","homeimg/动漫2.png"]
var img61 = document.querySelector("div.void-img6 img")

setInterval(function (){
    if(index61 >= img61_arr.length){
        index61 = 0;
    }
    img61.src = img61_arr[index61];
    index61 ++
},8720)

var index71 = 0;
var img71_arr = ["homeimg/书籍3.jpg","homeimg/书籍4.jpg","homeimg/书籍1.png","homeimg/书籍2.jpg"]
var img71 = document.querySelector("div.void-img7 img")

setInterval(function (){
    if(index71 >= img71_arr.length){
        index71 = 0;
    }
    img71.src = img71_arr[index71];
    index71 ++
},8920)



/*夜间模式*/
var switchCheckbox = document.getElementById('onoffswitch');

switchCheckbox.addEventListener('change', function() {
    if (this.checked) {
        var body1 = document.body;
        body1.classList.add("dark-mode");
        //
        const nav1s = document.querySelectorAll('.nav1');
        nav1s[0].style.filter = 'invert(1) hue-rotate(270deg)';
        nav1s[1].style.filter = 'invert(1) hue-rotate(270deg)';
    } else {
        var obj = document.body;
        obj.classList.remove("dark-mode")
        const nav1s = document.querySelectorAll('.nav1');
        nav1s[0].style.filter = 'invert(0) hue-rotate(270deg)';
        nav1s[1].style.filter = 'invert(0) hue-rotate(270deg)';
    }
});


//登录后头像与名称切换
    if (!localStorage.getItem('isLogin')) {
    var loginImg = document.createElement('li');
    loginImg.style.float = 'right';
    loginImg.id = 'login_img';
    loginImg.innerHTML = `<a href="login/login.html"><img src="homeimg/用户-圆.png" style="width: 25px;height: 25px;border-radius: 8px"></a>`;
    document.querySelector('ul').appendChild(loginImg);     //未登录时显示的图片

} else if (localStorage.getItem('isLogin') === 'true') {
    let yhtx = document.getElementById("login-tx")
    yhtx.remove();    //移除未登录时的图片

    let user = JSON.parse(localStorage.getItem('user'));
    let username = user.username;
    let userImg = document.createElement('li');
    userImg.style.float = 'right';
    userImg.innerHTML = '<a href="login/login.html"><img src="homeimg/用户头像.jpg" style="width: 25px;height: 25px;border-radius: 20px">'+username;'</a>'
    document.querySelector('ul').appendChild(userImg);    //登录后显示的用户头像与用户名称
}

    //退出账号
    function sign_out(){
        if(localStorage.getItem('isLogin') ==='true'){
            localStorage.removeItem('isLogin');
            location.reload();
        }else {
            alert('你还未登录账号');
        }

    }

