<template>
<div id="left-panel-id" class="lPanel">
  <button class="hideButton" type="button" onclick="hide_panel();">&#9747;</button>
  <span>I am a left panel!</span>
</div>
</template>

<script>
export default {
  name: 'LeftPanel',
  methods:{
    get_width: function (id) {
      var element = document.getElementById(id);
      var positionInfo = element.getBoundingClientRect();
      return positionInfo.width;
    },
    hide_panel: function() {
      document.getElementById("left-panel-id").style.left = "-400px";
      document.getElementById("right-panel-id").style.marginLeft = "0px";
      document.getElementById("right-panel-id").style.width= String(this.get_width('right-panel-id')+400)+"px";
    }
  }
}
</script>

<style scoped>
.lPanel {
  position: fixed;
  top: 0;
  left: -400px;
  background-color: #1b408c;
  color: #fff;
  width: 400px;
  height: 100%;
  transition: 0.8s;
}

.hideButton {
  float:right; /* make the button on the right side of the slide panel */
}
</style>
