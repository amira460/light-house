var imgs = document.querySelectorAll('.container img');
var container =document.querySelector('.container');
var fixedLayer = document.querySelector('.fixed-layer');
var colsebtn=document.querySelector('#colsebtn');
var nextbtn=document.querySelector('#nextbtn');
var prebtn=document.querySelector('#prebtn');
var innerImge=document.querySelector('.fixed-layer img');
var imgArray=[];
for (var i=0; i<imgs.length; i++) {
    imgArray.push(imgs[i]);
}
var index=0;
container.addEventListener('click', function(e){
    
        var clickedImg=e.target;
        index =imgArray.indexOf(clickedImg);
        var imgSrc=clickedImg.getAttribute('src');
        if(imgSrc!=null){
            innerImge.setAttribute('src',imgSrc);
            fixedLayer.classList.replace('d-none','d-flex');
        }
})

function replaceItem(){
    fixedLayer.classList.replace('d-flex' ,'d-none');
}

function getImgs(){
    var getImg=imgArray[index] ;
    var getImgSrc=getImg.getAttribute('src') ;
    innerImge.setAttribute('src',getImgSrc);
  
}
fixedLayer.addEventListener('click',replaceItem);
colsebtn.addEventListener('click', replaceItem);
function nextImage(){
    index++;
    if(index>imgArray.length){
     index = 0;
   }
   getImgs()
}
function preImage(){
    index--;
    if(index<0){
     index = imgArray.length-1;
    }
     getImgs()
}
nextbtn.addEventListener('click', function(e){
   e.stopPropagation();
   nextImage()
})
prebtn.addEventListener('click', function(e){
e.stopPropagation();
preImage()
})
document.addEventListener('keydown', function(e){
  if(e.key=="ArrowRight")
    nextImage()
  else if (e.key=="ArrowLeft") 
    preImage()
  else if (e.key=="Escape") 
   replaceItem()
  

})

