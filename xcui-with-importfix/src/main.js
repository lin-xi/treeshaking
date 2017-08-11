import Vue from 'vue';
import {Button} from 'xcui';

var app6 = new Vue({
  el: '#app',
  components: {
    Button
  },
  template: '<Button type="primary">primary</Button>'
})