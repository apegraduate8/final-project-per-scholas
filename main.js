var loaded = document.getElementById("loader");///grabbing the id loader
var subLoader = document.getElementById("sub-loader");///grabbing the id sub-loader
var contain = document.querySelector('.container');///grabbing the class container

var a;
var b;


///////function for the loader animation.. called inside the loadTwo function below
function squeeze() {   
    loaded.style.left = "-100%";
        console.log('finish');
       
}
   

 ////function for the sub loader animation(white). calling squeeze inside a setTimeout function..also calling the set function..this function is called when the body loads(onload)
function loadTwo() {
    subLoader.style.left = "-100%";
    setTimeout(squeeze, 800);
    setInterval(set, 100);
     
    
}
///this function sets the class container width and height to the exact width and height of the window..(responsive)isets to pixels. this function is being called inside of the loadTwo function which is called onload inside body HTML
function set() {
    var w = window.innerWidth;///finding the inner width of the window screen, storing the value in variable w
    var h = window.innerHeight;///finding the inner height of the window screen, storing the value in variable h
    document.body.style.height = h + "px";
    contain.style.height = h + "px";
    contain.style.width = w + "px";
    //console.log("width" + w + "height" + h);
    
}


function aboutSlider(main){
    a = main;
    var slides = document.querySelector(a); 

    slides.style.left = "0%";
    
}
function aboutSliderBack(main){
    b = main;
    var slides = document.querySelector(b); 

    slides.style.left = "100%";
    
}




///////button show

var button = document.querySelector('#button');
var contain = document.querySelector('.container');
            
            function showButton() {
                 setTimeout(background, 500);
                setTimeout(show, 1500);
                
            }
            
            function show() {
                button.style.opacity = "1";
                
            }
            function background() {
                contain.style.animation = "backgroundMove 4s";
            }
       
///////image slider

var slideIndex = 1;
var x = document.getElementsByClassName("switch-img");
 showDivs(1);       
 var start = setInterval(cal, 3000);

function cal() {
             
        function plusDivs(b) {
        showDivs(slideIndex = slideIndex + b);
            
            console.log("slideindex =" + slideIndex);
    }
    
    plusDivs(1);
}

    function showDivs(n) {
            if(n < 1){slideIndex = x.length};
            if(n > x.length){slideIndex = 1};
        for(var i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
            
        }
        x[slideIndex - 1].style.display = "block";
       //if(slideIndex == 5) x[slideIndex - 1].style.left = "10%";
        console.log(slideIndex); 
       
    } 
