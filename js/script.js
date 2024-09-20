$('.service-owl').owlCarouse({
  items: 5,
  loop: true,
  margin: 10,
  autoplay: true,
  nav: true,
  navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
      0: {
          items: 3
      },
      576: {
          items: 4
      },
      768: {
          items: 5
      },
      1000: {
          items: 7
      }
  }
});


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})





function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}










