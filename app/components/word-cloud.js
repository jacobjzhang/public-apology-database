import Ember from 'ember';
import * as d3 from 'npm:d3';
const { computed } = Ember;
//import { cloud } from 'd3-cloud';

export default Ember.Component.extend({
  tagName: 'canvas',
  width: 100,
  height: 100,
  attributeBindings: ['width','height'],

  didRender() {
    const el = this.$()[0];
    const apologyText = this.get('text').split(' ');
    var words = apologyText
        .map(function(d) {
          return {text: d, size: 20 + Math.random() * 40};
        });

    window.d3.layout.cloud()
        .canvas(function() { return el; })
        .words(words)
        .padding(1)
        .rotate(function() { return ~~(Math.random() * 2) * 90; })
        .font("Helvetica")
        .spiral("archimedean")
        .fontSize(function(d) { return d.size; })
        .on("end", end)
        .start();

    function end(words) { 
      //this.$()[0].css('width','1000px'); 
    } 
  }
});
