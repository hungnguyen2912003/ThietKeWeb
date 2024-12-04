const   forms = document.querySelector(".forms"),
        pwShowHide = document.querySelectorAll(".eye-icon"),
        links = document.querySelectorAll(".link"),
        registerLink = document.querySelector(".signup-link"),
        loginLink = document.querySelector(".login-link"),
        username = document.querySelector(".username"),
        password = document.querySelector(".password");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type == "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
    })
})

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})

registerLink.addEventListener('click', () => {
    forms.classList.add('active');
})

loginLink.addEventListener('click', () => {
    forms.classList.remove('active');
})

function login(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    if(username == "" || password == ""){
        alert("Vui lòng cung cấp thông tin!");
    }
    else{
        alert("Đăng nhập thành công!");
    }
}

function signup(){
    var usernameinput = document.getElementById("username-sgup").value;
    var emailinput = document.getElementById("email-sgup").value;
    var pwdinput = document.getElementById("pwd-sgup").value;
    var pwdcofirminput = document.getElementById("cofirm-pwd-sgup").value;
    if(usernameinput == "" || emailinput == "" || pwdinput == "" || pwdcofirminput == "" ){
        alert("Không được bỏ trống thông tin nào!");
    }
    else{
        if(usernameinput.length < 4){
            alert("Tên đăng nhập phải dài tối thiểu 4 ký tự!")
            return;
        }
        else if(!emailinput.includes('@') || !emailinput.includes('.com')){
            alert("Email chưa đúng cú pháp!")
            return;
        }
        else if(pwdinput.length < 8){
            alert("Mật khẩu phải dài tối thiểu 8 ký tự!")
            return;
        }
        else if(pwdinput != pwdcofirminput){
            alert("Mật khẩu xác nhận không trùng khớp với mật khẩu")
            return;
        }
        alert("Đăng ký thành công! Bạn có thể đăng nhập ngay");
    }
}
