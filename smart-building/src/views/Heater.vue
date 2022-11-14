<template>
  <div>
    <w-app>
      <HeaderComponentVue :callAddNew="callHeaterPost" :headerTitle="title" />
      <!-- <NoRoomAddedComponentVue /> -->
      <w-grid columns="3" gap="3" class="wrapper">
        <div class="room-display">
          <HeaterDataDisplayVue />
          <HeaterDataDisplayVue />
          <HeaterDataDisplayVue />
          <HeaterDataDisplayVue />
          <HeaterDataDisplayVue />
          <HeaterDataDisplayVue />
          <HeaterDataDisplayVue />
          <HeaterDataDisplayVue />
          <HeaterDataDisplayVue />
        </div>
      </w-grid>

      <AddHeaterComponentVue />
      <EditHeaterComponentVue />
      <DeleteHeaterConfirmVue />
    </w-app>
  </div>
</template>
    
    <script>
import HeaderComponentVue from "../components/Header/HeaderComponent.vue";
import HeaterDataDisplayVue from "../components/Heater/HeaterDataDisplay.vue";
import AddHeaterComponentVue from "../components/Heater/AddHeaterComponent.vue";
import EditHeaterComponentVue from "../components/Heater/EditHeaterComponent.vue";
import DeleteHeaterConfirmVue from "../components/Heater/DeleteConfirmComponent.vue";

import store from "../store/index";
export default {
  components: {
    HeaderComponentVue,
    HeaterDataDisplayVue,
    AddHeaterComponentVue,
    EditHeaterComponentVue,
    DeleteHeaterConfirmVue,
  },
  methods: {
    callHeaterPost() {
      store.state.addNewHeater = true;
      console.log(store.state.addNewHeater);
    },
  },
  data: () => ({
    title: "Add a new Heater",
  }),
};
</script>
    
    <style scoped>
.room-display {
  display: contents;
  align-content: center;
  text-align: justify;
  text-align: center;
  align-items: center;
}
</style>
    