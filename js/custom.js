(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    /*   up to top   */
    const toTop = document.querySelector('.to-top')
    window.addEventListener('scroll', ()=>{
        if(window.pageYOffset > 200){
            toTop.classList.add('active')
        } else{
            toTop.classList.remove('active')
        }
    })

    /*  open closer overlay   */
    const openBtn = document.querySelectorAll('.open-info')
    const closeBtn = document.querySelectorAll('.close-info')
    const overlayInfo = document.querySelectorAll('.project-text-info')
    const projectInfo = document.querySelectorAll('.project-text')

    const visibleProjectInfo = (id)=>{
        projectInfo[id].style.display = 'block'
    };

    const addHiddenclaslist = (id)=>{
        overlayInfo[id].classList.toggle('hidden')
        openBtn[id].classList.toggle('hidden-btn')
    };

    openBtn.forEach((element, id) => {
        console.log(id);
        element.addEventListener('click', ()=>{
            console.log(id);
            addHiddenclaslist(id)
            setTimeout(() => visibleProjectInfo(id), 500);
        })
    });

    closeBtn.forEach((element, id) => {
        console.log(id);
        element.addEventListener('click', ()=>{
            console.log(id);
            addHiddenclaslist(id)
            projectInfo[id].style.display = 'none'
        })
    });

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
