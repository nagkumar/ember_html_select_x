import Em from 'ember';

var Controller = Em.Controller.extend({
  selections: [],

  theContent: [
    {name: 'First item',  id: 1},
    {name: 'Second item', id: 2},
    {name: 'Third item',  id: 3},
    {name: 'Another',     id: 4}
  ],

  actions: {
    selectionsChanged: function (model)
    {
      console.log(model);
    }
  }
});

export default Controller;
