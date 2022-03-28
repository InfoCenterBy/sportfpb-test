

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


var $calendar;
  $(document).ready(function () {
    let container = $("#calendarFosm").simpleCalendar({
      fixedStartDay: 1, // begin weeks by sunday
      disableEmptyDetails: true,
      events: [
        // generate new event after tomorrow for one hour
        {
          startDate: '2022-03-14',
          endDate: '2022-03-14',
          place: 'г. Гродно',
          summary: 'Республиканская летняя спартакиада работников лесного хозяйства'
        },
        {
          startDate: '2022-03-15',
          endDate: '2022-03-17',
          place: 'г. Гродно',
          summary: 'Республиканская летняя спартакиада работников лесного хозяйства'
        },
        {
          startDate: '2022-03-14',
          endDate: '2022-03-14',
          place: 'г. Минск',
          summary: 'Областные соревнования на лучшего инструктора-методиста'
        },
        {
          startDate: '2022-03-14',
          endDate: '2022-03-15',
          place: 'г. Минск',
          summary: 'Областные соревнования на лучшего инструктора-методиста'
        },
        {
          startDate: '2022-03-14',
          endDate: '2022-03-21',
          place: 'г. Минск',
          summary: 'Областные соревнования на лучшего инструктора-методиста'
        },
        {
          startDate: '2022-03-22',
          endDate: '2022-03-23',
          place: 'г. Брест',
          summary: 'Легкая атлетика в помещении(юноши и девушки (2008–2009 г.р.)'
        }
      ],

    });
	 
    $calendar = container.data('plugin_simpleCalendar')
  });