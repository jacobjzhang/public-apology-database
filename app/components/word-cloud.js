import Ember from 'ember';
import * as d3 from 'npm:d3';
const { computed } = Ember;
//import { cloud } from 'd3-cloud';

export default Ember.Component.extend({
//  tagName: 'canvas',
//  width: 100,
//  height: 100,
//  attributeBindings: ['width','height'],
//  canvas: computed(function() {
//    return this.$('canvas');
//  }),

  didRender() {
    const el = this.$();
    console.log(el)
    var words = ["Hello", "world", "normally", "you", "want", "more", "words", "than", "this"]
        .map(function(d) {
          return {text: d, size: 10 + Math.random() * 90};
        });

    window.d3.layout.cloud().size([960, 500])
        .canvas(function() { return document.createElement("canvas");  })
        .words(words)
        .padding(5)
        .rotate(function() { return ~~(Math.random() * 2) * 90; })
        .font("Impact")
        .fontSize(function(d) { return d.size; })
        .on("end", end)
        .start();

    function end(words) { console.log(JSON.stringify(words)); } 
  }
});
