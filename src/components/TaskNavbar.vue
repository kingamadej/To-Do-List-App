<template>
    <div class="navbar" :class="mode">
        <div class="left-buttons">
            <button class="btn-1" :class="{ 'active-blue': mode === 'blue', 'active-green': mode === 'green' }">Zadania</button>
            <button class="btn-1">Notatki</button>
        </div>
        <div class="right-buttons">
            <button class="btn">
                <i class="fa-brands fa-searchengin"></i>
            </button>
            <router-link to="/settings">
                <button class="btn">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        computed: {
            ...mapState(['mode'])
        }
    };
</script>

<style scoped>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .btn {
        border: none;
        color: white !important;
        font-size: 200%;
        cursor: pointer;
    }
    .btn-1 {
        font-size: 150%;
        border: 2px solid white;
        background-color: transparent;
        color: white;
        font-size: 150%;
        cursor: pointer;
        margin-right: 1rem;
    }
    .active-blue {
        background-color: white;
        color: #0099FF;
    }
    
    .active-green {
        background-color: white;
        color: #009900;
    }
</style>
