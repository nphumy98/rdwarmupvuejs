function show_panel() {
  document.getElementById("left_panel").style.left = "0px";
  document.getElementById("right_panel").style.marginLeft = "400px";
  document.getElementById("right_panel").style.width= get_width('right_panel')-400;
}

function hide_panel() {
  document.getElementById("left_panel").style.left = "-400px";
  document.getElementById("right_panel").style.marginLeft = "0px";
  document.getElementById("right_panel").style.width= get_width('right_panel')+400;
}

function get_width(id) {
  var element = document.getElementById(id);
  var positionInfo = element.getBoundingClientRect();
  return positionInfo.width;
}
