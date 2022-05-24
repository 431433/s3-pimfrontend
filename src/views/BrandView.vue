<template>
    <div>
        <b-button class="btn-margin" type="submit" variant="primary"><router-link :to="'/create/' + `${this.brandid}`">Voeg nieuw product toe</router-link></b-button>
        <div v-for="item in list" v-bind:key="item.id" class="partners">
            <a>
                <b-container class="center rows" style="max-width: 1200px">
                    <b-row>
                        <b-col>{{item.Name}}</b-col>
                        <b-col cols="4"> <b-progress :max="max"><b-progress-bar :value="`${item.Completeness}`" :label="`${item.Completeness}%`" show-progress></b-progress-bar></b-progress></b-col>
                        <b-col>{{item.Description}}</b-col>
                        <b-col>{{item.Category}}</b-col>
                    </b-row>
                </b-container>
            </a>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios, axios)
    export default {
        name: 'BrandView',
        components: {
        },
        data() {
            return {
                list: undefined,
                brandid: this.$route.params.brandid
            };
        },
        mounted() {
            axios
                .get('https://apigatewaywocpim20220426105112.azurewebsites.net/Product/GetProduct?id=' + this.brandid)
                .then(response => {
                    console.warn(response.data)
                    this.list = response.data
                })
        }
    }
</script>

<style>
    .center {
        margin: auto;
        width: 70%;
        padding: 4px;
    }

    .rows {
        border-color: black;
        background-color: white;
        border-bottom-width: thin;
        border-bottom: solid;
        border-color: black;
    }

    template {
        background-color: whitesmoke;
    }

    .partners {
        margin-bottom: 10px;
    }

    .logo {
        max-height: 40px;
    }
</style>