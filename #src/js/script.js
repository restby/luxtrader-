// @@include('_vendors.js');


$(document).ready(function () {
  /*burger & navigation*/
  $('.main-header__burger').click(function (event) {
    $('.main-header__burger,.main-header__navigation').toggleClass('active');
    $('body').toggleClass('lock');
  });
  /*user-menu*/
  $('.user-menu__icon').click(function (event) {
    $('.user-menu__list').toggleClass('active');
  });
});
