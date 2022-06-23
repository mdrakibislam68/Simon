// var header = document.getElementById("nav");
// var li = header.getElementsByClassName("navi");

// for (var i = 0; i < li.length; i++) {
// 	li[i].addEventListener("click", function () {
// 		var current = document.getElementsByClassName("active");
// 		current[0].className = current[0].className.replace("active");
// 		this.className += " active";
// 	});
// }
var header2 = document.getElementById("nav2");
var ul = document.getElementsByClassName("nav-item");

for (var i = 0; i < ul.length; i++) {
	ul[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active2");
		current[0].className = current[0].className.replace("active2");
		this.className += " active2";
	});
}

// typing

// var i = 0;
// var txt = 'rakib';
// var speed = 50;

// function typeWriter() {
// 	if(i< txt.length) {
// 		document.getElementById("#demo").innerHTML += txt.charAt(i);
// 		i++;
// 		setTimeout(typeWriter, speed);

// 	}
// }

// var typed = new Typed(".auto-type", {
// 	strings:["a Freelancer.", "a Photographer." ],
// 	typeSpeed: 150,
// 	backSpeed: 150,
// 	loop: true
// });

// var i=0, text;
// text = "Welcome To DarkCode"

// function typing() {
// 	if (i<text.length) {
// 		document.getElementsByClassName("auto-type").innerHTML += text.charAt(i);
// 		i++;
// 		setTimeout(typing,50);
// 	}
// }
// typing();

// counter

var counter1 = document.querySelector("#counter-1");

let count1 =1;
setInterval(() => {
	if (count1 <= 9) {
		count1++;
		counter1.innerText = count1;
	}
}, 10);

var counter2 = document.querySelector("#counter-2");

let count2 =1;
setInterval(() => {
	if (count2 <= 249) {
		count2++;
		counter2.innerText = count2;
	}
}, 10);

var counter3 = document.querySelector("#counter-3");

let count3 =1;
setInterval(() => {
	if (count3 <= 649) {
		count3++;
		counter3.innerText = count3;
	}
}, 1);

var counter4 = document.querySelector("#counter-4");

let count4 =1;
setInterval(() => {
	if (count4 <= 249) {
		count4++;
		counter4.innerText = count4;
	}
}, 1);




// var header2 = document.getElementById("nav2");
// var ul = document.getElementsByClassName("nav-item");

// for (var i = 0; i < ul.length; i++) {
// 	ul[i].addEventListener("click", function () {
// 		var current = document.getElementsByClassName("active2");
// 		current[0].className = current[0].className.replace("active2");
// 		this.className += " active2";
// 	});
// }


// Reaponsuve Bar 

function down() {
var responsive = document.getElementById("drop-down");
if (responsive.style.display == "block") {
	responsive.style.display = "none";
} else {
	responsive.style.display = "block";
}
}

function up() {
	var responsive = document.getElementById("drop-down");
	if(responsive.style.display == "none") {
		responsive.style.display = "none"
	}else{
		responsive.style.display = "none"
	}
}






const hamburger = document.querySelector( '.container #bar .bar-social .hamburger');
const mobile_menu = document.querySelector('.container  #drop-down ul');
const menu_item = document.querySelectorAll('.container #drop-down ul li a');
const header5 = document.querySelector('#nav ul li');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// document.addEventListener('scroll', () => { 
// 	var scroll_position = window.scrollY;
// 	if (scroll_position > 250) {
// 		header5.style.backgroundColor = '#29323c';
// 	} else {
// 		header5.style.backgroundColor = 'transparent';
// 	}
// });

menu_item.forEach((item)=>{
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
   	mobile_menu.classList.toggle('active');
	});
});





