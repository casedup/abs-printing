


photos = {
    1: 'url(/img/small-bg.jpg)',
    2: 'url(/img/lady-orbit)',
    3: 'url(/img/bg-clock.jpg)'
};
function myFunction() {
    setTimeout(
        function()
            { 
                setInterval(function()  {
                    for (let index = 1; index < 5; index++) {
                        document.body.style.backgroundRepeat = "no-repeat";
                        document.body.style.backgroundPosition = "center center";
                        document.body.style.backgroundAttachment = "fixed";
                        document.body.style.backgroundSize = "cover";
                        document.body.style.backgroundSize = "100% 100%";
                        document.body.style.backgroundImage = photos[index];
                        console.log(photos[index]);
                    }
                }, 10000); 
                console.log("help!!");
            }, 5000);
  }

  myFunction();

//   background-image:  linear-gradient(to top, rgba(191, 219, 247, 0.1),rgba(2, 43, 58, .05)), url(/img/abs.png) ;
//   background-repeat: no-repeat;
//   background-position: center center;
//   background-attachment: fixed;
//   background-size: 100% 100%;
//   background-size: cover;