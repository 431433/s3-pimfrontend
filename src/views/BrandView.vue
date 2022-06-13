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
        <b-button class="back" variant="secondary" @click="$router.go(-1)">Back</b-button>

        <div style="margin-left: 10%;">
            <b-container fluid>
                <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4">
                    <b-card-group v-for="item in list" v-bind:key="item._id" class="partners" deck>
                        <b-card :title="item.name">
                            <b-card-text style="margin-bottom:30px;">
                                {{item.description}}
                            </b-card-text>
                            <b-form @submit="onSubmit">
                                <b-button variant="danger" @click="onSubmit($event, item._id)" class="btn-align">Delete</b-button>
                            </b-form>
                            <template #footer>
                                <small class="text-muted">{{item.category}}</small>
                            </template>
                        </b-card>
                    </b-card-group>
                </b-row>
            </b-container>
            <div v-if="!list || !list.length">
                <h2 class="msg">No products were yet made</h2>
            </div>
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
        methods: {
            onSubmit(event, id) {
                event.preventDefault()
                alert("Succes!")
                axios.get('https://apigatewaywocpim20220610120310.azurewebsites.net/Product/Deleteproduct?id=' + parseInt(id))
                    .then(function (response) {
                        console.log(response);
                        console.log(id);
                    })
            }
        },
        async mounted() {
            axios
                .get('https://apigatewaywocpim20220610120310.azurewebsites.net/Product/GetProduct?id=' + this.brandid)
                .then(response => {
                    console.log(response.data)
                    console.log(this.list),
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
        margin: 10px;
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

    .btn-align {
        position: absolute;
        right: 15px;
        bottom: 60px;
    }

    .btn-margin{
        margin-left: -6%;
    }

    .back {
        position: absolute;
        left:20%;
        top: 20%;
    }

    .msg{
        text-align: center;
        margin-left: -13%;
    }
</style>