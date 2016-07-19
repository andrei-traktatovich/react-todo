const React = require("react");
const OkButton = require("./OkButton.jsx");
const RemoveButton = require("./RemoveButton.jsx");

module.exports = React.createClass({
    markItemDone: function() {
      this.props.onItemDone(this.props.id);
    },
    removeItem: function() {

      this.props.onItemRemoved(this.props.id);
    },
    render: function() {
      
      let listItemClassName = `list-group-item ${ this.props.item.done ? "item-done" : "item-pending" }`;
      return <li className={ listItemClassName }>
          <div className="row">
            <div className="col-md-8">
              {this.props.item.text}
            </div>
            <div className="col-md-2">
              <OkButton hide={ this.props.item.done } onClick={ this.markItemDone } text="Done!"/>
            </div>
            <div className="col-md-2">
              <RemoveButton onClick={ this.removeItem } text="Remove!"/>
            </div>
          </div>
        </li>
      }
    });
