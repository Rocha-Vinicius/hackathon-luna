<template>
<v-container class="caixa mx-auto ma-3">
  <h2 class="text-center ma-4">LOGIN</h2>
    <v-form
      class="form"
      ref="form"
      v-model="valid"
      lazy-validation
    >

      <v-text-field v-model="name" label="Nome" :rules="nameRules" required > </v-text-field> 

      <v-text-field v-model="password" type="password" label="Senha" :rules="passwordRules" required > </v-text-field> 

      <v-btn
        :disabled="!valid"
        color="teal lighten-1"
        class=""
        dense
        width="120px"
        @click="logar"
      >
        Entrar
      </v-btn>

      <router-link to="/cadastro">
        <v-btn
          width="120px"
          color="deep-orange accent-4"
        >
          Cadastre-se
        </v-btn>
      </router-link>

      <h2 class="text-center ma-4">{{erroLogin}}</h2>
    </v-form>
</v-container>

</template>

<script>
  export default {
    name: "LoginUsuario",
    data: () => ({
      valid: true,
      name: '',
      password: '',
      erroLogin: '',
      nameRules: [
        v => !!v || 'O nome é obrigatório',
      ],
      passwordRules: [
        v => !!v || 'A senha é obrigatória',
      ]
    }),
    methods: {
      logar() {
          if(this.$refs.form.validate()){
            if(this.name== 'time08' && this.password== '123')
              this.$router.push({ name: "TelaInicial" });
            else
              this.erroLogin = "Login inválido! Tente novamente."
          }      
      },
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style scoped>
  .caixa {
    text-align: center;
    
  }

  .v-btn a {
    text-decoration: none;
  }
  .v-btn {
    margin-bottom: 10px;
    text-align: center;
  }
</style>
