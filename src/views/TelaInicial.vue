<template>
  <v-container class="tela-inicial">
    <h1>ChocoLovers</h1>
      <v-img src="../assets/pascoa1.png"/>

      <div class="cards">
        <v-card
          class="mx-auto"
          max-width="284"
          outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            
            <div class="botao">
              VENDEDORES
            </div>
            
            <v-list-item-subtitle>Encontre o seu ChocoLover!</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <router-link to="/login">
          <v-btn
            outlined
            rounded
            text
            class="btn"
          >
            quero vender
          </v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
      <v-card class="card2"
        max-height="284px"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            
            <v-list-item-title class="botao2">
              CHOCOLATRAS
            </v-list-item-title>
            
            <v-list-item-subtitle>O cantinho do chocólatra!</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <router-link to="/login">
          <v-btn
            outlined
            rounded
            text
            class="btn"
          >
            Quero chocolate
          </v-btn>
           </router-link>
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

  .tela-inicial {
    text-align: center;
  }

  h1 {
    text-align: center;
  }

  .cards {
    display: flex;
    
    margin-right: 20px;
    margin-bottom: 50px;
  }

  .cards2 {
  justify-content: space-around;
  }
 
  .botao {
    display: flex;
    justify-content: center;
  }

  .btn {
    background-color: #5ebfff;
  }
</style>