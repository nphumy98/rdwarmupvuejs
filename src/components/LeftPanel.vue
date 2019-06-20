<template>
<div id="left-panel-id" class="lPanel">
  <button class="hideButton" type="button" onclick="hide_panel();">&#9747;</button>
  <span>I am a left panel!</span>
</div>
</template>

<script>
export default {
  name: 'LeftPanel'
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
