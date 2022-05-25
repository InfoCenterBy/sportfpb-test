const body = document.querySelector('body'),
   btnBurger = document.querySelector('.btn-burger-menu'),
   menuNav = document.querySelector('.header-menu'),
   menuLinks = document.querySelectorAll('.header-menu__link_btn'),
   btnShowSearch = document.querySelector('.header-menu__link_btn-search'),
   headerSearch = document.querySelector('.header-search'),
   btnCloseSearch = document.querySelector('.header-search__close');

btnBurger.addEventListener('click', function (e) {
   btnBurger.classList.toggle('active');
   menuNav.classList.toggle('active');
   body.classList.toggle('lock');
});

document.addEventListener('click', function (e) {
   if (
      menuNav.classList.contains('active') &&
      !e.target.closest('.btn-burger-menu, .header-menu')
   ) {
      btnBurger.classList.remove('active');
      menuNav.classList.remove('active');
      body.classList.remove('lock');
   }
   if (
      headerSearch.classList.contains('active') &&
      !e.target.closest('.header-search, .header-menu__link_btn-search')
   ) {
      headerSearch.classList.remove('active');
   }
});
menuLinks.forEach((link) => {
   link.addEventListener('click', function (e) {
      link.classList.toggle('active');
   });
});

btnShowSearch.addEventListener('click', function (e) {
   headerSearch.classList.add('active');
});

btnCloseSearch.addEventListener('click', function (e) {
   headerSearch.classList.remove('active');
});

// ====================   scroll accordion to top   ==========================
$('#accordionFPB').on('shown.bs.collapse', function (event) {
   $('html, body').animate(
      {
         scrollTop: $(event.target).parent().offset().top,
      },
      100
   );
});

// ===========  Sticky Sidebar ===========================
const sidebarBlock = document.querySelector('.sidebar');
if (sidebarBlock && $(window).width() > 992) {
   var sidebar = new StickySidebar(sidebarBlock, {
      topSpacing: 24,
   });
   sidebar.updateSticky();
}
