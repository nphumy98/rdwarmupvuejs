function show_panel() {
  document.getElementById("left-panel-id").style.left = "0px";
  document.getElementById("right-panel-id").style.marginLeft = "400px";
  document.getElementById("right-panel-id").style.width= String(get_width('right-panel-id')-400)+"px";
}

function hide_panel() {
  document.getElementById("left-panel-id").style.left = "-400px";
  document.getElementById("right-panel-id").style.marginLeft = "0px";
  document.getElementById("right-panel-id").style.width= String(get_width('right-panel-id')+400)+"px";
}

function get_width(id) {
  var element = document.getElementById(id);
  var positionInfo = element.getBoundingClientRect();
  return positionInfo.width;
}
