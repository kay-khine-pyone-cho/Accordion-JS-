var getacctitle = document.getElementsByClassName("acctitle");
console.log(getacctitle); // html collection
var getacccontent = document.getElementsByClassName("acccontent");
console.log(getacccontent); //html collection
var getactive = document.getElementsByClassName("active");

for (var x = 0; x < getacctitle.length; x++) {
  getacctitle[x].addEventListener("click", function (e) {
    // console.log(e.target);
    // console.log(this);
    this.classList.toggle("active");
    var getcontent = this.nextElementSibling;
    // console.log(getcontent);
    if (getcontent.style.height) {
      getcontent.style.height = null; //beware cannot set 0
    } else {
      //   console.log(getcontent.scrollHeight);
      getcontent.style.height = getcontent.scrollHeight + "px";
    }
  });

  if (getacctitle[x].classList.contains("active")) {
    console.log(getacccontent[x]);
    getacccontent[x].style.height = getacccontent[x].scrollHeight + "px";
  }
}
