<template>
    <div>
        <w-dialog v-model="addNewHeater" width="500px" title-class="primary-light1--bg white">
            <template #title>
                <w-icon class="mr2">fa fa-thermometer-empty  </w-icon>
                Add new Heater
                
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
                <w-button bg-color="warning" type="reset" @click="$store.state.addNewHeater = false">Close</w-button>
                <w-button class="submit-button-heater my1" type="submit">
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
            addNewHeater: {
                get() {
                    return store.state.addNewHeater;
                },
    
            }
        }
    
    }
    </script>
    
        
    <style scoped>
    .submit-button-heater {
        margin-left: 10px;
    }
    </style>
    