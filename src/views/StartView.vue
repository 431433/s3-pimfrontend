<template>
    <div>
        <div style="margin-top:10%">
            <h2 v-if="!$auth.isAuthenticated">Please login to continue on this site</h2>
            <h3 v-if="$auth.isAuthenticated">Thanks for login in, on the left of your screen u can see al the options you are authorised to use.</h3>
        </div><br />

              <div v-if="$auth.isAuthenticated">
                  <h4 style="margin-top: 5%;">Your know records:</h4><br />
                  <div>
                      <div>
                          <img :src="$auth.user.picture"
                               alt="no profile picture found"
                               class="img-fluid profile-picture" />
                      </div>
                      <div style="margin-top: 10px">
                          <p class="lead text-muted">Name: {{ $auth.user.name }}</p>
                          <p class="lead text-muted">E-mail: {{ $auth.user.email }}</p>
                      </div>
                  </div>
              </div>
    </div>
</template>


<script>
    export default {
        name: 'StartView'
    }
</script>


<style scoped>
</style>