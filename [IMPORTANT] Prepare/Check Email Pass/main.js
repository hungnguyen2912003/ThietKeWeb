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