var React = require("react");

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: ""
    };
  },
  render: function() {
    return <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={this.state.text}
        onChange={this.handleChange}
        >
      </input>
      <span className="input-group-btn">
        <button className="btn btn-info"
          onClick={this.handleClick}
          type="button">add</button>
      </span>
    </div>
  },
  handleClick: function() {
    this.props.itemsStore.push({
      text: this.state.text,
      done: false
    });
    this.setState({ text: "" });
  },
  handleChange: function(event) {
    this.setState({ text: event.target.value });
  }
});
