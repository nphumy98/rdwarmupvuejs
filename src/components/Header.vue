<template>
<header>
  <button type="button" onclick="show_panel();">></button>
</header>
</template>

<script>
export default {
  name: 'Header',
  methods:{
    get_width: function (id) {
      var element = document.getElementById(id);
      var positionInfo = element.getBoundingClientRect();
      return positionInfo.width;
    },
    show_panel: function() {
      document.getElementById("left-panel-id").style.left = "0px";
      document.getElementById("right-panel-id").style.marginLeft = "400px";
      document.getElementById("right-panel-id").style.width= String(this.get_width('right-panel-id')-400)+"px";
    }
  }
}
</script>
