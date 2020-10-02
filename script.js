document.addEventListener("DOMContentLoaded", () => {
    //  little hack to detect if the user is on ie 11
    const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    // get all the links with an ID that starts with 'sectionLink'

    
    const listOfLinks = [
      document.querySelector("a[href^='#"),
      document.querySelector("a[href^='#about"),
      document.querySelector("a[href^='#life"),
      document.querySelector("a[href^='#projects"),
      document.querySelector("a[href^='#professional")
    ];
    
    //const listOfLinks = document.querySelectorAll("a[href^='#sectionLink");
    // loop over all the links
    listOfLinks.forEach(function (link) {
      // listen for a click
      link.addEventListener('click',  () => {
        // toggle highlight on and off when we click a link
        listOfLinks.forEach( (link) => {
          if (link.classList.contains('highlighted')) {
            link.classList.remove('highlighted');
          }
        });
        link.classList.add('highlighted');
        // get the element where to scroll
        let ref = link.href.split('#');
        console.log(ref);
        if(ref[1]!="") {
          ref = "#section_" + ref[1];
        } else {
          ref="#content";
        }
        console.log(ref);
        // ie 11 does not support smooth scroll, so we will simply scroll
        if (isIE11) {
          setTimeout(function() {
            window.scrollTo(0, document.querySelector(ref).offsetTop);
          }, 0);
          //window.scrollTo(0, document.querySelector(ref).offsetTop);
        } else {
          
          window.scroll({
            behavior: 'smooth',
            left: 0,
            // top gets the distance from the top of the page of our target element
            top: document.querySelector(ref).offsetTop
          });
        }
      })
    });

    const links = document.querySelectorAll('.links');
    const sections = document.querySelectorAll('.page');
    function changeLinkState() {
      let index = sections.length;

      while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
      
      links.forEach((link) => link.classList.remove('active'));
      links[index].classList.add('active');
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);
    




    // var slideIndex = 1;
    // showSlides(slideIndex);

    // // Next/previous controls
    // function plusSlides(n) {
    //   showSlides(slideIndex += n);
    // }

    // // Thumbnail image controls
    // function currentSlide(n) {
    //   showSlides(slideIndex = n);
    // }

    // function showSlides(n) {
    //   var i;
    //   var slides = document.getElementsByClassName("mySlides");
    //   var dots = document.getElementsByClassName("dot");
    //   if (n > slides.length) {slideIndex = 1}
    //   if (n < 1) {slideIndex = slides.length}
    //   for (i = 0; i < slides.length; i++) {
    //       slides[i].style.display = "none";
    //   }
    //   for (i = 0; i < dots.length; i++) {
    //       dots[i].className = dots[i].className.replace(" slideactive", "");
    //   }
    //   slides[slideIndex-1].style.display = "block";
    //   dots[slideIndex-1].className += " slideactive";
    // }
});



