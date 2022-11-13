<template>
<div>
    <w-app>
        <HeaderComponentVue :callAddNew="callRoomPost" :headerTitle="title" />
        <!-- <NoRoomAddedComponentVue /> -->
        <w-grid :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }" gap="0" class="wrapper">
            <div class="room-display">
                <RoomDataDisplayVue />
                <RoomDataDisplayVue />
                <RoomDataDisplayVue />
                <RoomDataDisplayVue />
            </div>
        </w-grid>

        <AddNewRoomVue />
    </w-app>
</div>
</template>

<script>
import HeaderComponentVue from "../components/Header/HeaderComponent.vue";
import NoRoomAddedComponentVue from "../components/Room/NoRoomAddedComponent.vue";
import RoomDataDisplayVue from "../components/Room/RoomDataDisplay.vue"
import AddNewRoomVue from "../components/Room/AddRoomComponent.vue"
import store from "../store/index"
export default {
    components: {
        HeaderComponentVue,
        NoRoomAddedComponentVue,
        RoomDataDisplayVue,
        AddNewRoomVue
    },
    methods: {
        callRoomPost() {
          store.state.addNewRoom =true;
          console.log( store.state.addNewRoom )
          
          
        }
    },
    data: () => ({
        title: "Add a new Room"
    }),

}
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
