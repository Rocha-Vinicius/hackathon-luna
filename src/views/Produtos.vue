    <template>
        <v-card class="mx-auto">
            <v-container fluid >
                <v-row dense>
                <v-col v-for="produto of listaProdutos" :key="produto.id" :cols=6 lg=3 mid=4 sm=6>
                <v-card class="teste">
                    <v-img
                    :src="produto.imagem"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                    >
                    <v-card-title v-text="produto.nome"></v-card-title>
                    </v-img>

                    <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon>mdi-bookmark</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-col>
                </v-row>
            </v-container>
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