(function ($) {
  "use strict";

  // preloader start
  let preloader = document.querySelector("#preloader");
  window.addEventListener("load", function () {
    preloader.classList.add("preloaded");
    setTimeout(function () {
      preloader.remove();
    }, 1500);
  });
  // preloader end

  // meanmenu start
  $(".main_menu").meanmenu({
    meanMenuContainer: ".mobile_menu",
    meanScreenWidth: "1399",
  });

  $(".main_menu_2").meanmenu({
    meanMenuContainer: ".mobile_menu_2",
    meanScreenWidth: "991",
  });

  $(".main_menu_3").meanmenu({
    meanMenuContainer: ".mobile_menu_3",
    meanScreenWidth: "991",
  });
  // meanmenu end

  // mobile menu start
  let menutoggole = document.querySelector(".toggle_menu");
  let mobilemenu = document.querySelector(".mobile-menu");
  menutoggole.onclick = function () {
    menutoggole.classList.toggle("active");
    mobilemenu.classList.toggle("active");
  };
  // mobile menu end

  // dark mood start
  var darktoggle = document.querySelector(".dark-btn-icon");
  var home1bgimg = document.querySelector(".page-wrapper");
  var home2bgimg = document.querySelector(".page-wrapper-2");

  // Function to toggle the dark theme
  function toggleDarkTheme() {
    // Toggle the class on the body element
    $("body").toggleClass("dark-theme");

    // Store the preference in local storage
    const isDarkTheme = $("body").hasClass("dark-theme");
    localStorage.setItem("darkTheme", isDarkTheme);

    if (isDarkTheme) {
      darktoggle.src = "assets/img/icon/sun-icon.png";
      home1bgimg.style.backgroundImage =
        "url('assets/img/bg/page-bg-dark-1.jpg')";
    } else {
      darktoggle.src = "assets/img/icon/mon-icon.png";
      home1bgimg.style.backgroundImage = "url('assets/img/bg/page-bg-1.jpg')";
      home2bgimg.style.backgroundImage = "url('assets/img/bg/page-bg-1.jpg')";
    }
  }
  // Check if the user preference is already stored in local storage
  $(document).ready(function () {
    const isDarkTheme = localStorage.getItem("darkTheme") === "true";

    // Apply the dark theme if the preference is set to true
    if (isDarkTheme) {
      $("body").addClass("dark-theme");
      darktoggle.src = "assets/img/icon/sun-icon.png";
      home1bgimg.style.backgroundImage =
        "url('assets/img/bg/page-bg-dark-1.jpg')";
    }

    // Attach click event to the specified div
    $(".dark-btn").on("click", toggleDarkTheme);
  });
  // dark mood end

  //  client slider start
  if (jQuery(".client_slide_active").length > 0) {
    let acooterbrand = new Swiper(".client_slide_active", {
      slidesPerView: 4,
      loop: true,
      rtl: false,
      infinite: true,
      autoplay: {
        delay: 4000,
      },

      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    });
  }
  // client slider end

  // portfolio fillter start
  function enableMasonry2() {
    // ----------------------------- isotop gallery

    $(window).on("load", function () {
      if ($("#fillter-item-active").length) {
        var $grid = $("#fillter-item-active").isotope({
          // options
          itemSelector: ".isotop-item",
          percentPosition: true,
          masonry: {
            // use element for option
            columnWidth: ".grid-sizer",
          },
        });

        // filter items on button click
        $(".isotop-menu-wrapper").on("click", "li", function () {
          var filterValue = $(this).attr("data-filter");
          $grid.isotope({ filter: filterValue });
        });

        // change is-checked class on buttons
        $(".isotop-menu-wrapper").each(function (i, buttonGroup) {
          var $buttonGroup = $(buttonGroup);
          $buttonGroup.on("click", "li", function () {
            $buttonGroup.find(".is-checked").removeClass("is-checked");
            $(this).addClass("is-checked");
          });
        });
      }
    });
  }

  enableMasonry2();
  // portfolio filter end

  // blog slider start
  if (jQuery(".blog-slider-active").length > 0) {
    let acooterbrand = new Swiper(".blog-slider-active", {
      slidesPerView: 1,
      loop: true,
      rtl: false,
      infinite: true,
      autoplay: false,
      pagination: {
        el: ".blog-progation",
        clickable: true,
      },
    });
  }
  // blog slider end

  // contact form
  $(".input-box.name").click(function () {
    $(".input-box.name").addClass("height");
    $(".input-box.name").css("borderBottom", "1px solid #FE7878");
    $(".input-lebel.name").css("color", "#FE7878");
  });

  $(".input-box.gmail").click(function () {
    $(".input-box.gmail").addClass("height");
    $(".input-box.gmail").css("borderBottom", "1px solid #1B74E4");
    $(".input-lebel.gmail").css("color", "#1B74E4");
  });

  $(".input-box.message").click(function () {
    $(".input-box.message").addClass("height");
    $(".input-box.message").css("borderBottom", "1px solid #CE65F3");
    $(".input-lebel.message").css("color", "#CE65F3");
  });
  // contact form end

  // data background
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ") "
    );
  });

  //   odometer
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  // WOW active
  new WOW().init();
})(jQuery);



/*          *     .        *  .    *    *   . 
 .  *  move your mouse to over the stars   .
 *  .  .   change these values:   .  *
   .      * .        .          * .       */
   const STAR_COLOR = '#fff';
   const STAR_SIZE = 3;
   const STAR_MIN_SCALE = 0.2;
   const OVERFLOW_THRESHOLD = 50;
   const STAR_COUNT = ( window.innerWidth + window.innerHeight ) / 8;
   
   const canvas = document.querySelector( 'canvas' ),
         context = canvas.getContext( '2d' );
   
   let scale = 1, // device pixel ratio
       width,
       height;
   
   let stars = [];
   
   let pointerX,
       pointerY;
   
   let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
   
   let touchInput = false;
   
   generate();
   resize();
   step();
   
   window.onresize = resize;
   canvas.onmousemove = onMouseMove;
   canvas.ontouchmove = onTouchMove;
   canvas.ontouchend = onMouseLeave;
   document.onmouseleave = onMouseLeave;
   
   function generate() {
   
      for( let i = 0; i < STAR_COUNT; i++ ) {
       stars.push({
         x: 0,
         y: 0,
         z: STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE )
       });
      }
   
   }
   
   function placeStar( star ) {
   
     star.x = Math.random() * width;
     star.y = Math.random() * height;
   
   }
   
   function recycleStar( star ) {
   
     let direction = 'z';
   
     let vx = Math.abs( velocity.x ),
         vy = Math.abs( velocity.y );
   
     if( vx > 1 || vy > 1 ) {
       let axis;
   
       if( vx > vy ) {
         axis = Math.random() < vx / ( vx + vy ) ? 'h' : 'v';
       }
       else {
         axis = Math.random() < vy / ( vx + vy ) ? 'v' : 'h';
       }
   
       if( axis === 'h' ) {
         direction = velocity.x > 0 ? 'l' : 'r';
       }
       else {
         direction = velocity.y > 0 ? 't' : 'b';
       }
     }
     
     star.z = STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE );
   
     if( direction === 'z' ) {
       star.z = 0.1;
       star.x = Math.random() * width;
       star.y = Math.random() * height;
     }
     else if( direction === 'l' ) {
       star.x = -OVERFLOW_THRESHOLD;
       star.y = height * Math.random();
     }
     else if( direction === 'r' ) {
       star.x = width + OVERFLOW_THRESHOLD;
       star.y = height * Math.random();
     }
     else if( direction === 't' ) {
       star.x = width * Math.random();
       star.y = -OVERFLOW_THRESHOLD;
     }
     else if( direction === 'b' ) {
       star.x = width * Math.random();
       star.y = height + OVERFLOW_THRESHOLD;
     }
   
   }
   
   function resize() {
   
     scale = window.devicePixelRatio || 1;
   
     width = window.innerWidth * scale;
     height = window.innerHeight * scale;
   
     canvas.width = width;
     canvas.height = height;
   
     stars.forEach( placeStar );
   
   }
   
   function step() {
   
     context.clearRect( 0, 0, width, height );
   
     update();
     render();
   
     requestAnimationFrame( step );
   
   }
   
   function update() {
   
     velocity.tx *= 0.96;
     velocity.ty *= 0.96;
   
     velocity.x += ( velocity.tx - velocity.x ) * 0.8;
     velocity.y += ( velocity.ty - velocity.y ) * 0.8;
   
     stars.forEach( ( star ) => {
   
       star.x += velocity.x * star.z;
       star.y += velocity.y * star.z;
   
       star.x += ( star.x - width/2 ) * velocity.z * star.z;
       star.y += ( star.y - height/2 ) * velocity.z * star.z;
       star.z += velocity.z;
     
       // recycle when out of bounds
       if( star.x < -OVERFLOW_THRESHOLD || star.x > width + OVERFLOW_THRESHOLD || star.y < -OVERFLOW_THRESHOLD || star.y > height + OVERFLOW_THRESHOLD ) {
         recycleStar( star );
       }
   
     } );
   
   }
   
   function render() {
   
     stars.forEach( ( star ) => {
   
       context.beginPath();
       context.lineCap = 'round';
       context.lineWidth = STAR_SIZE * star.z * scale;
       context.globalAlpha = 0.5 + 0.5*Math.random();
       context.strokeStyle = STAR_COLOR;
   
       context.beginPath();
       context.moveTo( star.x, star.y );
   
       var tailX = velocity.x * 2,
           tailY = velocity.y * 2;
   
       // stroke() wont work on an invisible line
       if( Math.abs( tailX ) < 0.1 ) tailX = 0.5;
       if( Math.abs( tailY ) < 0.1 ) tailY = 0.5;
   
       context.lineTo( star.x + tailX, star.y + tailY );
   
       context.stroke();
   
     } );
   
   }
   
   function movePointer( x, y ) {
   
     if( typeof pointerX === 'number' && typeof pointerY === 'number' ) {
   
       let ox = x - pointerX,
           oy = y - pointerY;
   
       velocity.tx = velocity.tx + ( ox / 8*scale ) * ( touchInput ? 1 : -1 );
       velocity.ty = velocity.ty + ( oy / 8*scale ) * ( touchInput ? 1 : -1 );
   
     }
   
     pointerX = x;
     pointerY = y;
   
   }
   
   function onMouseMove( event ) {
   
     touchInput = false;
   
     movePointer( event.clientX, event.clientY );
   
   }
   
   function onTouchMove( event ) {
   
     touchInput = true;
   
     movePointer( event.touches[0].clientX, event.touches[0].clientY, true );
   
     event.preventDefault();
   
   }
   
   function onMouseLeave() {
   
     pointerX = null;
     pointerY = null;
   
   }
   