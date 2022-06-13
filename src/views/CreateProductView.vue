<template>
    <div>
        <div>
            <h1 class="title">
                Create a new product
            </h1>
            <hr />
            <br />
            <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="create-form">
                <b-form-group id="input-group-1"
                              label="The name:"
                              label-for="input-1">
                    <b-form-input id="input-1"
                                  v-model="form.name"
                                  type="text"
                                  placeholder="Enter name"
                                  required></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="The decription:" label-for="input-2">
                    <b-form-textarea id="input-2"
                                     v-model="form.description"
                                     placeholder="Enter description"
                                     rows="3"
                                     max-rows="6"
                                     required></b-form-textarea>
                </b-form-group>

                <b-form-group id="input-group-5" label="The brand:" label-for="input-5">
                    <b-form-input id="input-5"
                                  v-model="form.brand"
                                  placeholder="Enter brand name"
                                  required></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Category:" label-for="input-3">
                    <b-form-select id="input-3"
                                   v-model="properties"
                                   required>
                        <b-form-select-option v-for="cat in categorys" :key="cat.Id" :value="cat.Properties" v-model="cat.Properties" @click="onChange(`${cat.Name}`)">{{cat.Name}}</b-form-select-option>
                    </b-form-select>
                </b-form-group>

                <b-form-group v-for="prop in properties" :label="prop.Name" :key="prop.Name">
                    <b-form-input :id="prop.Name"
                                  :placeholder="'Enter ' + `${prop.Name}`"
                                  :type="prop.Type"
                                  required></b-form-input>
                </b-form-group>

                <b-button class="btn-margin" type="submit" variant="primary"  @click="$router.go(-1)">Submit</b-button>
                <b-button class="btn-margin" type="reset" variant="danger"  >Reset</b-button>
                <b-button class="btn-margin" variant="secondary" @click="$router.go(-1)">Back</b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { BootstrapVue } from 'bootstrap-vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(BootstrapVue, VueAxios, axios)

    export default {
        name: 'CreateView',
        data() {
            return {
                form: {
                    name: '',
                    description: '',
                    brand: '',
                    category: '',
                    _id: Math.ceil(Math.random() * 100000),
                    partner: parseInt(this.$route.params.brandId),
                },
                categorys: null,
                show: true,
                properties: null,
                brandId: this.$route.params.brandId
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault()
                console.log(JSON.stringify(this.form))
                axios
                    .get('https://apigatewaywocpim20220610120310.azurewebsites.net/Product/Upload?json=' + JSON.stringify(this.form))
                    .then(function (response) {
                        console.log(response);
                        alert("Succes!")
                    })
            },
            onReset(event) {
                event.preventDefault()
                // Reset our form values
                this.form.name = ''
                this.form.description = ''
                this.form.brand = ''
                this.properties = null
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            },
            getArray(properties) { //changed, was wihout event, 
                event.preventDefault()
                this.properties = properties
            },
            onChange(name) {
                console.log(this.form)
                this.form.category = name;
            }
        },
        mounted() {
            axios
                .get('https://apigatewaywocpim20220610120310.azurewebsites.net/Category/GetCategories')
                .then(response => {
                    this.categorys = response.data
                    console.warn(this.categorys)
                })
        }
    }
</script>

<style>
    .create-form {
        text-align: left;
        max-width: 90%;
    }

    .btn-margin {
        margin-right: 10px;
    }

    .title {
        margin-left: 25px;
        text-align: left;
    }
</style>