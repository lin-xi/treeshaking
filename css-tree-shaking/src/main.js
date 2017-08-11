import Vue from 'vue'
import {Button} from 'xcui'
import './app.less'

var app = new Vue({
  el: '#app',
  components: {
    Button
  },
  template: '<Button type="primary">primary</Button>'
})
