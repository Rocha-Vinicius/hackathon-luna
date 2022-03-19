<template>
  <v-app>
    <Header />
    <v-main>
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
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
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap');

#app {
  color: #2c3e50;
  font-family: 'Oswald', sans-serif;
  background-image: linear-gradient(to right, #FF725E, #5ebfff);
}
a {
  text-decoration: none;
} 

.space {
  display: flex;
  flex-direction: column;
}
</style>
