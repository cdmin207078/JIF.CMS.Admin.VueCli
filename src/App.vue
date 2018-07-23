<template>
<div id="app">
  <div class="be-wrapper">
    <top-bar></top-bar>
    <silder-bar></silder-bar>
    <div>
      <div class="be-content">
        <div class="main-content container-fluid">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SilderBar from '@/components/_shared/SilderBar'
import TopBar from '@/components/_shared/TopBar'

export default {
  components: {
    SilderBar,
    TopBar
  },
  name: 'App',
  mounted () {
    // console.log('你好')
  }
}
</script>

<style scoped>

</style>
