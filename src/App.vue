<template>
  <main>
    <nav class="space"> 
      <Header/>
    </nav>
  <div id="app">
    
    <router-view/>
  </div>
  <Footer/>
  </main>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
  export default {
      name: 'App',
      components: {
        Header,
        Footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: auto;
  min-height: 100vh;
}
.space{
  display: flex;
  flex-direction: column;
}
</style>
