<template>
<div class="main">
    <w-app>
        <HeaderComponentVue />
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
    </w-app>
</div>
</template>

<script>
import NoBuildingFoundComponentVue from "../components/Building/NoBuildingAddedComponent.vue";
import HeaderComponentVue from "../components/Header/HeaderComponent.vue";
import BuildingDataDisplayComponentVue from "../components/Building/BuildingDataDisplayComponent.vue";
export default {
    components: {
        HeaderComponentVue,
        NoBuildingFoundComponentVue,
        BuildingDataDisplayComponentVue,
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
