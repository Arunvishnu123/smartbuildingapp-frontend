<template>
  <div class="heater-data-contents">
    <w-tag class="heater-name-heading" bg-color="primary" color="white" xl>
      Heater Name - 1
    </w-tag>

    <w-flex>
      <w-button
        @click="editheater()"
        class="edit-heater ma1"
        color="white"
        bg-color="indigo-dark5"
        icon="fa fa-pencil"
      ></w-button>
      <w-button
        @click="deleteheaterConfirm()"
        class="edit-heater ma1"
        color="white"
        bg-color="red"
        icon="fa fa-trash-o"
      ></w-button>
    </w-flex>
    <w-tag class="heater-name" bg-color="grey-dark5" color="white" xl>
      Room No - 421
    </w-tag>
    <div class="heater-temp-desgin">
      <w-tag class="room-name" bg-color="grey-dark5" color="white" xl>
        Current Temperature
      </w-tag>
      <vue3-slider
        disabled
        v-model="someValue"
        color="#800d34"
        track-color="#FEFEFE"
      />
      <w-tag class="heater-temp-value" bg-color="grey-dark5" color="white" xl>
        {{ someValue }} <br />
        <span>&#8451;</span>
      </w-tag>
    </div>
    <div class="heater-temp-desgin">
      <w-tag class="room-name" bg-color="grey-dark5" color="white" xl>
        Target Temperature
      </w-tag>
      <vue3-slider
        disabled
        v-model="someValue"
        color="#275a29"
        track-color="#FEFEFE"
      />
      <w-tag class="heater-temp-value" bg-color="grey-dark5" color="white" xl>
        {{ someValue }} <br />
        <span>&#8451;</span>
      </w-tag>
    </div>

    <div class="heater-temp-desgin">
      <w-tag
        class="heater-status"
        v-model="tagOn"
        :bg-color="tagOn ? 'success-dark2' : 'error-dark2'"
        dark
        lg
      >
        {{ tagOn ? "Turn ON Heater" : "Turn OFF Heater" }}
      </w-tag>
    </div>
  </div>
</template>

<script>
import slider from "vue3-slider";
import store from "../../store/index";
export default {
  data: () => ({
    someValue: 40,
    tagOn: false,
  }),
  components: {
    "vue3-slider": slider,
  },

  methods: {
    editheater() {
      store.state.editNewHeater = true;
      console.log(store.state.editNewHeater);
    },

    deleteheaterConfirm() {
      store.state.deleteHeaterConfirm = true;
      console.log(store.state.deleteHeaterConfirm);
    },
  },
};
</script>

<style scoped>
.heater-data-contents {
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

.edit-heater {
  bottom: 32px;
}

.heater-name-heading {
  width: 100%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.heater-name {
  width: 100%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.heater-temp-value {
  width: 100%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.heater-temp-label {
  width: 100%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.heater-temp-desgin {
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.heater-temp-label {
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.heater-heater-button {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.heater-window-button {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.heater-status {
  width: 100%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
