<template>
  <div class="footer">
    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
.footer{
  margin-top: 50px;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>