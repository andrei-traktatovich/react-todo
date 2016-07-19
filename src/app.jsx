var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var FireBase = require('firebase');
var rootUrl = "https://todos-a14a5.firebaseio.com/";
var Header = require("./header");
var ItemsList = require("./items-list");
const Ticker = require("./ticker");
var App = React.createClass({
  mixins: [ ReactFire ],
  getInitialState: function() {
    return { items: {} };
  },
  componentWillMount: function () {
    var ref = new FireBase(rootUrl + "items/");
    this.bindAsObject(ref, "items");
  },
  markItemDone: function(key) {
    alert("done");
    this.firebaseRefs.items.child(key).update({ done: true });
  },
  removeItem: function(key) {
    alert("removing");
    this.firebaseRefs.items.child(key).remove();
  },
  render: function() {
    console.log(this.state.items)
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          TODOS <Ticker></Ticker>
        </h2>
        <Header itemsStore={this.firebaseRefs.items}/>
        <ItemsList items={this.state.items} onItemDone={this.markItemDone} onItemRemoved={this.removeItem}/>
      </div>
    </div>
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
