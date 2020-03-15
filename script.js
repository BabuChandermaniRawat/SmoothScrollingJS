function smoothScroll(target, duration){
    var target = document.querySelector(target);
    console.log(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    console.log(targetPosition);
    //console.log(startPosition);
    var distance = 2 * targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null)
             startTime = currentTime;
        var timeLapsed = currentTime - startTime;
        var run = ease(timeLapsed,startPosition,distance,duration);
        window.scrollTo(0,run);
        if(timeLapsed < duration)
              requestAnimationFrame(animation);
    }

    function ease(t,b,c,d){
        t /= d/2;
        if(t<1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// smoothScroll('.section1',1000);
var section1 = document.querySelector('.section1');
section1.addEventListener('click', function(){
    smoothScroll('.section1',1000);
});

