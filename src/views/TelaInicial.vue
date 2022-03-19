<template>
  <v-container>
      <v-img src="../assets/pascoa1.png"/>

      <div class="cards">
        <v-card
          class="mx-auto"
          max-width="344"
          outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              VENDEDORES
            </div>
            <v-list-item-title class="text-h5 mb-1">
              Headline 5
            </v-list-item-title>
            <v-list-item-subtitle>Voce empreeendedor terá a facilidade de vender pelo nosso APP</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="80"
            color="grey"
          ></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn
            outlined
            rounded
            text
          >
            quero vender
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="card2"
        max-width="344"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              VENDEDORES
            </div>
            <v-list-item-title class="text-h5 mb-1">
              CHOCOLATRAS
            </v-list-item-title>
            <v-list-item-subtitle>Voce chocolatra nao pagará mais caro por um delicioso chocolate</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="80"
            color="grey"
          ></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn
            outlined
            rounded
            text
          >
            Quero chocolate
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '../assets/pascoa1.png',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>
<style scoped>
.h1{
  position: absolute;
}
.cards{
  display: flex;
  margin-right: 50px;
}
.card2{
  position: ;
}
</style>