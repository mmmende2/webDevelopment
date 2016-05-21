/*slideshow.js
  Mario Mendez
  projecFinal*/
  
 /* !!! taken from w3 CSS3/slideshow  !!! */
 /* !!! approved by Deande ahead of time  !!! */
	/*--->	http://www.w3schools.com/w3css/w3css_slideshow.asp */
  

var slideIndex = 0;
var y;
var x = document.getElementsByClassName("slide");
playSlides();


function playSlides() {
    var i;
    
	
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
	  //hides images
    }
    slideIndex++;
	
    if (slideIndex >= x.length) 
	{slideIndex = 0;} 

    x[slideIndex].style.display = "block"; 
	y = setTimeout(playSlides, 2000);
    // Change image every 2 seconds 
	
	//y = setTimeout(playSlides, 2000);
}

function stopSlides() {
	clearTimeout(y);
}



//this doesn't work yet. use this code for arrows 

//<!-- ARROWS -->
			/* a class="arrows" id="aLeft" onclick="">
				<img src="projectFinal/images/Left.png" alt ="left arrow">
				
			</a>
			<a class="arrows" id="aRight" onmouseover="stopSlides()" onmouseleave="" onclick="forwardSlides()">
				
				<img src="projectFinal/images/Right.png" alt ="right arrow">
			</a> */

function forwardSlides() {
	clearTimeout(y);
	
	var forwardSlideIndex;
	var i;
    
	
	
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
	  //hides images
    }
	
    slideIndex++; 
	
	
    if (slideIndex >= x.length) 
	{slideIndex = 0;} 

	
	forwardSlideIndex = slideIndex;
	

    x[forwardSlideIndex].style.display = "block"; 
	
}

function backwardSlides() {
	clearTimeout(y);
	
	var backSlideIndex;
	var i;
    
	
	
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
	  //hides images
    }
	
    slideIndex--; 
	
	
    if (slideIndex <= -1) 
	{slideIndex = x.length-1;} 

	
	backSlideIndex = slideIndex;
	

    x[backSlideIndex].style.display = "block"; 
	
}

