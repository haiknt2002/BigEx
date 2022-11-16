function check_Ten_dang_ki(){
    var username = document.getElementById("username");
    return "^(?=[a-zA-Z0-9._]{8,20}$)".test(username);
}

function check_passwd(){
    var p1 = document.getElementById("pwd1");
    var p2 = document.getElementById("pwd2");
    return p1==p2;
}

function submit(){
    if (!check_Ten_dang_ki()){
        alert("Ten dang ki ko hop le!");
        return false;
    }
    if (!check_passwd()){
        alert("Mat khau ko khop");
        return false;
    }
    alert("Dang ki thanh cong!");
    return true;

}