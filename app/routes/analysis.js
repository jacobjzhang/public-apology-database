import Ember from 'ember';
import LOUIS_CK from 'public-apology-database/lib/louisck';
const { get, set } = Ember;

export default Ember.Route.extend({
//  beforeModel() {
//    LOUIS_CK.forEach(function(el) {
//      this.get('store').createRecord('apology', el)  
//    });
//  },
  model(params) {
    return this.get('store').createRecord('apology', LOUIS_CK[params.apology_id]);
  },

});
