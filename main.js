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
  if (getTabId()) {
    active = $(".tab-content__" + getTabId()).length
      ? getTabId()
      : getFirstTab(classes.tab);
    $(classes.tab + "[data-tab=" + active + "]").addClass("active");
  } else if (tab !== null && tab !== undefined) {
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
      } else {
        active = getFirstTab(classes.tab);
        $("[data-tab=" + active + "]").addClass("active");
      }
    });
  }

  $(".tab-content__" + active).show();
}

// Get TabID from Url
function getTabId() {
  var url = window.location.href;

  var strStart = url.indexOf("#") !== -1 ? url.indexOf("#") + 1 : false;

  return strStart ? url.slice(strStart, url.length) : false;
}

// Get First Tab Name
function getFirstTab(selector) {
  return $(selector + ":nth-child(1)").data("tab");
}
