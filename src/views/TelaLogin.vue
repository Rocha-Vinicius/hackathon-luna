<template>
  <v-container class="caixa mx-auto ma-3">
  <h2 class="text-center ma-4">LOGIN</h2>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="ID"
      required
    ></v-text-field>

   <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Senha"
        hint="É necessária uma senha com no mínimo 8 caracteres."
        counter
        @click:append="show1 = !show1"
    ></v-text-field>
    
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'É necessário concordar com os termos e condições.']"
      label="Você concorda com a nossa Política de Privacidade?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Entrar
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Cadastrar
    </v-btn>
  </v-form>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'A ID é necessária.',
        v => (v && v.length <= 10) || 'É necessário um login com 10 caracteres.',
      ],
      show1: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'A senha é necessária.',
        min: v => v.length >= 8 || 'É necessário um login com 8 caracteres.',
      },
      checkbox: false
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      Cadastro () {
        this.$refs.form.Cadastrar()
      },
    },
  }
</script>