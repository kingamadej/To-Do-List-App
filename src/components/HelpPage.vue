<template>
    <div class="navbar" :class="mode">
        <router-link to="/search">
            <button class="btn">
                <i class="fa-brands fa-searchengin"></i>
            </button>
        </router-link>

        <router-link to="/">
            <button class="btn">
                <i class="fa fa-close"></i>
            </button>
        </router-link>
    </div>

    <!--todo
        Here you should add components such as: gray lines (Line.vue), down arrows (this component should be created), individual questions - I suggest creating each question as a separate component, e.g. Question1.vue, Question2.vue etc.

         Important! Question titles must change color as the leading color changes. So remember to add :class="mode"

         What questions to add? You have to invent them. Put yourself in the shoes of a user who does not know the application - what questions would he ask? And then put yourself in the shoes of the programmer of this application and write the answers to these questions.

         You must create min. 5 questions with answers.

         Remember that according to the design in figma, the questions are to expand when you click on the arrows and close when you click them again.

         In the README file I added quick info on how to run the program and clone the repository. 
    -->
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data() {
            return {
                isSearchBarVisible: false
            };
        },
        computed: {
            ...mapState(['mode'])
        },
    };
</script>

<style scoped>
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
    .navbar {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
</style>