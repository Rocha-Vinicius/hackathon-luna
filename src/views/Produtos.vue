<template>
<v-card class="mx-auto">
    <v-card class="mx-auto">
            <v-btn icon>
                <v-icon>mdi-cart</v-icon>
            </v-btn>
    <v-container fluid>
    <v-row dense>
        <v-col
        v-for="produto of listaProdutos"
        :key="produto.id"
        :cols="6"
        :xs="6"
        :sm="4"
        :md="3"
        :lg="2"
        :xl="1"
        >
        <v-card class="teste">
            <v-img
            :src="produto.imagem"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
            >
            </v-img>

            <v-card-title v-text="produto.nome"></v-card-title>

            <v-card-actions>
            <v-btn icon>
                <v-icon>mdi-cart</v-icon>
            </v-btn>
            <v-card-subtitle> R$: {{ produto.preco }} </v-card-subtitle>
            <v-btn color="orange lighten-2" text> Detalhes </v-btn>

            <v-btn icon @click="show = !show">
                <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
            </v-btn>
            </v-card-actions>
            <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
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
    };
},
created() {
    fetch(this.url)
    .then((resposta) => resposta.json())
    .then((json) => {
        this.listaProdutos = json;
    });
},
};
</script>

    <style scoped>
</style>