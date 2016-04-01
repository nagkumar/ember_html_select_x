import Em from 'ember';

var Controller = Em.Controller.extend({
  selections: [],

  actions: {
    selectionsChanged: function (model)
    {
      console.log(model);
    }
  }
});

export default Controller;
