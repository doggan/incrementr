<template>
  <v-app>
    <v-main>

      <!-- TODO(shyam): move to component (ItemList?) -->
      <v-container>
        <v-row class="text-center">
          <v-col>
            <time-display/>
          </v-col>
        </v-row>
        <v-row class="text-center no-gutters">
          <v-col sm="8" offset-sm="2">
            <draggable
              :list="items"
              class="item-list"
              ghost-class="ghost"
            >
              <div class="item-list-element" v-for="item in items" :key="item.id">
                <v-row>
                  <v-col cols="8">
                    <span class="item-text">{{ item.text }}</span>
                  </v-col><v-col cols="2">
                    <span class="item-count">{{ item.count }}</span>
                  </v-col><v-col cols="2">
                    <span class="item-adjust">
                      <v-btn icon color="pink" @click="adjustCount(item, -1)">
                        <v-icon>mdi-minus</v-icon>
                      </v-btn>
                      <v-btn icon color="pink" @click="adjustCount(item, 1)">
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </span>
                  </v-col>
                </v-row>
              </div>
            </draggable>
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
import TimeDisplay from './components/TimeDisplay';
import draggable from 'vuedraggable';

export default {
  name: 'App',

  components: {
    CreationDialog,
    TimeDisplay,
    draggable,
  },

  mounted: function() {
    // TODO(shyam): testing
    this.addItem("push-ups");
    this.addItem("sit-ups");
    this.addItem("back crunches");
  },

  data() {
    return {
      showCreationDialog: false,
    }
  },

  computed: {
    items: {
      get: function() {
        return this.$store.getters.items;
      },
      set: function(items) {
        this.$store.dispatch('updateItems', items);
      }
    }
  },

  methods: {
    addItem(text) {
      this.$store.dispatch('addItem', text);
    },

    adjustCount(item, deltaCount) {
      item.count += deltaCount;
    }
  }
};
</script>

<style scoped>
.item-list-element {
  border-style: solid;
  border-width: 1px;
  border-color: red;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style> 