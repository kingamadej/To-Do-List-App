<template>
    <div>
        <TaskNavbar :mode="mode" />

        <div class="container">
          <Calendar />
        </div>

        <div class="current-date" :class="{ 'active-blue': mode === 'blue', 'active-green': mode === 'green' }">
          <h3>{{ selectedDate }}</h3>
        </div>

        <div v-for="(task, index) in tasksForSelectedDate" :key="index">
          <component :is="task.checked ? 'TaskDone' : 'TaskToDo'" :task="task" @toggle-task="toggleTask" />
        </div>
        
        
        

    </div>

    <div class="circle-plus-wrapper">
      <router-link to="/new-task">
        <i class="fa-solid fa-circle-plus" :class="{ 'active-blue': mode === 'blue', 'active-green': mode === 'green' }"></i>
      </router-link>
    </div>
</template>

<script>
import Calendar from './Calendar.vue';
import TaskNavbar from './TaskNavbar.vue';
import TaskToDo from './TaskToDo.vue';
import TaskDone from './TaskDone.vue';
import { mapState } from 'vuex';

export default {
      components: {
        TaskNavbar,
        Calendar,
        TaskToDo,
        TaskDone,
      },
      computed: {
        // użyj mapState, aby pobierać wartość 'mode' z Vuex store
        ...mapState(['mode', 'selectedDate']),
        tasksForSelectedDate() {
        return this.tasks.filter(task => task.date === this.selectedDate);
      }
    },
    data() {
      return {
        tasks: [
          { id: 1, checked: true, content: 'Task 1', hour: '6:00', date: '25.05.2023'},
          { id: 2, checked: false, content: 'Task 2', hour: '7:00', date: '26.05.2023'},
          { id: 3, checked: false, content: 'Task 3', hour: '8:00', date: '27.05.2023' },
          // symulacja bazy danych, przekazuje odpowiednią godzinę, datę i content do treści TaskDone i TaskToDo
          // przy pisaniu backendu trzeba będzie zadbać o status zadania: checked - flase lub true, i updatetować ten stan do bazy danych - wtedy również status zadania zostanie automatycznie "zapamiętany", nawet przy odświeżeniu strony, czy ponownym zalogowaniu. 
        ]
      }
  },
  methods: {
    toggleTask(taskId) {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.checked = !task.checked;
      }
    },
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
  .current-date {
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 3%;
    padding-bottom: 1%;
  }
  .active-blue {
    color: #0099FF;
}

.active-green {
    color: #009900;
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
</style>