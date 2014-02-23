/**
 * @jsx React.DOM
 */

var React     = require('react')
var Router    = require('react-router-component')
var Location  = Router.Location;
var Link      = Router.Link;

var AnimatedLocations = require('./AnimatedLocations')

var App = React.createClass({
  render: function() {
    return (
      <AnimatedLocations className="Main" transitionName="moveUp">
        <Location path="/" handler={MainPage} />
        <Location path="/about" handler={AboutPage} />
      </AnimatedLocations>
    )
  }
})

var MainPage = React.createClass({
  render: function() {
    return (
      <div className="MainPage Page">
        <h1>Main page</h1>
        Go to <Link href="/about">about page</Link>.
      </div>
    )
  }
})

var AboutPage = React.createClass({
  render: function() {
    return (
      <div className="AboutPage Page">
        <h1>About</h1>
        Go to <Link href="/">main page</Link>.
      </div>
    )
  }
})

React.renderComponent(App(), document.body);
