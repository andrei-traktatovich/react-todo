const React = require("react");
const Button = require('./button.jsx');

module.exports = React.createClass({
  render: function() {
    return <Button
      hide={ this.props.hide }
      onClick={ this.props.onClick }
      glyphicon="ok"
      btnType="success"
      text={this.props.text }/>
  }
});
