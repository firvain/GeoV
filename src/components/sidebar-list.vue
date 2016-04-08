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
      <li>
        <a href="#" @click.stop.prevent='getSecretThing'  ><i class="material-icons">lock_outline</i></a>
      </li>
      <li>
        <a href="#" @click.stop.prevent='getdata'  ><i class="material-icons">lock_outline</i></a>
      </li>
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
import { checkAuth } from '../javascripts/auth0.js'; //eslint-disable-line
export default {
  components: {},
  methods: {
    login() {
      const self = this;
      const lock = new Auth0Lock(config.auth0.AUTH0_CLIENT_ID, config.auth0.AUTH0_DOMAIN); //eslint-disable-line
      const options = {
        connections: ['Username-Password-Authentication'],
        gravatar: false,
      };
      lock.show(options, (err, profile, token) => {
        if (err) {
           // Handle the error
          console.log(err); //eslint-disable-line
        } else {
         // Set the token and user profile in local storage
          localStorage.setItem('profile', JSON.stringify(profile));
          localStorage.setItem('idToken', token);
          self.authenticated = true;
        }
      });
    },
    logout() {
     // To log out, we just need to remove the token and profile
     // from local storage
      localStorage.removeItem('idToken');
      localStorage.removeItem('profile');
      this.authenticated = false;
    },
    getSecretThing() {
      const jwtHeader = { Authorization: 'Bearer ' + localStorage.getItem('idToken') }; // eslint-disable-line
      this.$http.get('http://127.0.0.1:3000/api/users', (data) => {
        console.log(data); //eslint-disable-line
        this.secretThing = data.text;
      }, {
        headers: jwtHeader,
      })
      .catch((err) => console.log(err)); //eslint-disable-line
    },
    getdata() {
      const jwtHeader = { Authorization: 'Bearer ' + localStorage.getItem('idToken') }; // eslint-disable-line

      this.$http({
        url: 'http://127.0.0.1:3000/api/users',
        method: 'GET',
        headers: jwtHeader,
      })
      .then((response) => {
        // get status
        console.log(response.status);
        // get all headers
        response.headers();
        // get 'expires' header
        response.headers('expires');
        // set data on vm
        console.log(response.data);
      })
      .catch((ErrorCallback) => { //eslint-disable-line
        console.log(this.$parent);
        if (ErrorCallback.status === 401) {
          this.$dispatch('showSnackbar', { message: 'Please Login First' });
        } else {
          this.$dispatch('showSnackbar', { message: 'An error occured!' });
        }
      });
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
