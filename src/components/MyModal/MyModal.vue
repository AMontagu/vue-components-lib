<template>
  <transition name="myModal">
    <div id="Modal">
      <div
        :style="{'z-index': zIndex}"
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div
            :style="{width: modalWidth}"
            class="modal-container"
          >

            <div class="modal-header" v-if="typeof $libOptions.MyModal.headerModal !== 'undefined' ? $libOptions.MyModal.headerModal : true">
	            <slot name="header">
		            <h2>{{ header }}</h2>
	            </slot>
            </div>

            <div class="modal-body">
	            <slot name="body">
		            <p>{{ body }}</p>
	            </slot>
	            <div v-for="(response, index) in oldResponses" :key="index">
		            <slot name="responses" :response="response">
			            {{ response }}
		            </slot>
	            </div>
            </div>

            <div class="modal-footer">
	            <slot name="footer">
		            <button @click="$emit('close')">Close</button>
	            </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MyModal",
  components: {},
  props: {
    header: {
      type: String,
      default: "Header"
    },
    body: {
      type: String,
      default: "Body text"
    },
    modalWidth: {
      type: String,
      default: "300px"
    },
    zIndex: {
      type: [String, Number],
      default: 9998
    }
  },
  data() {
    return {
      oldResponses: ["agree", "agree", "agree", "disagree"]
    };
  }
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin: 20px;
  color: #42b983;
  font-size: 36px;
  font-family: "Open Sans";
}

.modal-body {
  margin: 20px 0;
  max-height: 60vh;
  overflow-y: auto;
  font-size: 18px;
}

.modal-body h4 {
  margin: 20px;
  font-size: 20px;
  font-family: "Open Sans Semibold";
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
