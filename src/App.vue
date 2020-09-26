<template>
  <v-app>
    <v-main>

      <!-- TODO(shyam): move to component -->
      <v-container>
        <v-row class="text-center">
          <v-col class="mb-4">
            <ul class="todo-list">
              <li
                v-for="item in items"
                class="todo"
                :key="item.id"
              >
              {{ item.count }} - {{ item.title }}
              <v-btn icon color="pink" @click="adjustCount(item, -1)">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <v-btn icon color="pink" @click="adjustCount(item, 1)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
                            <!-- @keyup.enter="doneEdit(todo)"
                  @keyup.esc="cancelEdit(todo)" -->
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>

      <creation-dialog
        v-model="showCreationDialog"
        @onAddItem="addItem($event)"/>
      <v-btn
        fixed
        dark
        fab
        bottom
        right
        color="pink"
        @click="showCreationDialog = !showCreationDialog"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-main>
  </v-app>
</template>

<script>
import CreationDialog from './components/CreationDialog';

export default {
  name: 'App',

  components: {
    CreationDialog,
  },

  mounted: function() {
    this.addItem("push-ups");
    this.addItem("sit-ups");
    this.addItem("back crunches");
  },

  data() {
    return {
      showCreationDialog: false,

      // TODO(shyam): move to a component and expose API?
      items: [],
    }
  },

  methods: {
    addItem(title) {
      console.log("### add new item: " + title);

      this.items.push({
        id: this.items.length,
        title: title,
        count: 0,
      });
    },

    adjustCount(item, deltaCount) {
      item.count += deltaCount;
    }
  }
};
</script>
