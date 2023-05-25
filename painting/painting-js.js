var index = 0;
var img_index = 16;

function more_img(){
    var box = document.getElementById("box");
    if (index < 3){
        index++
        console.log(index)
        var img_arr = []
        for(var i=0; i<16;i++){
            img_arr.push("<div class=\"item\"><img  src=\"painting-img/"+img_index+".jpg\" alt=\"\" />\</div>")
            img_index++
        }
        console.log(img_arr)
        box.insertAdjacentHTML('beforeend', img_arr.join(''));
    }

    else {
        alert('你已加载了全部图片');
    }
}