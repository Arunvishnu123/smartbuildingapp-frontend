<template>
  <div>
    <w-dialog
      v-model="deleteHeater"
      title="Delete Heater"
      persistent
      :width="550"
    >
      Do you want delete this Heater?

      <template #actions>
        <div class="spacer" />
        <w-button
          class="mr2"
          @click="$store.state.deleteHeaterConfirm = false"
          bg-color="error"
        >
          No
        </w-button>
        <w-button
          @click="$store.state.deleteHeaterConfirm = false"
          bg-color="success"
        >
          Yes
        </w-button>
      </template>
    </w-dialog>
  </div>
</template>

<script>
import store from "../../store/index";
export default {
  data: () => ({
    dialog: {
      show: false,
    },
  }),

  computed: {
    deleteHeater: {
      get() {
        return store.state.deleteHeaterConfirm;
      },
    },
  },
};
</script>

<style scoped></style>
