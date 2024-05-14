const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 0;

next.addEventListener('click',() => {
    currentActive++;

    if(currentActive > circles.length){
        currentActive = circles.length;//this one also similar
    };

    //we are doing this condition to avoid running of update function each time
    if(currentActive < circles.length){
        update();
    }
});

prev.addEventListener('click',() => {
    currentActive--;
    if(currentActive <= 0){
        currentActive = 0;
    };

    if(currentActive >= 0){
        update();
    }
});

function update(){
    circles.forEach((circle,idx) =>{
        if(idx <= currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length -1) / (circles.length -1)) * 100 +'%'
    // console.log(actives.length, circles.length);

    //disabling conditions
    if(actives.length === 1){
        prev.disabled = true;
    }else if(actives.length === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}