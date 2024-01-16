function togglemenu() {
  var x=document.getElementById("leftsidebar");
  if(window.matchMedia("(max-width:767px)").matches){
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    console.log(x);
  }
  else{
    if (x.style.display === "none") {
      x.style.display = "block";
      console.log("hello")
    }
    x.style.display = "block";
  }

}

// const mediasidebar = window.matchMedia("(max-width: 767px)");

// mediasidebar.onchange = (e) => {
//   if (e.matches) {
//     togglemenu();
//   } else {
//     var x=document.getElementById("leftsidebar");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     }
//     console.log("fail")
//   }
// };

// function togglemenu() {
//   var x=document.getElementById("leftsidebar");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
//   console.log("sucess")
// }


const actualBtn = document.getElementById('actual-btn');

const fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name;
})