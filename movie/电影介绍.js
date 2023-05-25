if(localStorage.getItem("url")){
    let str=JSON.stringify(key);
    localStorage.setItem("key",str);
}else {
    localStorage.clear();
    let str=JSON.stringify(key);
    localStorage.setItem("key",str);
}
const useurl=localStorage.getItem("key");
const u=JSON.parse(useurl)
const showphoto=document.querySelector(".show img")
showphoto.src=u.url1;
const showtext=document.getElementById('text')
showtext.innerHTML=u.text;
// document.body.style.backgroundImage = 'url(' + u.url + ')';