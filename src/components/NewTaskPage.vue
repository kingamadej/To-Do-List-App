<template>
    <div>
      <CloseNavbar :mode="mode" />

      
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

  
</style>
