document.addEventListener('DOMContentLoaded', () => setInterval( function() {
    broImage();
    ladyImage();
    clockImage();
  }, 10000));
  

    function broImage() {
      bro.alt == "set" ? bro.src = "./img/brother-back.jpg" : bro.src = "./img/brother-front.jpg";
      bro.alt == "set" ? bro.alt = "unset" : bro.alt = "set";

      if(bro.alt == "set")
      {
        bro.classList.remove("unset");
        bro.classList.add("set");
      } else {
        bro.classList.remove("set");
        bro.classList.add("unset");
      }
      //console.log(bro.src);

    }

    function ladyImage() {
      lady.alt == "set" ? lady.src = "./img/abs-card1.jpg" : lady.src = "./img/receipt1.jpg";
      lady.alt == "set" ? lady.alt = "unset" : lady.alt = "set";

      if(lady.alt == "set")
      {
        lady.classList.remove("unset");
        lady.classList.add("set");
      } else {
        lady.classList.remove("set");
        lady.classList.add("unset");
      }
             
    }


    function clockImage() {
      clock.alt == "set" ? clock.src = "./img/celebration-front1.jpg" : clock.src = "./img/celebration-back.jpg";
      clock.alt == "set" ? clock.alt = "unset" : clock.alt = "set";

      if(clock.alt == "set")
      {
        clock.classList.remove("unset");
        clock.classList.add("set");
      } else {
        clock.classList.remove("set");
        clock.classList.add("unset");
      }

    }