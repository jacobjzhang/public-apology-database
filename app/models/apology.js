import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  name: DS.attr('string'),
  date: DS.attr('date'),
  profession: DS.attr('string'),
  gender: DS.attr('string'),
  geolocation: DS.attr('string'),
  publication: DS.attr('string'),
});
