<!-- eslint-disable prettier/prettier -->
<template>
  <div class="main">
    <w-app>
      <HeaderComponentVue :callAddNew="callBuildingPost" :headerTitle="title" />
      <!-- <NoBuildingFoundComponentVue /> -->
      <w-grid columns="3" gap="3" class="wrapper">
        <div v-for="building in buildings" :key="building.id">
          <BuildingDataDisplayComponentVue :building="building" />
        </div>
      </w-grid>
      <AddNewBuildingComponentVue />
    </w-app>
  </div>
</template>

<script>
//import NoBuildingFoundComponentVue from "../components/Building/NoBuildingAddedComponent.vue";
import HeaderComponentVue from "../components/Header/HeaderComponent.vue";
import BuildingDataDisplayComponentVue from "../components/Building/BuildingDataDisplayComponent.vue";
import AddNewBuildingComponentVue from "../components/Building/AddBuildingComponent.vue";
import store from "../store/index";
import axios from "axios";
import serverUrl from "../../variable";

export default {
  components: {
    HeaderComponentVue,
    // NoBuildingFoundComponentVue,
    BuildingDataDisplayComponentVue,
    AddNewBuildingComponentVue,
  },
  data: function () {
    return {
      buildings: [],
      title: "Add a new Building",
    };
  },
  computed: {},
  methods: {
    callBuildingPost() {
      store.state.addNewBuilding = true;
      console.log(store.state.addNewBuilding);
    },

    getBuildingData() {
      axios.get(serverUrl + "/api/v1/buildings").then((response) => {
        this.buildings = response.data;
        console.log(this.buildings);
      });
    },
  },

  created() {
    this.getBuildingData();
  },
};
</script>

<style scoped>
.main {
  padding: 0;
  margin: 0;
}

.building-display {
  display: contents;
  align-content: center;
  text-align: justify;
  text-align: center;
  align-items: center;
}
</style>
