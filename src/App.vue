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
              v-model="items"
              v-bind="dragOptions"
              class="item-list"
              ghost-class="ghost"
              handle=".handle"
            >
              <transition-group type="transition">
                <div v-for="item in items" :key="item.id">
                  <item-element class="item-list-element" v-bind:item="item"/>
                </div>
              </transition-group>
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
import ItemElement from './components/ItemElement';
import TimeDisplay from './components/TimeDisplay';
import draggable from 'vuedraggable';

export default {
  name: 'App',

  components: {
    CreationDialog,
    ItemElement,
    TimeDisplay,
    draggable,
  },

  mounted: function() {
    // TODO(shyam): testing
    this.addItem("push-ups");
    this.addItem("sit-ups");
    this.addItem("back crunches");
    this.addItem("jumping jacks");
    this.addItem("burpees");
    this.addItem("lunges");
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
    },

    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },

  methods: {
    addItem(text) {
      this.$store.dispatch('addItem', text);
    },
  }
};
</script>

<style scoped>
.item-list-element {
  border-style: solid;
  border-width: 1px;
  border-color: black;
  border-top: none;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style> 