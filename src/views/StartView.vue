<template>
    <div>
        <div style="margin-top: 15%;">
            <h2 v-if="!$auth.isAuthenticated">Please login to continue on this site</h2>
            <h3 v-if="$auth.isAuthenticated">Thanks for login in, on the left of your screen u can see al the options you are authorised to use.</h3>
        </div>

        <div>
            <h4>Your profile</h4><hr />
            <button @click="login">Log in</button>
            <pre v-if="isAuthenticated">
            <code>{{ user }}</code>
      </pre>
        </div>
    </div>
</template>


<script>
    import { useAuth0 } from '@auth0/auth0-vue';
    export default {
        name: 'StartView',
        setup() {
            const { loginWithRedirect, user, isAuthenticated } = useAuth0();

            return {
                login: () => {
                    loginWithRedirect();
                },
                user,
                isAuthenticated
            };
        }
    }
</script>


<style>
    .center{
        justify-content: center;
        position: absolute;
        align-content: center;
    }
</style>