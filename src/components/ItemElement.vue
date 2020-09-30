<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-icon class="handle">mdi-drag-horizontal-variant</v-icon>
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
  </v-container>
</template>

<script>
export default {
  name: 'item-element',

  props: {
    item: {
      required: true,
    }
  },

  methods: {
    adjustCount(item, deltaCount) {
      item.count += deltaCount;
    }
  },
};
</script>

<style scoped>
.handle {
  float: left;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: move;
}
</style>