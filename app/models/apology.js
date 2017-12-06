import DS from 'ember-data';
import Ember from 'ember';
const { get, set, computed } = Ember;

export default DS.Model.extend({
  text: DS.attr('string'),
  name: DS.attr('string'),
  date: DS.attr('date'),
  profession: DS.attr('string'),
  gender: DS.attr('string'),
  geolocation: DS.attr('string'),
  publication: DS.attr('string'),

  keywords: computed(function() {
    const text = get(this, 'text');
    return nlp(text).nouns().data().filter(function(n){ return n != undefined });
  }),

  negativeVerbs: computed(function() {
    const text = get(this, 'text');
    return nlp(text).verbs().isNegative().data().filter(function(n){ return n != undefined });
  }),

  positiveVerbs: computed(function() {
    const text = get(this, 'text');
    const words = nlp(text).verbs().isPositive().data().filter(function(n){ return n != undefined });
    console.log(words)
    return words;
  }),

  adjectives: computed(function() {
    const text = get(this, 'text');
    return nlp(text).adjectives().data().filter(function(n){ return n != undefined });
  }),
});
