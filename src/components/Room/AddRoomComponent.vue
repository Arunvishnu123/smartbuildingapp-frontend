<template>
<div>
    <w-dialog v-model=" addNewRoom" width="500px" title-class="primary-light1--bg white">
        <template #title>
            <w-icon class="mr2">fa fa-building-o </w-icon>
            Add new Room
        </template>
        <w-form>
            <!-- <w-input v-model="buildingID" class="mb1" label="Building ID" round>
                </w-input> -->
            <w-input v-model="roomID" class="mb1" label="Room ID" round>
            </w-input>
            <w-input v-model="roomName" class="mb1" label="Room Name" round>
            </w-input>

            <w-input v-model="roomTemperature" class="mb1" label="Room Temerature" round>
            </w-input>
        </w-form>
        <template #actions>
            <div class="spacer" />
            <w-button bg-color="warning" type="reset" @click="$store.state.addNewRoom = false">Close</w-button>
            <w-button class="submit-button my1" type="submit">
               Submit
            </w-button>
        </template>
    </w-dialog>
</div>
</template>

    
<script>
import store from "../../store/index"
export default {
    name: "addNewBuilding",

    data: () => ({
        
    }),
    computed: {
        addNewRoom: {
            get() {
                return store.state.addNewRoom;
            },

        }
        // buildingID: {
        //     get() {
        //         return this.store.state.building.buildingID;
        //     },
        //     set(value) {
        //         this.$store.state.building.commit("updateBuildingID", value);
        //     },
        // },

        // roomID: {
        //     get() {
        //         return this.store.state.building.roomID;
        //     },
        //     set(value) {
        //         this.$store.state.building.commit("updateRoomID", value);
        //     },
        // },

        // roomName: {
        //     get() {
        //         return this.store.state.building.roomName;
        //     },
        //     set(value) {
        //         this.$store.state.building.commit("updateRoomName", value);
        //     },
        // },
        // roomTemperature: {
        //     get() {
        //         return this.store.state.building.roomTemperature;
        //     },
        //     set(value) {
        //         this.$store.state.building.commit("updateRoomTemperature", value);
        //     },
        // }
    }

}
</script>

    
<style scoped>
.submit-button {
    margin-left: 10px;
}
</style>
