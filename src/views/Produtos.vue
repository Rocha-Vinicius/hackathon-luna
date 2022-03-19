<template>
<v-card class="mx-auto">
    <v-card class="mx-auto">
        <p class="carrinho">
        <v-btn icon>
        <div>
            {{ contador }}
        </div>
        <v-icon>mdi-cart</v-icon>
        </v-btn>
    </p>
    <v-container fluid>
    <v-row dense>
        <v-col
        v-for="produto of listaProdutos"
        :key="produto.id"
        :cols="12"
        :sm="6"
        :md="6"
        :lg="3"
        >
        <v-card :id="produto.id" class="teste">
            <v-img
            :src="produto.imagem"
            class="white--text align-end"
            height="200px"
            >
            </v-img>

            <v-card-title class="nomeproduto">
                {{produto.nome}}
            </v-card-title>
            
            <div>
            <v-card-actions>
            <v-btn icon @click=contadorProdutos()>
                <v-icon>mdi-cart</v-icon>
            </v-btn>
            <v-card-subtitle class="preco"> R$: {{ produto.preco }} </v-card-subtitle>
            </v-card-actions>
            </div>

            <v-expand-transition>
            <div>
                <v-divider></v-divider>
                <v-card-text class="descricao">
                <p>Detalhes:</p>
                <p>Vendedor: {{ produto.local.nome }}</p>
                <p>Endereço: {{ produto.local.endereco }}</p>
                </v-card-text>
            </div>
            </v-expand-transition>
        </v-card>
        </v-col>
    </v-row>
    </v-container>
    </v-card>
</v-card>
</template>

<script>

export default {
name: "Produtos",
data() {
    return {
    listaProdutos: [],
    url: "https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json",
    show: false,
    contador: 0
    };
},
created() {
    fetch(this.url)
    .then((resposta) => resposta.json())
    .then((json) => {
        this.listaProdutos = json;
    });
},
methods:{
        contadorProdutos(){
            this.contador++
        },
        expandirDetalhes(){
            this.show = !this.show;
        }
}
};
</script>

<style scoped>
    .carrinho{
        text-align: right;
    };
    .infosprodutos{
        align-content: right;
    }
    .preco{
        font-size: 25px;
    }
    .descricao{
        font-size: 15px;
    }
    .nomeproduto{
        font-size: 30px;
    }
</style>