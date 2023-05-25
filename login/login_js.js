//注册
function register() {
    const form = document.getElementById('register-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // 阻止表单默认提交行为

        var a = document.getElementById("username").value;
        var b = document.getElementById("password").value;
        var c = document.getElementById("email").value;
        // 判断用户名是否都是数字
        var reg1 = /^\d+$/;
        // 判断密码是否由字母和数字组成
        var reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;

        if (!a || !b || !c) {
            alert('请填写完整的注册信息')
        } else if (reg1.test(a)) {
            alert('用户名不能全为数字');
        } else if (!reg2.test(b)) {
            alert('密码必须由字母和数字组成，且长度在6-16位之间');
        } else {
            var user = {
                username: a,
                password: b,
                email: c
            };
            localStorage.setItem('user', JSON.stringify(user));
            
            
            setTimeout(function() {alert('注册成功，请登录');
            window.location.href = 'login.html';}, 1000);

        }
    });
}


//登录
function login() {
      const form = document.getElementById('login_form');
      form.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表单默认提交行为
      
        const email = document.getElementById("e-mail").value;
        const password = document.getElementById("password").value;
        var user = JSON.parse(localStorage.getItem('user'));
        const use_email = user.email;
        const use_password = user.password
        console.log(use_email);
        console.log(use_password)
        
        if(!email || !password) {
          alert('登录邮箱或密码不能为空');
        } else if(email == use_email && password === use_password) {
          window.location.href = '../Find/Find.html';
          localStorage.setItem('isLogin', 'true');
        } else {
          alert('请输入正确的账号或密码');
        }
      });
    };
   
function checkLoginStatus() {
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin === 'true') {
        // 如果已经登录，则跳转到其他页面
        window.location.href = '../window_index.html';
        alert("账号已经登录")
    }
}
    
//找回密码
function recover(){
    const form = document.getElementById('recove-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // 阻止表单默认提交行为

            var a = document.getElementById("username").value;
            var b = document.getElementById("email").value;
            var c = document.getElementById("password1").value;
            var d = document.getElementById("password2").value;

            if (!a || !b || !c || !d) {
                alert("请输入完整的信息");
                return;
            }

            const user = JSON.parse(localStorage.getItem('user'));
            const use_email = user.email;
            const use_username = user.username;
            const use_password = user.password;

            if (a !== use_username || b !== use_email) {
                alert("输入正确的用户名或邮箱");
                return;
            } else if (c !== d) {
                alert("两次输入的密码不一致");
                return;
            } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(c)) {
                alert("密码必须包含数字、字母，且长度在6-16之间");
                return;
            } else {
                user.password = c;
                localStorage.setItem('user', JSON.stringify(user));
                setTimeout(function (){
                    alert("密码修改成功");
                }, 1000);
            }
    });
}