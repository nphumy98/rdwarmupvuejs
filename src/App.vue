<template>
  <div class="container">
    <Header></Header>
    <LeftPanel></LeftPanel>
    <RightPanel></RightPanel>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import LeftPanel from './components/LeftPanel.vue'
  import RightPanel from './components/RightPanel.vue'

  export default {
    name: 'app',
    components: {
      Header,
      LeftPanel,
      RightPanel
    }
  }
</script>
