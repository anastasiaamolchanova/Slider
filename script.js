
let slides = document.querySelectorAll('.slideSingle');
let slider = [];
console.log(slides);
for (let i=0; i < slides.length; i++){
    slider[i] = slides[i].src;
    slides[i].remove();
}
console.log(slider);

let step = 0;
let offset = 0;

function draw() {
    let img = document.createElement('img');
    img.src = slider[step];
    img.classList.add('slideSingle');
    img.style.left = offset*1000 + 'px';
    document.querySelector('#slide').appendChild(img);
    
    if (step + 1 == slider.length){
        step = 0;
    }
    else {
        step++;
    }
    offset = 1;
}


function left() {
    let slides2 = document.querySelectorAll('.slideSingle');
     let offset2 = 0;
     for (let i = 0; i < slides2.length; i++) {
         slides2[i].style.left = offset2*1000 - 1000 + 'px';
     offset2++;
     }
     setTimeout(function(){
         slides2[0].remove();
         draw()
     }, 1000)
    }

    draw();draw();
    document.onclick = left;

    
// function autoSlider () {
//     timer = setTimeout ( draw, 1000);
// }; 


    //  clearTimeout(timer);
    //  }
    //  setTimeout(function(){
    //      slides2[0].remove();
    //      draw();
    //  }
    //   polosa.style.left = left+'px';
    //  autoSlider();
// }