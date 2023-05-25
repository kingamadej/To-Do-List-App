<template>
    <div class="navbar" :class="mode">
        <button class="btn" @click="showAlert">
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
    </div>

    <!--todo
        You should create 3 subpages in accordance with the project in figma: login, password reminder (we assume that the user will receive a password imposed from us after the reminder, so we do not create a separate page with setting a new password) and registration.

         So it should be created
         LoginPage.vue address: /login (current file)
         ResetPage.vue address: /reset
         RegisterPage.vue address: /register

         We edit the addresses in the router.js file

         How should each of these subpages be built? From components!
         Components can be successively: email line, password line, etc., i.e. consecutive files, e.g. Email.vue, Password.vue, etc.

         In the README file I added quick info on how to run the program and clone the repository.
    -->

</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['mode'])
    },
    methods: {
        showAlert() {
            alert("Musisz być zalogowany, aby mieć dostęp do ustawień kolorów!");
        },
    },
};
</script>

<style scoped>
    .navbar {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .green {
        background-color: #009900;
    }
    .blue {
        background-color: #0099FF;
    }
    .btn {
        border: none;
        color: white !important;
        font-size: 200%;
        cursor: pointer;
    }
</style>

