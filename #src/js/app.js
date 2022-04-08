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

// ===========  Calendar ===========================
var $calendar;
$(document).ready(function () {
   let container = $('#calendarFosm').simpleCalendar({
      fixedStartDay: 1, // begin weeks by sunday
      disableEmptyDetails: true,
      events: [
         // generate new event after tomorrow for one hour
         {
            startDate: '2022-04-14',
            endDate: '2022-04-14',
            place: 'г. Гродно',
            summary:
               'Республиканская летняя спартакиада работников лесного хозяйства',
         },
         {
            startDate: '2022-04-15',
            endDate: '2022-04-17',
            place: 'г. Гродно',
            summary:
               'Республиканская летняя спартакиада работников лесного хозяйства',
         },
         {
            startDate: '2022-04-14',
            endDate: '2022-04-14',
            place: 'г. Минск',
            summary: 'Областные соревнования на лучшего инструктора-методиста',
         },
         {
            startDate: '2022-04-14',
            endDate: '2022-04-15',
            place: 'г. Минск',
            summary: 'Областные соревнования на лучшего инструктора-методиста',
         },
         {
            startDate: '2022-04-14',
            endDate: '2022-04-21',
            place: 'г. Минск',
            summary: 'Областные соревнования на лучшего инструктора-методиста',
         },
         {
            startDate: '2022-04-22',
            endDate: '2022-04-23',
            place: 'г. Брест',
            summary:
               'Легкая атлетика в помещении(юноши и девушки (2008–2009 г.р.)',
         },
      ],
   });

   $calendar = container.data('plugin_simpleCalendar');
});
