<template>
<div>
    <w-app>
        <HeaderComponentVue />
        <!-- <NoRoomAddedComponentVue /> -->
      

        <w-grid  :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }" gap="0" class="wrapper">
        <div class="room-display">
            <RoomDataDisplayVue />  
             <RoomDataDisplayVue />  
              <RoomDataDisplayVue />  
               <RoomDataDisplayVue />
        </div>
      </w-grid>
    </w-app>
</div>
</template>

<script>
import HeaderComponentVue from "../components/HeaderComponent.vue";
import NoRoomAddedComponentVue from "../components/NoRoomAddedComponent.vue";
import RoomDataDisplayVue from "../components/RoomDataDisplay.vue"
export default {
    components: {
        HeaderComponentVue,
        NoRoomAddedComponentVue,
        RoomDataDisplayVue
    }

}
</script>

<style scoped>
.room-display{
    display: contents;
  align-content: center;
  text-align: justify;
  text-align: center;
  align-items: center;
}
</style>
