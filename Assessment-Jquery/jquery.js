let image_con = document.querySelectorAll(".slider");

let count = 0;

function re() {
  for (let i = 0; i < image_con.length; i++) {
    image_con[i].style.display = "none";
  }
  if (count >= image_con.length) {
    count = 0;
  }
  image_con[count].style.display = "block";
  count++;
}
re();

function n1() {
  for (let i = 0; i < image_con.length; i++) {
    image_con[i].style.display = "none";
  }
  if (count >= image_con.length) {
    count = 0;
  }
  image_con[count].style.display = "block";
  count++;
}
n1();
function n2() {
  for (let i = 0; i < image_con.length; i++) {
    image_con[i].style.display = "none";
  }
  if (count >= image_con.length) {
    count = 0;
  }
  image_con[count].style.display = "block";
  count++;
}
n2();
function n3() {
  for (let i = 0; i < image_con.length; i++) {
    image_con[i].style.display = "none";
  }
  if (count >= image_con.length) {
    count = 0;
  }
  image_con[count].style.display = "block";
  count++;
}
n3();
function n4() {
  for (let i = 0; i < image_con.length; i++) {
    image_con[i].style.display = "none";
  }
  if (count >= image_con.length) {
    count = 0;
  }
  image_con[count].style.display = "block";
  count++;
}
n4();
re();
function le() {
  for (let i = 0; i < image_con.length; i++) {
    image_con[i].style.display = "none";
  }
  if (count >= image_con.length) {
    count = 0;
  }
  image_con[count].style.display = "block";
  count++;
}
le();
setInterval(le, 5000);