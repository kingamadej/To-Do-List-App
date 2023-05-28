<template>
    <div>
        <ResetNavbar :mode="mode" />
    </div>
        <div class="container">
        <ResetForm />
        </div>
</template>

<script>
import ResetNavbar from './ResetNavbar.vue';
import ResetForm from './ResetForm.vue';

import { mapState } from 'vuex';

export default {
      components: {
        ResetNavbar,
        ResetForm,
      },
      computed: {
        // użyj mapState, aby pobierać wartość 'mode' z Vuex store
        ...mapState(['mode', 'selectedDate']),
        
    },
    data() {
      
  },
  methods: {
    
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
  .container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .active-blue {
    color: #0099FF;
}

.active-green {
    color: #009900;
}


</style>