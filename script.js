const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemC=document.querySelector('#elem-container');
var fixed=document.querySelector('#fixed-image');
elemC.addEventListener("mouseenter",function(){
   // alert("WTF");
   fixed.style.display = "block";

} );
elemC.addEventListener("mouseleave",function(){
    //style is used for changing css property
    fixed.style.display = "none";
 } );

//  var elem1=document.querySelector('#elem1');
//  elemC.addEventListener("mouseleave",function(){
//     var image=elem1.getAttribute("data-image");
//     fixed.style.backgroundImage = `url(${image})`
//  } );

var elems=document.querySelectorAll(".elem");
// querySelector say jitnay b ap k elements ha wo sb ek array ki form may a jatay ha
// jo b data ata ha nodelist ki form may (which is kind of like an array)
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`
    });
    
    
});
