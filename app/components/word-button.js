import Ember from 'ember';
const { get, set, computed } = Ember;

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['btn'],
  classNameBindings: ['colorClass'],

  colorClass: computed(function() {
    const color = get(this, 'color');
    return 'btn-' + color;
  }),

  color: computed(function() {
    const colors = ['primary', 'success', 'info', 'warning', 'danger'];
    const idx = Math.floor(Math.random() * colors.length);
    return colors[idx];
  }),

});
