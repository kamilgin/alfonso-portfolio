$(document).ready(function() {
    console.log("fullpage init is loaded");
    $('#fullpage').fullpage({
        menu: '#menu',
        navigation: true,
        anchors:['home', 'narrative', 'commercial', 'documentary' , 'photography' , 'about' , 'contact'],
        // verticalCentered: true,
        resize : false,
        // sectionsColor : ['#ccc', '#fff'],        
        scrollingSpeed: 700,
        // easing: 'easeInQuart',
        // menu: true,
        // navigation: true,
        // navigationPosition: 'left',
        // navigationTooltips: ['firstSlide', 'secondSlide'],        
        // loopBottom: false,
        // loopTop: false,
        // loopHorizontal: true,
        // autoScrolling: true,
        // scrollOverflow: false,
        // css3: false,
        // paddingTop: '3em',
        // paddingBottom: '10px',
        // normalScrollElements: '#element1, .element2',
        // normalScrollElementTouchThreshold: 5,
        // keyboardScrolling: true,
        // touchSensitivity: 15,
        // continuousVertical: false,
        // animateAnchor: true,
        // sectionSelector: '.section',
        // slideSelector: '.slide',

        //events
        // onLeave: function(index, nextIndex, direction){},
        // afterLoad: function(anchorLink, index){},
        // afterRender: function(){},
        // afterResize: function(){},
        // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        // onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });
});