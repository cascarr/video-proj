// MDN
// The DOMContentLoaded event fires when the initial
// HTML document has been completely loaded and 
// parsed, without waiting for stylesheets, images, 
// and subframes to finish loading.
// The load event is fired when the whole page has 
// loaded, including all dependent resources such 
// as stylesheets and images.

const ploader = document.querySelector('.preloader');
const header = document.querySelector('header');
const vid = document.querySelector('.video-container');
const btn = document.querySelector('.switch-btn');


/**
 * 
 * default display onload
 * 
 */
window.addEventListener('DOMContentLoaded', function() {
    
    //
    if (!ploader.classList.contains('hide-preloader')) {

        ploader.classList.add('hide-preloader');
        //console.log(ploader.classList);

    }

    header.classList.add('header::after');

});

/**
 * 
 * button's action onClick event
 * 
 */
btn.addEventListener('click', function() {

    btn.classList.toggle('slide');

    if (btn.classList.contains('slide')) {

        vid.pause();

    } else {

        vid.play();
    }

});

//console.log(ploader);