const React = require("react");

module.exports = React.createClass({
  render: function() {
    if(!this.props.glyph)
      return null;
    return <i className={ `glyphicon glyphicon-${ this.props.glyph }`}></i>
  }
});
