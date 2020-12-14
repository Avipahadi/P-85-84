var canvas = document.getElementById("canva");
var ctx = canvas.getContext("2d");

var back_img = "racing.jpg";

var car_img_1 = "car.png";
var car_1_height = 70;
var car_1_width = 120;
var car_1_x = 10;
var car_1_y = 10;

var car_img_2 = "car.png";
var car_2_height = 70;
var car_2_width = 120;
var car_2_x = 10;
var car_2_y = 100;

function add() {
    background_img = new Image();
    background_img.onload = background_upload;
    background_img.src = back_img;

    carr_img_1 = new Image();
    carr_img_1.onload = carrr;
    carr_img_1.src = car_img_1;

    carr_img_2 = new Image();
    carr_img_2.onload = carrr;
    carr_img_2.src = car_img_2;
}

function background_upload() {
    ctx.drawImage(background_img, 0, 0, 830, 600);
}

function carrr() {
    ctx.drawImage(carr_img_1, car_1_x, car_1_y, car_1_width, car_1_height);
    ctx.drawImage(carr_img_2, car_2_x, car_2_y, car_2_width, car_2_height);
}

window.addEventListener("keydown", keyisdown);

function keyisdown(e) {
    key = e.keyCode;
    if (key == "37") {
        left_c_1();
        console.log("left");
    }
    if (key == "38") {
        up_c_1();
        console.log("up");
    }
    if (key == "39") {
        right_c_1();
        console.log("right");
    }
    if (key == "40") {
        down_c_1();
        console.log("down");
    }
    if (key == "65") {
        left_c_2();
        console.log("down");
    }
    if (key == "68") {
        right_c_2();
        console.log("down");
    }
    if (key == "87") {
        up_c_2();
        console.log("down");
    }
    if (key == "83") {
        down_c_2();
        console.log("down");
    }
}

function up_c_1() {
    if (car_1_y >= 0) {
        car_1_y = car_1_y - 10;
        console.log("When up arrow is pressed, x = " + car_1_x + " | y = " + car_1_y);
        background_upload();
        carrr();
        check_c_1();
    }
}

function down_c_1() {
    if (car_1_y <= 500) {
        car_1_y = car_1_y + 10;
        console.log("When down arrow is pressed, x = " + car_1_x + " | y = " + car_1_y);
        background_upload();
        carrr();
        check_c_1();
        if (car_1_y - car_2_y == 5) {
            document.getElementById("g_s").innerHTML = "CRASH";
        }
    }
}

function left_c_1() {
    if (car_1_x >= 0) {
        car_1_x = car_1_x - 10;
        console.log("When left arrow is pressed, x = " + car_1_x + " | y = " + car_1_y);
        background_upload();
        carrr();
        check_c_1();
    }
}

function right_c_1() {
    if (car_1_x <= 700) {
        car_1_x = car_1_x + 10;
        console.log("When right arrow is pressed, x = " + car_1_x + " | y = " + car_1_y);
        background_upload();
        carrr();
        check_c_1();
    }
}

function up_c_2() {
    if (car_2_y >= 0) {
        car_2_y = car_2_y - 10;
        console.log("When up arrow is pressed, x = " + car_2_x + " | y = " + car_2_y);
        background_upload();
        carrr();
        check_c_2();
    }
}

function down_c_2() {
    if (car_2_y <= 500) {
        car_2_y = car_2_y + 10;
        console.log("When down arrow is pressed, x = " + car_2_x + " | y = " + car_2_y);
        background_upload();
        carrr();
        check_c_2();
    }
}

function left_c_2() {
    if (car_2_x >= 0) {
        car_2_x = car_2_x - 10;
        console.log("When left arrow is pressed, x = " + car_2_x + " | y = " + car_2_y);
        background_upload();
        carrr();
        check_c_2();
    }
}

function right_c_2() {
    if (car_2_x <= 700) {
        car_2_x = car_2_x + 10;
        console.log("When right arrow is pressed, x = " + car_2_x + " | y = " + car_2_y);
        background_upload();
        carrr();
        check_c_2();
    }
}

function check_c_1() {

    if (car_1_x > 700) {
        if (document.getElementById("g_s").innerHTML == "CAR 2 WON!!") {
            console.log("CAR 2 WON!!");
            document.getElementById("g_s").innerHTML = "CAR 2 WON!!";
        } else {
            console.log("CAR 1 WON!!");
            document.getElementById("g_s").innerHTML = "CAR 1 WON!!";
        }
    }
}

function check_c_2() {

    if (car_2_x > 700) {
        if (document.getElementById("g_s").innerHTML == "CAR 1 WON!!") {
            console.log("CAR 1 WON!!");
            document.getElementById("g_s").innerHTML = "CAR 1 WON!!";
        } else {
            console.log("CAR 2 WON!!");
            document.getElementById("g_s").innerHTML = "CAR 2 WON!!";
        }
    }
}