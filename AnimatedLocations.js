var React           = require('react');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var Router          = require('react-router-component');

var AnimatedLocations = React.createClass({

  mixins: [
    Router.Environment.Mixin(Router.hashRoutingEnvironment),
    Router.RouterMixin
  ],

  render: function() {
    var children = this.state.match.getChildren();
    var component = TransitionGroup({component: React.DOM.div}, children);
    return this.transferPropsTo(component);
  }

});

module.exports = AnimatedLocations;
