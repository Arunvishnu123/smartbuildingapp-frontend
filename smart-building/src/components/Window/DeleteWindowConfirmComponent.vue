<template>
  <div>
    <w-dialog
      v-model="deleteWindow"
      title="Delete Window"
      persistent
      :width="550"
    >
      Do you want delete this Window?

      <template #actions>
        <div class="spacer" />
        <w-button
          class="mr2"
          @click="$store.state.deleteWindowConfirm = false"
          bg-color="error"
        >
          No
        </w-button>
        <w-button
          @click="$store.state.deleteWindowConfirm = false"
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
    deleteWindow: {
      get() {
        return store.state.deleteWindowConfirm;
      },
    },
  },
};
</script>

<style scoped></style>
