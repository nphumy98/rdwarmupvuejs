<template>
<header>
  <button type="button" onclick="show_panel();">></button>
</header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>
