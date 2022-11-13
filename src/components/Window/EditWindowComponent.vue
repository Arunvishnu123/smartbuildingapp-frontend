<template>
    <div>
        <w-dialog v-model="editNewWindow" width="500px" title-class="primary-light1--bg white">
            <template #title>
                <w-icon class="mr2">fa fa-window-maximize   </w-icon>
               Edit new Window
                
            </template>
            <w-form>
                <!-- <w-input v-model="buildingID" class="mb1" label="Building ID" round>
                    </w-input> -->
                <w-input v-model="windowName" class="mb1" label="Window Name" round>
                </w-input>
              
            </w-form>
            <template #actions>
                <div class="spacer" />
                <w-button bg-color="warning" type="reset" @click="$store.state.addNewWindow = false">Close</w-button>
                <w-button class="submit-button-window my1" type="submit">
                   Submit
                </w-button>
            </template>
        </w-dialog>
    </div>
    </template>
    
        
    <script>
    import store from "../../store/index"
    export default {
        name: "editNewWindow",
    
        data: () => ({
            
        }),
        computed: {
            editNewWindow: {
                get() {
                    return store.state.editNewWindow;
                },
    
            }
        }
    
    }
    </script>
    
        
    <style scoped>
    .submit-button-window {
        margin-left: 10px;
    }
    </style>
    