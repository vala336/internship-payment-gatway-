function f1() {
    var phone = document.getElementById("note").Value;
    var money = document.getElementById("money").Value;
    console.write.Value;
    if (phone.length == 10) {
        alert("are you sure you want to send " + money);

        return true;
    }
    else {
        alert("number must be of lenghth 10");
        return false;
    }
}
function click(first, next) {
    if (first.value.length) {
        document.getElementById(next).focus();
    }
}