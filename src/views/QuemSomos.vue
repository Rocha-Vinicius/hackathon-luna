<template>
    <v-container class="quem-somos">
        <h1 class=" text-center mb-3 mt-5">QUEM SOMOS</h1>
         <v-img class="inicio-imagem mb-4" src="https://i.ytimg.com/vi/5QIsyuVqbNQ/mqdefault.jpg">
        </v-img>
        <p>Somos a equipe 08 da 10º Edição Luna do Hackathon Decola Iteris.
        
        <p class="link"><a href="www.iteris.com.br">Iteris</a>.</p>
        
        <p>Conheça os desenvolvedores: </p>

        <v-simple-table>
            <div>
                <tbody>
                <tr v-for="desenvolvedor of desenvolvedores" :key="desenvolvedor.id" >
                    <td>
                        <v-avatar size=60 mb-50 mt-5>
                            <img
                                :src="desenvolvedor.avatar" 
                                :alt="desenvolvedor.nome"
                            >
                        </v-avatar>
                    </td>
                    <td pl-5 ><a :href="desenvolvedor.link"> {{desenvolvedor.nome}}</a></td>
                </tr>
                </tbody>
            </div>
        </v-simple-table>

    </v-container>

</template>

<script>
export default {
    name: 'QuemSomos',

    data() {
        return {
            desenvolvedores: [
                {
                    "id": 1,
                    "link": "https://github.com/GuUrzua",
                    "nome": "Gustavo Urzua",
                    "avatar": "https://avatars.githubusercontent.com/u/75682226?v=4"
                },
                {
                    "id": 2,
                    "link": "https://github.com/larissambasso",
                    "nome": "Larissa Basso",
                    "avatar": "https://avatars.githubusercontent.com/u/71561691?v=4"
                },
                {
                    "id": 3,
                    "link": "https://github.com/MarianaThomaz",
                    "nome": "Mariana Thomaz",
                    "avatar": "https://github.com/MarianaThomaz.png"
                },
                {
                   "id": 4,
                    "link": "https://github.com/RhamandaLima",
                    "nome": "Rhamanda Lima",
                    "avatar": "https://avatars.githubusercontent.com/u/85266632?v=4"
                },
                {
                    "id": 5,
                    "link": "https://github.com/Rocha-Vinicius/",
                    "nome": "Vinicius Rocha",
                    "avatar": "https://avatars.githubusercontent.com/u/68117720?v=4"
                }
            ]
        };
    },
    
};

</script>

<style scoped>
    .quem-somos {
        color: #2c3e50;
        font-family: 'Oswald', sans-serif;
        background-color: #EEEEEE;
        text-align: center;
    }
    
    .quem-somos a {
        text-decoration: none;
    }

    .inicio-imagem {
        border-radius: 5px;
    }
</style>
