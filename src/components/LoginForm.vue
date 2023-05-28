<template>
  <div class="login-container">
    <h3>Zaloguj się</h3>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name"><i class="fa fa-user" aria-hidden="true"></i></label>
        <input type="text" id="login" v-model="login" required placeholder="login">
      </div>
      <div class="form-group">
        <label for="password"><i class="fa fa-key" aria-hidden="true"></i></label>
        <input type="password" id="password" v-model="password" required placeholder="hasło">
      </div>
      <button type="submit" :class="mode">Zaloguj się</button>
      <small><router-link to="/ResetPage">Nie pamiętasz hasła?</router-link></small>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['mode', 'selectedDate']),
  },
  data() {
    return {
      login: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      // Logowanie przez API
    }
  }
};
</script>

<style scoped> 
.green {
    background-color: #009900;  
  }
  .blue {
    background-color: #0099FF;
  }
.login-container {
  min-width: 490px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
}
@media screen and (max-width: 500px) {
.login-container {
    min-width: 0px;
    width: 100%;
  }
}
form {
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

label {
  margin-right: 10px;
  width: 50px;
}

input {
  flex: 1;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
i{
  font-size: 2rem;
}
small {
  margin-top: 15px;
  text-align: right;
}

small a {
  color: dimgray;
}

small a:hover {
  text-decoration: none;
  color: gray;
}
</style>
