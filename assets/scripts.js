let broImg = bro.getAttribute("brotherImage");
let ladyImg = lady.getAttribute("ladyImage");
let clockImg = clock.getAttribute("clockImage");
document.addEventListener('DOMContentLoaded', () => setInterval( async function() {
    await broImage();
    await ladyImage();
    await clockImage();
  }, 10000));
  

    function broImage() {
      if(broImg == "set")
      {
        bro.src = "./img/brother-front.jpg";
        broImg = "unset";
        bro.classList.remove("unset");
        bro.classList.add("set");
      } else {
        bro.src = "./img/brother-back.jpg"
        broImg = "set"
        bro.classList.remove("set");
        bro.classList.add("unset");
      }
      //console.log(bro.src);

    }

    function ladyImage() {

      if(ladyImg == "set")
      {
        lady.src = "./img/abs-card1.jpg";
        ladyImg = "unset";
        lady.classList.remove("unset");
        lady.classList.add("set");
      } else {
        lady.src = "./img/receipt1.jpg";
        ladyImg = "set";
        lady.classList.remove("set");
        lady.classList.add("unset");
      }
             
    }


    function clockImage() {
      if(clockImg == "set")
      {
        clock.src = "./img/celebration-front1.jpg";
        clockImg = "unset";
        clock.classList.remove("unset");
        clock.classList.add("set");
      } else {
        clock.src = "./img/celebration-back.jpg";
        clockImg = "set";
        clock.classList.remove("set");
        clock.classList.add("unset");
      }

    }