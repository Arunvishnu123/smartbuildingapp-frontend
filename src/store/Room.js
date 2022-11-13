export default {
    namespaced: true,
    state: {
        buildingId: null,
        roomID: null,
        roomName: null,
        roomTemperature: null

    },

    mutations: {
        updateBuildingId(state, buildingId) {
            state.buildingId = buildingId
        },
        updateRoomID(state, roomID) {
            state.roomID = roomID
        },

        updateRoomName(state, roomName) {
            state.roomName = roomName
        },
        updateRoomTemperature(state, roomTemperature) {
            state.roomTemperature = roomTemperature
        }

    },
    actions: {},
    modules: {}


}