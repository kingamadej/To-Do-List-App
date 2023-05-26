<template>
    <div>
        <CloseNavbar :mode="mode">
            <template v-slot:search-input>
                <input type="text" placeholder="Search..." />
                <button class="btn">
                    <i class="fa-brands fa-searchengin"></i>
                </button>
            </template>
        </CloseNavbar>

    </div> 
</template>


<script>
  import CloseNavbar from './CloseNavbar.vue'
  import { mapMutations, mapState } from 'vuex';

  export default {
      components: {
        CloseNavbar,
      },
      computed: {
    // użyj funkcji mapState, aby pobierać wartość 'mode' z Vuex store
    ...mapState(['mode'])
    },
  };
</script>

<style scoped>
    input[type="text"] {
        height: 2rem;
        margin-left: 1rem;
    }
    .btn {
        border: none;
        color: white !important;
        font-size: 200%;
        cursor: pointer;
    }
  
</style>