<template>
  <v-container>
      <v-img src="../assets/pascoa1.png"/>

      <div class="cards">
        <v-card
          class="mx-auto"
          max-width="284"
          outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div to="/TelaLogin" class="botao">
              VENDEDORES
            </div>
            <v-list-item-subtitle>Voce empreeendedor terá a facilidade de vender pelo nosso APP</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="10"
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
        max-width="284"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title to="/TelaLogin" class="botao2">
              CHOCOLATRAS
            </v-list-item-title>
            <v-list-item-subtitle>Voce chocolatra nao pagará mais caro por um delicioso chocolate</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="10"
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
  }
</script>
<style scoped>
.h1{
  position: absolute;
}
.cards{
  display: flex;
  justify-content: center;
  margin-right: 50px;
  margin-bottom: 50px;
}
.card2{
  margin-left:100px;
}
.botao{
  display: flex;
  justify-content: center;
}
</style>