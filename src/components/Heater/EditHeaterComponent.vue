<template>
    <div>
        <w-dialog v-model="editNewHeater" width="500px" title-class="primary-light1--bg white">
            <template #title>
                <w-icon class="mr2">fa fa-thermometer-empty  </w-icon>
            Edit Heater
                
            </template>
            <w-form>
                <!-- <w-input v-model="buildingID" class="mb1" label="Building ID" round>
                    </w-input> -->
                <w-input v-model="roomID" class="mb1" label="Heater Name" round>
                </w-input>
                <w-input v-model="roomName" class="mb1" label="Current Temperature" round>
                </w-input>
    
                <w-input v-model="roomTemperature" class="mb1" label="Target Temperature" round>
                </w-input>
            </w-form>
            <template #actions>
                <div class="spacer" />
                <w-button bg-color="warning" type="reset" @click="$store.state.editNewHeater = false">Close</w-button>
                <w-button class="submit-button-heater-edit my1" type="submit">
                   Submit
                </w-button>
            </template>
        </w-dialog>
    </div>
    </template>
    
        
    <script>
    import store from "../../store/index"
    export default {
        name: "addNewHeater",
    
        data: () => ({
            
        }),
        computed: {
            editNewHeater: {
                get() {
                    return store.state.editNewHeater;
                },
    
            }
        }
    
    }
    </script>
    
        
    <style scoped>
    .submit-button-heater-edit {
        margin-left: 10px;
    }
    </style>
    