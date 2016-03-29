<template>
<div class="sidebar-tabs collapsed">
  <ul role="tablist">
    <li v-link-active>
      <a v-link="{name: 'account', activeClass: 'active'}" role="tab" ><i class="material-icons">account_box</i></a>
    </li>
    <li v-link-active>
      <a v-link="{name: 'search', activeClass: 'active'}" role="tab"><i class="material-icons">search</i></a>
    </li>
    <li v-link-active>
      <a v-link="{name: 'messages', activeClass: 'active'}" role="tab"><i class="material-icons">mail_outline</i></a>
    </li>
    <li>
      <a href="#" @click.stop.prevent='login()'  ><i class="material-icons">lock_outline</i></a>
    </li>
    <!-- {{ $data | json }} -->
  </ul>
  <ul role="tablist">
    <li v-link-active>
      <a v-link="{ name: 'settings', activeClass: 'active'}" role="tab"><i class="material-icons">settings</i></a>
    </li>
  </ul>
</div>
</template>
<script>
import config from '../../server/config/config.js';
import { checkAuth } from '../javascripts/utils.js'; //eslint-disable-line
export default {
  components: {},
  methods: {
    login() {
      const self = this;
      const lock = new Auth0Lock(config.auth0.AUTH0_CLIENT_ID, config.auth0.AUTH0_DOMAIN); //eslint-disable-line
      lock.show((err, profile, token) => {
        if (err) {
           // Handle the error
          console.log(err); //eslint-disable-line
        } else {
         // Set the token and user profile in local storage
          localStorage.setItem('profile', JSON.stringify(profile));
          localStorage.setItem('id_token', token);
          self.authenticated = true;
        }
      });
    },
    logout() {
      const self = this;
     // To log out, we just need to remove the token and profile
     // from local storage
      localStorage.removeItem('id_token');
      localStorage.removeItem('profile');
      self.authenticated = false;
    },
    getSecretThing() {
      const jwtHeader = { Authorization: 'Bearer ' + localStorage.getItem('id_token') }; // eslint-disable-line
      this.$http.get('http://127.0.0.1:8080/secured/ping', (data) => {
        console.log(data); //eslint-disable-line
        this.secretThing = data.text;
      }, {
        headers: jwtHeader,
      }).error((err) => console.log(err)); //eslint-disable-line
    },
  },
  data() {
    return {
      authenticated: false,
      secretThing: '',
    };
  },
  ready() {
    this.authenticated = checkAuth();
  },
};
</script>
