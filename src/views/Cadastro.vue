<template>

  <div class="Cadastro"> 
    <h2 class="text-h5 text-center mb-5 mt-5">Cadastro</h2>

                 <div class="botoes">
                        <v-btn
                            class="Compra"
                            color="teal lighten-1"
                            elevation="2"
                            medium
                            rounded
                            @click="cliente"
                        >
                            Quero Comprar
                        </v-btn> 
                        <v-btn @click="vendedor"
                            class="Vender"
                            color="teal lighten-1"
                            elevation="2"
                            medium
                            rounded
                            
                        >
                            Quero Vender
                        </v-btn>
                       
                    </div>  
      <v-form class="registro-box" ref="form" >
                    <v-text-field v-if="empresa" v-model="nomeEmpresa" label="Nome da Empresa" required>
                    </v-text-field>

                    <v-text-field v-else v-model="nome" label="Usuário" required>
                    </v-text-field>
                   
                    <v-text-field v-model="password" type="password" label="Senha" required>
                    </v-text-field>

                    <v-text-field v-model="telefone" type="number" label="Telefone" required>
                    </v-text-field>
                   
                    <v-text-field v-if="doc" type="number" v-model="cnpj" label="Cnpj" required>
                    </v-text-field>
                   
                    <v-text-field v-model="email" type="email" label="E-mail" required>
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
            nomeEmpresa: "",
            password: "",
            telefone: "",
            email: "",
            endereco: "",
            cnpj:"",
            doc: false,
            empresa: false,
            checkbox: false,
            loading:false
        };
    },
    methods: {
        vendedor(){
            this.doc=true
            this.empresa=true
        },
        cliente(){
            this.doc=false
            this.empresa=false
        },
        push() {
          this.loading=true
          setTimeout(()=>{
          this.$router.push('/login')
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

.Cadastro {
    text-align: center;
    margin: auto;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 100px;
}

btn{
    background-image: linear-gradient(to right, #FF725E, #5ebfff);
}
.botoes a{
  text-decoration: none;
  margin-top: 20px;
}
</style>