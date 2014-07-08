function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:

preload([
    '../evelynxiao/assets/imgs/bg-web.jpg',
    '../evelynxiao/assets/imgs/header.png'
]);

$( document ).ready(function() {
    // set the date we're counting down to
    var target_date = new Date("Oct 11, 2014").getTime();
     
    // variables for time units
    var days, hours, minutes, seconds;
     
    // get tag element
    var countdown = document.getElementById("countdown");

    // get tag element
    var d = document.getElementById("days");
    var h = document.getElementById("hours");
    var m = document.getElementById("minutes");
    var s = document.getElementById("seconds");
     
    // update the tag with id "countdown" every 1 second
    setInterval(function () {
     
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
     
        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
         
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
         
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);
         
        // format countdown string + set tag value
        d.innerHTML = days + "d" 
        h.innerHTML = hours + "h" 
        m.innerHTML = minutes + "m" 
        s.innerHTML = seconds + "s" 

     
    }, 1000);

});