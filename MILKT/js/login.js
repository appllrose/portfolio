function login_check() {
  var uid = document.getElementById("uid");
  var pwd = document.getElementById("pwd");

  if(uid.value==""){
    var err_txt=document.querySelector(".err_id");
    err_txt.textContent="* 아이디를 입력하세요.";
    uid.focus();
    return false;
  };

  if(pwd.value==""){
    var err_txt=document.querySelector(".err_pwd");
    err_txt.textContent="* 비밀번호를 입력하세요.";
    pwd.focus();
    return false;
  };
};
