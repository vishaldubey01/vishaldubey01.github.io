document.addEventListener("DOMContentLoaded", () => {
    //  little hack to detect if the user is on ie 11
    const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    // get all the links with an ID that starts with 'sectionLink'

    
    const listOfLinks = [
      document.querySelector("a[href^='#home"),
      document.querySelector("a[href^='#about"),
      document.querySelector("a[href^='#projects"),
      //document.querySelector("a[href^='#professional")
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
        ref = "#section_" + ref[1];
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




    var sections = document.querySelectorAll(".page");
    console.log(sections);
    // The user scrolls
    window.scroll(function(){
      
      // currentScroll is the number of pixels the window has been scrolled
      var currentScroll = window.scrollTop();
      console.log(currentScroll);
      console.log('hi');
      // $currentSection is somewhere to place the section we must be looking at
      var currentSection;
      
      // We check the position of each of the divs compared to the windows scroll positon
      sections.each(function(){
        // divPosition is the position down the page in px of the current section we are testing      
        var divPosition = window.offset().top;
        
        // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
        // the -1 is so that it includes the div 1px before the div leave the top of the window.
        if( divPosition - 1 < currentScroll ){
          // We have either read the section or are currently reading the section so we'll call it our current section
          currentSection = window;
          
          // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
        }
        
        // This is the bit of code that uses the currentSection as its source of ID
        var id = currentSection.attr('id').split("_")[1];
        
        $('a').removeClass('active');
        $("[href=#"+id+"]").addClass('active');
        
      })

  });

});



