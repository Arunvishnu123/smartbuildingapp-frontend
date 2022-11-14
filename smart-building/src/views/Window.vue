<template>
    <div>
        <w-app>
            <HeaderComponentVue :callAddNew="callWindowPost" :headerTitle="title" />
            <!-- <NoRoomAddedComponentVue /> -->
            <w-grid columns="3" gap="3" class="wrapper">
                <div class="window-display">
                    <WindowDataDisplayVue />
                    <WindowDataDisplayVue />
                    <WindowDataDisplayVue />
                    <WindowDataDisplayVue />
                    <WindowDataDisplayVue />
                    <WindowDataDisplayVue />
                    <WindowDataDisplayVue />
                </div>
            </w-grid>
            <AddWindowComponentVue />
            <EditWindowComponentVue />
            <DeleteWindowConfirmComponentVue />
    
        </w-app>
    </div>
    </template>
    
    <script>
    import HeaderComponentVue from "../components/Header/HeaderComponent.vue";
    import WindowDataDisplayVue from "../components/Window/WindowDataDisplay.vue";
    import AddWindowComponentVue from "../components/Window/AddWindowComponent.vue";
    import EditWindowComponentVue from "../components/Window/EditWindowComponent.vue";
    import DeleteWindowConfirmComponentVue from "../components/Window/DeleteWindowConfirmComponent.vue";
    
    import store from "../store/index"
    export default {
        components: {
            HeaderComponentVue,
            WindowDataDisplayVue,
            AddWindowComponentVue,
            EditWindowComponentVue,
            DeleteWindowConfirmComponentVue
    
    
        },
        methods: {
            callWindowPost() {
                store.state.addNewWindow = true;
                console.log(store.state.addNewWindow)
            }
        },
        data: () => ({
            title: "Add a new Window"
        }),
    
    }
    </script>
    
    <style scoped>
    .window-display {
        display: contents;
        align-content: center;
        text-align: justify;
        text-align: center;
        align-items: center;
    }
    </style>
    