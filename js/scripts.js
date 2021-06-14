$(document).ready(function(){
    $('.burger-icon-wrapper').on('click', () => {
        $('.mobile-nav').toggleClass('mobile-hidden');
        $('.hamburger').toggleClass('is-active');
        $('.logo').toggleClass('logo-is-hidden');
        $('.phone-icon').toggleClass('phone-icon-hidden');
        $('.navigation-wrapper').toggleClass('align-nav-end');
    });

    $('.item-services').on('click', () => {
      $('.services').toggleClass('services-hidden');
      $('.item-services').toggleClass('item-services-is-active');
    });

    $('.nav-item.frst-select').on('click', () => {
      $('.frst-select').toggleClass('frst-select-is-active'); 
    });
    $('.div.nav-item.mob-nav-item.frst-select').on('click', () => {
      $('div.nav-item.mob-nav-item.frst-select').toggleClass('frst-select-is-active'); 
    });

    $("#lang-id").select2({
      theme: "classic",
    });
    $("#mob-lang-id").select2({
      theme: "classic",
    });
    
  });