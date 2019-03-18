// Required variables
var tabBtn = ".nav-item";
var tabsWrapper = ".tabs-wrapper"; // All Tabs container
var classesArray = { tab: tabBtn, wrapper: tabsWrapper };

$(function() {
  selectNewTab(classesArray);
  showActiveTab(classesArray);
});

function selectNewTab(classes) {
  var tab = $(classes.tab);

  tab.on("click", function() {
    tab.removeClass("active");
    $(classes.wrapper + ">*").hide();
    $(this).addClass("active");

    showActiveTab(classes, $(this));
  });
}

function showActiveTab(classes, tab) {
  var active, current;
  if (tab !== null && tab !== undefined) {
    current = tab;
    active = current.data("tab");
  } else {
    if (classes !== null) {
      current = $(classes.tab);
    } else {
      return false;
    }
    current.each(function() {
      if ($(this).hasClass("active")) {
        active = $(this).data("tab");
      }
    });
  }
  console.log(active);
  $(".tab-content__" + active).show();
}
