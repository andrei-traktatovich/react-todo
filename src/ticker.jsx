const React = require("react");
const moment = require("moment");
const Glyphicon = require("./glyphicon");

function getTime() {
  return { currentTime: moment().format("LTS") };
}

module.exports = React.createClass({
  getInitialState: function() {
    setInterval(() => this.setState(getTime()), 1000);
    return { currentTime: Date() };
  },
  render: function() {
    return  <span>
                <Glyphicon glyph="time"></Glyphicon>
                { this.state.currentTime }
            </span>
  }
})
