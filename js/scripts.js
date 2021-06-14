$(document).ready(function(){
    $('.burger-icon-wrapper').on('click', () => {
        $('.mobile-nav').toggleClass('mobile-hidden');
        $('.hamburger').toggleClass('is-active');
        $('.logo').toggleClass('logo-is-hidden');
        $('.navigation-wrapper').toggleClass('align-nav-end');
    });

    $('.item-services').on('click', () => {
      $('.services').toggleClass('services-hidden');
      $('.item-services').toggleClass('item-services-is-active');
    });

    $('.item-services').on('click', () => {
      $('.frst-select').toggleClass('frst-select-is-active');
      
    });

    $("#lang-id").select2({
      theme: "classic",
    });
    $("#mob-lang-id").select2({
      theme: "classic",
    });
    
  });