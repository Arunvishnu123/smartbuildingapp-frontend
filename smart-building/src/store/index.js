import { createStore } from "vuex";
import axios from "axios";
import serverUrl from "../../variable";

const store = createStore({
  state: {
    addNewBuilding: false,
    addNewRoom: false,
    addNewHeater: false,
    editNewHeater: false,
    deleteHeaterConfirm: false,
    addNewWindow: false,
    editNewWindow: false,
    deleteWindowConfirm: false,
    //building data post

    buildingId: null,
    buildingName: null,
    buildingAddress: null,
    buildingSize: null,
    buildingAge: null,
    storeyNumber: null,
    buildingOwner: null,

    //get building data
    buildingList: null,

    //post room data
    buildingIdRoom: null,
    roomID: null,
    roomName: null,
    roomTemperature: null,

    //post heater data
    currentTemperature: 0,
    heaterStatus: false,
    name: null,
    targetTemperature: null,

    //editHeater data
    editCurrentTemperature: 0,
    editHeaterStatus: false,
    editName: null,
    editTargetTemperature: null,

    //post window data
    nameWindow: null,
    windowStatus: null,

    //edit window data
    editNameWindow: null,
    editWindowStatus: null,

    //get building id when clicked go to room;
    currrentBuildingID: 0,

     //get building id when clicked go to heater or windows;
     currrentRoomID: 0,
  },
  mutations: {
    updateBuildingId(state, buildingId) {
      this.state.buildingId = buildingId;
    },
    updateBuildingName(state, buildingName) {
      this.state.buildingName = buildingName;
    },

    updateBuildingAddress(state, buildingAddress) {
      this.state.buildingAddress = buildingAddress;
    },
    updateBuildingSize(state, buildingSize) {
      this.state.buildingSize = buildingSize;
    },
    updateBuildingAge(state, buildingAge) {
      this.state.buildingAge = buildingAge;
    },
    updateStoreyNumber(state, storeyNumber) {
      this.state.storeyNumber = storeyNumber;
    },
    updateBuildingOwner(state, buildingOwner) {
      this.state.buildingOwner = buildingOwner;
    },

    updateBuildingIdRoom(state, buildingIdRoom) {
      state.buildingIdRoom = buildingIdRoom;
    },
    updateRoomID(state, roomID) {
      state.roomID = roomID;
    },

    updateRoomName(state, roomName) {
      state.roomName = roomName;
    },
    updateRoomTemperature(state, roomTemperature) {
      state.roomTemperature = roomTemperature;
    },
    updateCurrentTemperature(state, currentTemperature) {
      state.currentTemperature = currentTemperature;
    },
    updateHeaterStatus(state, heaterStatus) {
      state.heaterStatus = heaterStatus;
    },
    updateName(state, name) {
      state.name = name;
    },
    updateTargetTemperature(state, targetTemperature) {
      state.targetTemperature = targetTemperature;
    },

    updateEditCurrentTemperature(state, editCurrentTemperature) {
      state.editCurrentTemperature = editCurrentTemperature;
    },
    updateEditHeaterStatus(state, editHeaterStatus) {
      state.editHeaterStatus = editHeaterStatus;
    },
    updateEditName(state, editName) {
      state.editName = editName;
    },
    updateEditTargetTemperature(state, editTargetTemperature) {
      state.editTargetTemperature = editTargetTemperature;
    },

    updateWindowName(state, nameWindow) {
      state.nameWindow = nameWindow;
    },
    updateWindowStatus(state, windowStatus) {
      state.windowStatus = windowStatus;
    },
    updateEditWindowName(state, editNameWindow) {
      state.editNameWindow = editNameWindow;
    },
    updateEditWindowStatus(state, editWindowStatus) {
      state.editWindowStatus = editWindowStatus;
    },
  },
  actions: {
    async onSubmitBuildingData() {
      await axios
        .post(serverUrl + "/api/v1/building/new", {
          buildingAddress: this.state.buildingAddress,
          buildingAge: this.state.buildingAge,
          buildingID: this.state.buildingId,
          buildingName: this.state.buildingName,
          buildingOwner: this.state.buildingOwner,
          buildingSize: this.state.buildingSize,
          buildingType: this.state.buildingType,
          storeyNumber: this.state.storeyNumber,
        })
        .then((response) => {
          console.log(response);
        });
    },

    async onSubmitRoomData() {
      await axios
        .post(serverUrl + "/api/v1/rooms/new", {
          buildingID: this.state.currrentBuildingID,
          roomID: this.state.roomID,
          roomName: this.state.roomName,
          roomTemperature: this.state.roomTemperature,
        })
        .then((response) => {
          console.log(response);
        });
    },

    async onSubmitHeaterData() {
      await axios
        .post(serverUrl + "/api/v1/heater/new", {
          roomID: this.state.currrentRoomID,
          name: this.state.name,
          heaterStatus: this.state.heaterStatus,
          currentTemperature: this.state.currentTemperature,
        })
        .then((response) => {
          console.log(response);
        });
    },

    async onSubmitWindowData() {
      await axios
        .post(serverUrl + "/api/v1/window/new", {
          roomID: this.state.currrentRoomID,
          name: this.state.nameWindow,
          windowStatus: this.state.windowStatus,
        })
        .then((response) => {
          console.log(response);
        });
    },
  },

  modules: {},
});

export default store;
