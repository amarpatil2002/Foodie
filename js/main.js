// counter

document.addEventListener('DOMContentLoaded',() => {
    function counter(id,start,end,duration){
        let ob = document.getElementById(id),
        current = start,
        range = end - start ,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval( () => {
            current += increment;
            ob.textContent=current;
            if(current == end){
                clearInterval(timer);
            }
        },step);
    }

    counter("count1" , 0 , 1087 ,3000);
    counter("count2" , 100 , 2587 ,2500);
    counter("count3" , 100 , 1807 ,3000);
    counter("count4" , 0 , 5087 ,3000);
});

// navbar

let nav = document.querySelector('.navbar');
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20)
    {
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}