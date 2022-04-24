
//=======================================================================================
// Toggle between adding and removing the "responsive" class to topnav when the user 
// clicks on the icon.
//=======================================================================================
function toggleNavbar() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  
}

//=========================================================================================
// After the contact form submission display thanks message and reset the form after 
// few seconds.
//=========================================================================================
function formSubmit(){
  document.getElementById('form-confirmation').innerHTML = 'Thanks for submitting!';

  setTimeout(() => {
    document.getElementById('contact-form').reset();
    document.getElementById('form-confirmation').innerHTML = " ";
  }, 1500);
  
}

//=========================================================================================
// Image slider to showcase the projects
//=========================================================================================

let slideIndex = 1;
let totalNumOfProjects = 3;

// LUT - Assign show container index = total number of projects
let containerId = {
  0: 'slideshow-container-1',
  1: 'slideshow-container-2',
  2: 'slideshow-container-3'
};

// Show the first slides of each project in their respective container
for(let i=0; i<totalNumOfProjects; i++){
  slideIndex = 1;
  showSlides(slideIndex, containerId[i]);
}

// Next/previous controls
function plusSlides(n, containerInd) {
  showSlides(slideIndex += n, containerInd);
}

//=======================================================================================
// Show the slides
// slideIndex is a global variable.
//=======================================================================================

function showSlides(n, containerInd) {
  let i;  
  let slides;
  
  // get all the elements of the specified class.
  switch(containerInd){
    case 'slideshow-container-1':
      slides = document.getElementsByClassName("mySlides-1");
      break;
    case 'slideshow-container-2':
      slides = document.getElementsByClassName("mySlides-2");
      break;
    case 'slideshow-container-3':
      slides = document.getElementsByClassName("mySlides-3");
      break;
  }

  // Make sure the slideIndex is cycles between 1 to total number of slides in that container.
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // Set all the slides display to none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";    
  }
  // Display the selected slides. Since arrays are indexed from 0, slides and dots are accessed as slideIndex-1.
  slides[slideIndex-1].style.display = "block";  
}





