let home_count = 0;
let guest_count = 0;

function home_btn1(){
    home_count += 1;
    document.getElementById("home-count").textContent = home_count;
    colorUpdate();
}
function home_btn2(){
    home_count += 2;
    document.getElementById("home-count").textContent = home_count;
    colorUpdate();
}
function home_btn3(){
    home_count += 3;
    document.getElementById("home-count").textContent = home_count;
    colorUpdate();
}
function guest_btn1(){
    guest_count += 1;
    document.getElementById("guest-count").textContent = guest_count;
    colorUpdate();
}
function guest_btn2(){
    guest_count += 2;
    document.getElementById("guest-count").textContent = guest_count;
    colorUpdate();
}
function guest_btn3(){
    guest_count += 3;
    document.getElementById("guest-count").textContent = guest_count;
    colorUpdate();
}
function resetBtn(){
    home_count = 0;
    guest_count = 0;
    document.getElementById("home-count").textContent = 0;
    document.getElementById("guest-count").textContent = 0;
    colorUpdate();
}
function colorUpdate(){
    if(home_count > guest_count){
        document.getElementById("home-count").style.color = "green";
        document.getElementById("guest-count").style.color = "red";
    }else if(guest_count > home_count){
        document.getElementById("guest-count").style.color = "green";
        document.getElementById("home-count").style.color = "red";
    }else{
        document.getElementById("home-count").style.color = "#F94F6D";
        document.getElementById("guest-count").style.color = "#F94F6D";
    }
}
