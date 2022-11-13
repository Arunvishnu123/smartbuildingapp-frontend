<template>
<div>
    <w-dialog v-model="addNewBuilding" width="500px" title-class="primary-light1--bg white">
        <template #title>
            <w-icon class="mr2">fa fa-building-o </w-icon>
            Add new building
        </template>
        <w-form>
            <w-input v-model="buildingID" class="mb1" label="Building ID" round>
            </w-input>
            <w-input v-model="buildingName" class="mb1" label="Building Name" round>
            </w-input>
            <w-input v-model="buildingAddress" class="mb1" label="BuildingAddress" round>
            </w-input>

            <w-input v-model="buildingSize" class="mb1" label="Building Size" round>
            </w-input>
            <w-input v-model="buildingAge" class="mb1" label="Building Age" round>
            </w-input>
            <w-input v-model="storeyNumber" class="mb1" label="Number of Storeys" round>
            </w-input>

            <w-input v-model="buildingOwner" class="mb1" label="Building Owner" round>
            </w-input>
        </w-form>
        <template #actions>
            <div class="spacer" />
            <w-button bg-color="warning" type="reset" @click="$store.state.addNewBuilding = false">Close</w-button>
            <w-button class="submit-button my1" type="submit">
                Validate
            </w-button>
        </template>
    </w-dialog>
</div>
</template>

<script>
import store from "../../store/index"
export default {
    name: "addNewBuilding",
    mounted() {
      //  console.log("divjiosdjfisdf",  addNewBuilding)
    },

    data: () => ({
    
    }),

    computed: {

        addNewBuilding: {
            get() {
                return store.state.addNewBuilding;
            }
        },

        // buildingID: {
        //     get() {
        //         return store.state.building.buildingID;
        //     },
        //     set(value) {
        //         store.state.building
        //     },
        // },

        // buildingName: {
        //     get() {
        //         return this.store.state.building.buildingName;
        //     },
        //     set(value) {
        //         this.$store.state.building.commit("updateBuildingName", value);
        //     },
        // },

        // buildingAddress: {
        //     get() {
        //         return this.store.state.building.buildingAddress;
        //     },
        //     set(value) {
        //         this.$store.state.building.commit("updateBuildingAddress", value);
        //     },
        // },
        // buildingSize: {
        //     get() {
        //         return this.store.state.building.buildingSize;
        //     },
        //     set(value) {
        //         this.$store.state.building.commit("updateBuildingSize", value);
        //     },
        // },
        // buildingAge: {
        //     get() {
        //         return this.store.state.building.buildingAge;
        //     },
        //     set(value) {
        //         this.$store.state.building.commit("updateBuildingAge", value);
        //     },
        // },
        // storeyNumber: {
        //     get() {
        //         return this.store.state.building.storeyNumber;
        //     },
        //     set(value) {
        //         this.$store.state.building.commit("updateStoreyNumber", value);
        //     },
        // },
        // buildingOwner: {
        //     get() {
        //         return this.store.state.building.buildingOwner;
        //     },
        //     set(value) {
        //         this.$store.state.building.commit("updateBuildingOwner", value);
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
