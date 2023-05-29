<template>
    <div>
        <TaskNavbar :mode="mode" />
    </div>

    <div class="container">
        <div class="notes">
            <div class="notes-wrapper">
                <div class="note col-12 col-lg-4"><Note /></div>
                <div class="note col-12 col-lg-4"><Note /></div>
                <div class="note col-12 col-lg-4"><Note /></div>
            </div>
           
        </div>
    </div>

    <div class="circle-plus-wrapper">
        <router-link to="/new-note">
          <i class="fa-solid fa-circle-plus" :class="{ 'active-blue': mode === 'blue', 'active-green': mode === 'green' }"></i>
        </router-link>
      </div>
</template>

<script>
import TaskNavbar from './TaskNavbar.vue';
import Note from './Note.vue';
import { mapState } from 'vuex';

export default {
      components: {
        TaskNavbar,
        Note,
      },
      computed: {
        // użyj mapState, aby pobierać wartość 'mode' z Vuex store
        ...mapState(['mode', 'selectedDate']),
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
  .notes {
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 5%;
    padding-right: 5%;
  }
  .notes-wrapper {
    display: flex; /* Ustawia flexbox */
    flex-wrap: wrap; /* Zawijanie elementów, gdy wyczerpią dostępną szerokość */
    margin: 0;
  }

  .circle-plus-wrapper {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
  }
  .fa-circle-plus {
    font-size: 50px;
  }

  .active-blue {
    color: #0099FF;
}

.active-green {
    color: #009900;
}

</style>