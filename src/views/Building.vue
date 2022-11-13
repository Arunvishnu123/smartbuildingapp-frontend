<template>
<div class="main">
    <w-app>
        <HeaderComponentVue :callAddNew="callBuildingPost" :headerTitle="title" />
        <!-- <NoBuildingFoundComponentVue /> -->
        <w-grid :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }" gap="0" class="wrapper">
            <div class="building-display">
                <BuildingDataDisplayComponentVue />
                <BuildingDataDisplayComponentVue />
                <BuildingDataDisplayComponentVue />
                <BuildingDataDisplayComponentVue />
                <BuildingDataDisplayComponentVue />
                <BuildingDataDisplayComponentVue />
                <BuildingDataDisplayComponentVue />
            </div>
        </w-grid>

        <AddNewBuildingComponentVue />
    </w-app>
</div>
</template>

<script>
import NoBuildingFoundComponentVue from "../components/Building/NoBuildingAddedComponent.vue";
import HeaderComponentVue from "../components/Header/HeaderComponent.vue";
import BuildingDataDisplayComponentVue from "../components/Building/BuildingDataDisplayComponent.vue";
import AddNewBuildingComponentVue from "../components/Building/AddBuildingComponent.vue"
import store from "../store/index"

export default {
    components: {
        HeaderComponentVue,
        NoBuildingFoundComponentVue,
        BuildingDataDisplayComponentVue,
        AddNewBuildingComponentVue
    },

    methods: {
        callBuildingPost() {
            store.state.addNewBuilding = true;
            console.log(store.state.addNewBuilding)
          
        }
    },
    data: () => ({
        title: "Add a new Building"
    }),
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
