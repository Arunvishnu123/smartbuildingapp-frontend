<template>
  <div>
    <w-app>
      <HeaderComponentVue :callAddNew="callRoomPost" :headerTitle="title" />
      <!-- <NoRoomAddedComponentVue /> -->
      <w-grid columns="3" gap="3" class="wrapper">
        <div v-for="room in rooms" :key="room.id" class="room-display">
          <RoomDataDisplayVue :room="room" />
        </div>
      </w-grid>

      <AddNewRoomVue />
    </w-app>
  </div>
</template>

<script>
import HeaderComponentVue from "../components/Header/HeaderComponent.vue";
//import NoRoomAddedComponentVue from "../components/Room/NoRoomAddedComponent.vue";
import RoomDataDisplayVue from "../components/Room/RoomDataDisplay.vue";
import AddNewRoomVue from "../components/Room/AddRoomComponent.vue";
import store from "../store/index";
import axios from "axios";
import serverUrl from "../../variable";
export default {
  components: {
    HeaderComponentVue,
    //   NoRoomAddedComponentVue,
    RoomDataDisplayVue,
    AddNewRoomVue,
  },
  methods: {
    callRoomPost() {
      store.state.addNewRoom = true;
      console.log(store.state.addNewRoom);
    },

    getRoomData() {
      axios
        .get(serverUrl + "/api/v1/rooms/" + store.state.currrentBuildingID)
        .then((response) => {
          this.rooms = response.data;
          console.log(this.rooms);
        });
    },
  },
  data: () => ({
    title: "Add a new Room",
    rooms: [],
  }),

  mounted() {
    this.getRoomData();
  },
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
