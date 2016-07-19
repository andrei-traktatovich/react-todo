const React = require("react");
const Glyphicon = require("./glyphicon.jsx");

module.exports = React.createClass({
  render: function() {
    if(this.props.hide)
      return null;

    return <button
        className={`btn btn-${ this.props.btnType || "default" } btn-small`}
        onClick={ this.props.onClick }>
      <Glyphicon glyph={ this.props.glyphicon }></Glyphicon>
      { this.props.text }
    </button>
  }
})
