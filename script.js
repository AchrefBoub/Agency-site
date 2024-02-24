// check if there's local storage color option
let maincolors = localStorage.getItem("color_option");

if (maincolors !== null){
  document.documentElement.style.setProperty("--main--color", localStorage.getItem("color_option"));

  // remove active class from All colors list item
  document.querySelectorAll(".colors-list li").forEach(Element => {
    Element.classList.remove("active");

    // add active class on Element with data colo === local storage item
    if (Element.dataset.color === localStorage.getItem("color_option") ){
      // add active class
      Element.classList.add('active');

    }
    

  });

  


}

// random background option
let backgroundOption = true;

// variable to control the background interval
let backgroundInterval;

// check if there's local storage random background item
let backgroundLocalItem = localStorage.getItem("background_option");

// check if random background local storage is not empty
if (backgroundLocalItem !== null){
  
  

  if (backgroundLocalItem === 'true'){
    backgroundOption = true;
  }else{
    backgroundOption = false;
  }
  // Remove active class from all spans
  document.querySelectorAll(".random-backgrounds span").forEach(Element => {
    Element.classList.remove("active");
  });
  if (backgroundLocalItem === "true"){
    document.querySelector(".random-backgrounds .yes").classList.add("active");
}else{
  document.querySelector(".random-backgrounds .no").classList.add("active");
}
}


// click on toggle settings gear
document.querySelector(".toggle-settings .fa-cogs").onclick = function(){

  // toggle class fa-spin for rotation on self
  this.classList.toggle("fa-spin");

  // toggle class open on main ssettings box
  document.querySelector(".settings-box").classList.toggle("open");

};
// switch colors
const colorsli = document.querySelectorAll(".colors-list li");
// loop on all list colors
colorsli.forEach(li => {
  // click on every list items
  li.addEventListener("click", (e) => {
  
    // set color on root
    document.documentElement.style.setProperty("--main--color", e.target.dataset.color);
    // set color on local storage
    localStorage.setItem("color_option", e.target.dataset.color );

    // remove active class from All childrens
    e.target.parentElement.querySelectorAll(".active").forEach(Element => {
      Element.classList.remove("active");
    });

    // add active class on self
    e.target.classList.add("active");

  });

});


// switch random background option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");
// loop on all list spans
randomBackEl.forEach(span => {
  // click on every span
  span.addEventListener("click", (e) => {
  
    // remove active class from All childrens
    e.target.parentElement.querySelectorAll(".active").forEach(Element => {
      Element.classList.remove("active");
    });

    // add active class on self
    e.target.classList.add("active");

    if(e.target.dataset.background === 'yes'){
      backgroundOption = true;
      randomizeimgs();
      localStorage.setItem("backgroundOption", true);
      
    }else{
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("backgroundOption", false);
      
    }

  });

});

// select landing page element
let landingPage = document.querySelector(".landing-page");
// get array of images
let imgsArray = ['fo.jpg', 'ko.jpg', 'lo.jpg', 'ro.jpg', 'vo.jpg'];



// function to randomize imgs
function randomizeimgs(){
  if (backgroundOption === true){
    backgroundInterval= setInterval(() =>{
      // get random number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
    
      // change background image url
      landingPage.style.backgroundImage = 'url("+ imgsArray[randomNumber] + ")';
    
    }, 10000);

  }
}

randomizeimgs();


// select skills  selector
let ourskills = document.querySelector(".skills");

window.onscroll = function (){
  // skills offset top
  let skillsoffsettop = ourskills.offsetTop;

  // skills outer height
  let skillsouterheight = ourskills.offsetHeight;

  // window heght
  let windowHeight = this.innerHeight;

  // window scrollTop
  let windowScrollTop = this.pageYOffset;

  if(windowScrollTop > (skillsoffsettop + skillsouterheight - windowHeight)){
    let allskills = document.querySelectorAll(".skill-box .skill-progress span");
    allskills.forEach(skill =>{
      skill.style.width = skill.dataset.progress
    })


  }
 
};

// creat popup with the image
let ourgallery = document.querySelectorAll(".gallery img");
ourgallery.forEach(img => {
  img.addEventListener('click', (e) => {
    // create overlay element
    let overlay = document.createElement('div');
    // add class to overlay
    overlay.className = 'popup-overlay';
    // append overlay to the body
    document.body.appendChild(overlay);

    // create popup box
    let popupBox = document.createElement('div');

    // add class to the popup box
    popupBox.className= 'popup-box';


    if (img.alt !== null){
      // create headding
      let imgHeading = document.createElement('h3');

      // create text for heading
      let imgText = document.createTextNode(img.alt);

      // append the text to the heading
      imgHeading.appendChild(imgText);
      // append the heading to the popup box
      popupBox.appendChild(imgHeading);

     }

    // create the image
    let popupImage = document.createElement('img');

    // set image source
    popupImage.src = img.src;
     // add image to popup box
     popupBox.appendChild(popupImage);

     // append the popup box to body
     document.body.appendChild(popupBox);

     // create the close span
     let closeButton = document.createElement('span');

     // create the close button text
     let closeButtonText = document.createTextNode('x');
     // append text to close button
     closeButton.appendChild(closeButtonText);

     // add class to close button
     closeButton.className = 'close-button';
     
     // add close button to the popup box
     popupBox.appendChild(closeButton);

    



  });

});

// close popup
document.addEventListener("click", function(e){
  if(e.target.className == 'close-button'){
    // remove the current popup
    e.target.parentNode.remove();

    // remove overlay
    document.querySelector(".popup-overlay").remove();
  } 

});

// select all bullets
const allbullets = document.querySelectorAll('.nav-bullets .bullet');
allbullets.forEach(bullet => {
  bullet.addEventListener('click', (e) => {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: 'smooth'
    })
  })

});

// select all bullets
const allLinks = document.querySelectorAll('.links a');
allLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: 'smooth'
    })
  })

});
let bulletsSpan = document.querySelectorAll('.bullets-option span');

let bulletsContainer = document.querySelector('.nav-bullets');
bulletsSpan.forEach(span => {
  span.addEventListener('click', (e)=> {
    if (span.dataset.display === 'show') {
      bulletsContainer.style.display = 'block';
    }else {
      bulletsContainer.style.display = 'none';

    }
  })
})

