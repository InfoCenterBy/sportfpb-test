

// ===========  Sticky Sidebar ===========================
const sidebarBlock = document.querySelector('.sidebar');
if (sidebarBlock && $(window).width() > 992) {
   var sidebar = new StickySidebar(sidebarBlock, {
      topSpacing: 24,
   });
   sidebar.updateSticky();
}