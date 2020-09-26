<template>
  <v-dialog
    v-model="isVisible"
    max-width="500px"
  >
    <v-card>
      <v-card-title>
        Add an item...
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="textValue"
          single-line
          autofocus
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="onCancel">Cancel</v-btn>
        <v-btn color="primary" @click="onAdd" :disabled="!isAddEnabled">Add</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'creation-dialog',

    props: {
      value: {
        type: Boolean,
        required: true,
      }
    },

    computed: {
      isVisible: {
        get () {
          return this.value;
        },
        set (value) {
          this.$emit('input', value);
        }
      },

      isAddEnabled: function() {
        return this.textValue.length > 0;
      }
    },

    // TODO(shyam): trim textValue so there are no trailing spaces, etc.
    
    data() {
      return {
        textValue: "",
      }
    },

    methods: {
      onAdd() {
        this.$emit('onAddItem', this.textValue);
        this.onCancel();
      },

      onCancel() {
        this.isVisible = false;
        this.textValue = "";
      },
    }
  }
</script>