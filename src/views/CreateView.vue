<template>
    <div>
        <div>
            <h1 class="title">
                Create a new product
            </h1>
            <hr />
            <br />
        </div>

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



            <b-form-group id="input-group-3" label="Category:" label-for="input-3">
                <b-form-select id="input-3"
                               v-model="form.category"
                               :options="categorys"
                               required></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-5" label="The brand:" label-for="input-5">
                <b-form-input id="input-5"
                              v-model="form.brand"
                              placeholder="Enter brand name"
                              required></b-form-input>
            </b-form-group>

            <!--<b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group v-model="form.checked"
                                       id="checkboxes-4"
                                       :aria-describedby="ariaDescribedby">
                    <b-form-checkbox value="yes">Everything correct?</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>-->

            <b-button class="btn-margin" type="submit" variant="primary">Submit</b-button>
            <b-button class="btn-margin" type="reset" variant="danger">Reset</b-button>
        </b-form>
        <!--<b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>-->
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
              category: null,
              _id: Math.ceil(Math.random() * 100000)
              //checked: []
            },
              categorys: [{ text: 'Select One', value: null }, 'Fruit', 'Battery', 'Dairy', 'Sweets'],
            show: true
          }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault()
                alert("Succes!")
                axios.get('https://apigatewaywocpim20220426105112.azurewebsites.net/product/upload?json=' + JSON.stringify(this.form))
                    .then(function (response) {
                        console.log(response);
                    })
            },
            onReset(event) {
                event.preventDefault()
                // Reset our form values
                this.form.name = ''
                this.form.description = ''
                this.form.brand = ''
                this.form.category = null
                //this.form.checked = ['no']
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        },
        mounted() {
            axios
                .get('https://apigatewaywocpim20220426105112.azurewebsites.net/product/getproducts')
                .then(response => {
                    console.warn(response.data)
                    this.list = response.data
                })
        }
    }
</script>

<style>
    .create-form {
        text-align: left;
    }

    .btn-margin {
        margin-right: 10px;
    }

    .title {
        margin-left: 25px;
        text-align: left;
    }
</style>