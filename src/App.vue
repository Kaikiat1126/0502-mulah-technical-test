<template>
  <router-view></router-view>
  <Footer class="footer"></Footer>
</template>
<script>
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  /* background-color: white; */
  text-align: center;
}
</style>
