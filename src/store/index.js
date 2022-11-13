import {
  createStore, storeKey
} from 'vuex'
import Building from './Building'

const store =  createStore({

  state: {
    addNewBuilding: false,
    addNewRoom: false,
    addNewHeater: false,
    editNewHeater:false,
    deleteHeaterConfirm:false,
    addNewWindow:false,
    editNewWindow:false,
    deleteWindowConfirm:false
  },
  mutations: {},
  actions: {},
  modules: {
    building: Building
  },

})
store.state.building;
export default store ;
