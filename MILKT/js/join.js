// 유효성 검사
function form_check(){
  var uname = document.getElementById("uname");
  var uid = document.getElementById("uid");
  var pwd = document.getElementById("pwd");
  var repwd = document.getElementById("repwd");
  var mobile = document.getElementById("mobile");
  var email = document.getElementById("email");
  var birth = document.getElementById("birth");
  var gender1 = document.getElementById("gender1");
  var gender2 = document.getElementById("gender2");
  var parentType = document.getElementById("parentType");
  var postalCode = document.getElementById("postalCode");
  // var addr1 = document.getElementById("addr1");
  var addr2 = document.getElementById("addr2");
  var child = document.getElementById("child");
  var agree1 = document.getElementById("agree1");
  var agree2 = document.getElementById("agree2");

  if(uname.value==""){
    // alert("이름을 입력하세요.");
    var err_txt = document.querySelector(".err_name");
    err_txt.textContent = "이름을 입력하세요.";
    uname.focus();
    return false;
  };
  var uname_len = uname.value.length;
  if(2 > uname_len || 5 < uname_len){
    // alert("이름을 입력하세요.");
    var err_txt = document.querySelector(".err_name");
    err_txt.textContent = "이름은 2자 이상 5자 이하로 입력하세요.";
    uname.focus();
    return false;
  };
  if(uid.value==""){
    // alert("이름을 입력하세요.");
    var err_txt = document.querySelector(".err_id");
    err_txt.textContent = "아이디를 입력하세요.";
    uid.focus();
    return false;
  };
  if(pwd.value==""){
    // alert("비밀번호를 입력하세요.");
    var err_txt = document.querySelector(".err_pwd");
    err_txt.textContent = "비밀번호를 입력하세요.";
    pwd.focus();
    return false;
  };
  var pwd_len = pwd.value.length;
  if (4 > pwd_len || 8 < pwd_len){
    var err_txt = document.querySelector(".err_pwd");
    err_txt.textContent = "비밀번호는 4~8글자만 입력할 수 있습니다.";
    pwd.focus();
    return false;
  };
  if(repwd.value==""){
    // alert("비밀번호를 확인하세요.");
    var err_txt = document.querySelector(".err_repwd");
    err_txt.textContent = "비밀번호를 확인하세요.";
    repwd.focus();
    return false;
  };
  if(pwd.value != repwd.value){
    var err_txt = document.querySelector(".err_repwd");
    err_txt.textContent = "비밀번호가 일치하지 않습니다.";
    repwd.focus();
    return false;
  };
  if(mobile.value==""){
    // alert("연락처를 입력하세요.");
    var err_txt = document.querySelector(".err_mobile");
    err_txt.textContent = "전화번호를 입력하세요.";
    mobile.focus();
    return false;
  };
  var mobile = /^[0-9]{10,11}$/g;
  if(!mobile.test(mobile.value)){
    var err_txt = document.querySelector(".err_mobile");
    err_txt.textContent = "전화번호는 숫자만 입력할 수 있습니다.";
    // mobile.focus();
    return false;
  };
  if(email.value==""){
    // alert("이메일을 입력하세요.");
    var err_txt = document.querySelector(".err_email");
    err_txt.textContent = "이메일을 입력하세요.";
    email.focus();
    return false;
  };
  var email = /^[a-z0-9._+-]+@[a-z0-9-]+\.[a-z.]+$/g;
  if(!email.test(email.value)){
    // alert("이메일을 입력하세요.");
    // var err_txt = document.querySelector(".err_email");
    err_txt.textContent = "이메일을 입력하세요.";
    email.focus();
    return false;
  };
  if(birth.value==""){
    // alert("생년월일을 입력하세요.");
    var err_txt = document.querySelector(".err_birth");
    err_txt.textContent = "생년월일을 입력하세요.";
    birth.focus();
    return false;
  };
  if(!gender1.checked||!gender2.checked){
    var err_txt = document.querySelector(".err_gender");
    err_txt.textContent = "성별을 선택해주세요.";
    gender1.focus();
    return false;
  }
  // if(!gender.checked){
  //   var err_txt = document.querySelector(".err_gender");
  //   err_txt.textContent = "성별을 선택해주세요.";
  //   gender.focus();
  //   return false;
  // }
  if(!parentType.value){
    var err_txt = document.querySelector(".err_parentType");
    err_txt.textContent = "학부모 유형을 선택해주세요.";
    parentType.focus();
    return false;
  };
  if(postalCode.value==""){
    // alert("주소를 입력하세요.");
    var err_txt = document.querySelector(".err_postalCode");
    err_txt.textContent = "주소를 검색하세요.";
    postalCode.focus();
    return false;
  };
  if(addr2.value==""){
    // alert("주소를 입력하세요.");
    var err_txt = document.querySelector(".err_addr2");
    err_txt.textContent = "상세주소를 입력하세요.";
    addr2.focus();
    return false;
  };






  // if(!agree.checked){
  //   // alert("약관 동의가 필요합니다.");
  //   var err_txt = document.querySelector(".err_addr2");
  //   err_txt.textContent = "필수 동의 약관을 확인하세요.";
  //   agree.foucs();
  //   return false;
  // };

  
  if(!agree1.checked && !agree2.cheched){
    // alert("약관 동의가 필요합니다.");
    var err_txt = document.querySelector(".err_agree1");
    err_txt.textContent = "필수 동의 약관을 확인하세요.";
    agree1.foucs();
    return false;
  };













};



// 아이디 중복 확인
function id_search() {
  // 매개변수 - window.open("팝업될 문서 경로","팝업될 문서 이름","옵션");            
  window.open("search_id.html","","width=400, height=200, left=50, top=50");
};


// 주소 검색
function addr_search() {
  window.open("search_addr.html","","width=400, height=200, left=50, top=50");
};
