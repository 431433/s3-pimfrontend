<template>
    <div class="overview">
        <div>
            <h1 style="text-align:left">
                Products overview
            </h1>
            <hr />
            <br />
        </div>
        <b-button class="btn-margin" type="submit" variant="primary" style="margin-bottom: 50px;"><router-link :to="'/create/' + `${this.brandid}`"><p class="btn">Voeg nieuw product toe</p></router-link></b-button>
        <br />

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

<style scoped>
    .center {
        margin: auto;
        width: 70%;
        padding: 4px;
    }

    .rows {
        border-color: black;
        background-color: white;
        border-bottom: solid;
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

    .overview{
        margin-top: 60px;
    }

    .btn{
        color: white;
        margin:-7px;
    }

    .btn :hover{
        color: black;
    }
</style>