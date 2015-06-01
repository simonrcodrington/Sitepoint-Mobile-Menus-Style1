/*Script functionality*/
$(document).ready(function() {

  //GLOBALS
  var nav_menu = $('.nav-menu');

  //main menu toggle
  $('.nav-menu-toggle').on('click', function() {
    nav_menu.toggleClass('active');
    calculate_menu_height();
  });

  //claculate the height of the menu
  function calculate_menu_height() {
    var nav_menu_items = nav_menu.children('li');

     //if active, calculate height
    if (nav_menu.hasClass('active')) {
      var nav_menu_height = 0;
      $.each(nav_menu_items, function() {
        nav_menu_height += $(this).outerHeight();
      });
    }
    //else not active, set to 0
    else {
      var nav_menu_height = 0;
    }

    nav_menu.css('height', nav_menu_height);
  }

  //on resize, recalculate the height of the menu
  $(window).resize(function() {
   calculate_menu_height();
  })
  
  
  //INDENTING
  //go through the menu and add indenting 
  function add_menu_depth() {

    var menus = $('.menu');
    //set depth width to be 5% of the nav menu
    var pad_depth = (nav_menu.outerWidth() / 20);

    //if we have menus
    if (menus.length != 0) {
      $.each(menus, function() {
        var depth_count = $(this).parents('.menu').length + 1;
        var child_elements = $(this).find('li > a');

        $.each(child_elements, function() {
          $(this).css('padding-left', depth_count * pad_depth);
        });
      })
    }
  }
  add_menu_depth();
});