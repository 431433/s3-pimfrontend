<template>
    <div>
        <Dashboard />
        <div v-for="item in list" v-bind:key="item.id" class="partners">
            <router-link :to="'/brand/' + `${item.Id}`">
                <b-container class="center rows" style="max-width: 1200px">
                    <b-row>
                        <b-col><img :src="`data:image/png;base64,${item.Icon}`" class="logo" alt="" /></b-col>
                        <b-col>{{item.Name}}</b-col>
                        <b-col>{{item.Country}}</b-col>
                    </b-row>
                </b-container>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Dashboard from '@/components/partials/Dashboard.vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios, axios)
    export default {
        name: 'OverviewView',
        components: {
            Dashboard,
        },
        data() {
            return {
                AHValue: 80,
                JumboValue: 75,
                EtosValue: 35,
                AmazonValue: 100,
                max: 100,
                list: undefined
            };
        },
        mounted() {
            axios
                .get('https://apigatewaywocpim20220610120310.azurewebsites.net/brand/getbrands')
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

    .rows{
        border-color: black;
        background-color: white;
        border-bottom: solid;
    }
    template {
        background-color: whitesmoke;
    }
    .partners{
        margin-bottom: 10px;
    }

    .logo{
        max-height: 50px;
    }
</style>