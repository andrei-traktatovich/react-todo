const React = require("react");
const Todo = require("./todo");

module.exports = React.createClass({
    render: function() {

      if(!this.props.items || Object.keys(this.props.items).length == 0)
        return <p>Nothing</p>;

      let list = Object.keys(this.props.items)
                  .map((key) => <Todo
                    item={this.props.items[key]}
                    id={key}
                    onItemDone={this.props.onItemDone}
                    onItemRemoved={this.props.onItemRemoved}/>);

      return <ul className="list-group">{list}</ul>
    }
});
