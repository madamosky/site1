import Ember from 'ember';

export default Ember.Controller.extend({
actions: {
    filterByLocation(param) {
      if (param !== '') {
        return this.get('store').query('tournament', { location: param });
      } else {
        return this.get('store').findAll('tournament');
      }
    }
  }
});