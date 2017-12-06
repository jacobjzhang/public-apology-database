import Ember from 'ember';
import LOUIS_CK from 'public-apology-database/lib/louisck';
const { get, set } = Ember;

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('apology', LOUIS_CK)  
  },

});
