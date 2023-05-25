<template>
    <div>
        <TaskNavbar :mode="mode" />

        <p style="text-align: center;">Strona Główna</p>
    </div>
</template>

<script>
import TaskNavbar from './TaskNavbar.vue'
import { mapState } from 'vuex';

export default {
      components: {
        TaskNavbar
      },
      computed: {
        // użyj mapState, aby pobierać wartość 'mode' z Vuex store
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
</style>