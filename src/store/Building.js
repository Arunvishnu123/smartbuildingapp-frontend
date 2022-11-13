export default {
    namespaced: true,
    state: {
        buildingId:null,
        buildingName:null,
        buildingAddress:null,
        buildingSize:null,
        buildingAge:null,
        storeyNumber:null,
        buildingOwner:null,
        
    },

    mutations: {
        updateBuildingId(state, buildingId) {
            state.buildingId = buildingId
          },
          updateBuildingName(state, buildingName) {
            state.buildingName = buildingName
          },

          updateBuildingAddress(state, buildingAddress) {
            state.buildingAddress = buildingAddress
          },
          updateBuildingSize(state, buildingSize) {
            state.buildingSize = buildingSize
          },
          updateBuildingAge(state, buildingAge) {
            state.buildingAge = buildingAge
          },
          updateStoreyNumber(state, storeyNumber) {
            state.storeyNumber =storeyNumber
          },
          updateBuildingOwner(state, buildingOwner) {
            state.buildingOwner = buildingOwner
          },

    },
    actions: {},
    modules: {}


}