<template>
  <div class="Cadastro"> 
    <h2 class="text-h5 text-center mb-3 mt-5">Cadastro</h2>

        <div class="mb-0">
            <div class="div-left">
                <v-btn
                elevation="9"
                rounded
                >QueroComprar
                </v-btn>
            </div>
            <div class="div-right" >
                <v-btn 
                elevation="9"
                rounded
                >QueroVender</v-btn>
            </div>
        </div>

      <v-form class="registro-box" ref="form" >
                    <v-text-field v-model="nome" label="Usuário" required>
                    </v-text-field>
                    <v-text-field v-model="password" type="password" label="Senha" required>
                    </v-text-field>
                   
                    </v-text-field>

                    <v-text-field v-model="cnpj" label="Cnpj" required>
                    </v-text-field>
                    
                    <v-text-field v-model="email" label="E-mail" required>
                    </v-text-field>
                    <v-text-field v-model="endereco" label="Endereço" required>
                    </v-text-field>

                    <v-checkbox
                        v-model="checkbox"
                        label="Concordo com os termos de uso"
                        required
                    >
                    </v-checkbox>
    </v-form>  
    
      <div class="botoes">
                        <v-btn
                            class="botaoLimpar"
                            color="teal lighten-1"
                            elevation="2"
                            medium
                            outlined
                            rounded
                            @click="limpar"
                        >
                            Limpar
                        </v-btn> 
                        <v-btn @click="push"
                            class="botaoCadastrar"
                            color="teal lighten-1"
                            elevation="2"
                            medium
                            outlined
                            rounded
                            :disabled= "loading"
                        >
                            {{ loading ? "LOADING..." : "Cadastrar" }}
                        </v-btn>
                       
                    </div>   
  </div>
</template>

<script>
export default {
    name: "Cadastro",
    data() {
        return {
            nome: "",
            password: "",
            numeroTelefone: "",
            email: "",
            endereco: "",
            cnpj:"",
            checkbox: false,
            loading:false
        };
    },
    methods: {
        push() {
          this.loading=true
          setTimeout(()=>{
          this.$router.push('/analisecadastro')
          },1000)
           

        },
        limpar() {
            this.nome = "";
            this.numeroTelefone = "";
            this.email = "";
            this.endereco = "";
            this.password = "";
            this.time = "";
            this.checkbox = false;
        },
    },
};
</script>

<style>
.div-left{
  width:49%;
  min-height:auto;
  position:relative;
  float:left;
}

.div-right{
  width:49%;
  min-height:auto;
  position:relative;
  float:right
}

.CadastroUsuario {
    text-align: center;
    margin: auto;
    padding: 10px;
    margin-bottom: 100px;
}
.botoes a{
  text-decoration: none;
}
</style>