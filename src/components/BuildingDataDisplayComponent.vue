<template>

    <div class="building-data-contents">
        <w-tag class="building-name" bg-color="primary" color="white" xl>
            Building ID - 1
        </w-tag>

        <w-tag class="building-name" bg-color="grey-dark5" color="white" xl>
            Building Name - Mines
        </w-tag>

        <w-tag class="building-name" bg-color="grey-dark5" color="white" xl>
            Building Address - Saint-Etienne
        </w-tag>
        <w-tag class="building-name" bg-color="grey-dark5" color="white" xl>
            Building Size - 565 M2
        </w-tag>
        <w-tag class="building-name" bg-color="grey-dark5" color="white" xl>
            Building Age - 50 years
        </w-tag>
        <w-tag class="building-name" bg-color="grey-dark5" color="white" xl>
            Number of Storeys - 9
        </w-tag>
        <w-tag class="building-name" bg-color="grey-dark5" color="white" xl>
            Building Owner - Test
        </w-tag>

        <w-button class="room-menu" bg-color="primary" route="https://github.com/antoniandre/wave-ui">
            Go to rooms
            <w-icon class="ml2" sm> fa fa-building </w-icon>
        </w-button>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.data-contents {
    width: 100%;
    height: 100%;
    background-color: #383838;
}

.building-data-contents {
    width: 400px;
    background-color: #383838;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-width: 3px;
    border-color: #474747;
    border-style: solid;
    border-radius: 6px;
}

.building-name {
    width: 100%;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.room-menu {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    width: 100%;
}
</style>
