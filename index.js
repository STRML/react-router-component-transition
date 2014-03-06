/**
 * @jsx React.DOM
 */

var React           = require('react')
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var Router          = require('react-router-component')
var Locations       = Router.Locations;
var Location        = Router.Location;
var Link            = Router.Link;

var AnimatedLocations = React.createClass({

    mixins: [Router.RouterMixin, Router.AsyncRouteRenderingMixin],

    getRoutes: function() {
      return this.props.children;
    },

    render: function() {
      var handler = this.renderRouteHandler();
      return this.transferPropsTo(TransitionGroup({component: React.DOM.div}, handler));
    }
});

var App = React.createClass({
  render: function() {
    return (
      <AnimatedLocations hash className="Main" transitionName="moveUp">
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
        <div className="Page__wrapper">
          <h1>Main page</h1>
          <p>
            This demo shows how to do <a href={githubHref}>animated page
            transitions</a> with <a href={rrcHref}>React Router component</a>.
          </p>
          <p>
            All you need is to use <code>AnimatedLocations</code> router:
          </p>
          <pre>{[
            '<AnimatedLocations className="Main" transitionName="moveUp">',
            '  <Location path="/" handler={MainPage} />',
            '  <Location path="/about" handler={AboutPage} />',
            '</AnimatedLocations>'
          ].join('\n')}</pre>
          <p>
            Now, click on a link to go to <Link href="/about">about page</Link>.
          </p>
        </div>
      </div>
    )
  }
})

var AboutPage = React.createClass({
  render: function() {
    return (
      <div className="AboutPage Page">
        <div className="Page__wrapper">
          <h1>About</h1>
          <p>Then specify your CSS3 Transition in stylesheet:</p>
          <pre>{[
            '.moveUp-enter {',
            '  ...',
            '}',
            '',
            '.moveUp-enter.moveUp-enter-active {',
            '  ...',
            '}',
            '',
            '.moveUp-leave {',
            '  ...',
            '}',
            '',
            '.moveUp-leave.moveUp-leave-active {',
            '  ...',
            '}',
          ].join('\n')}</pre>
          Go back to <Link href="/">main page</Link>.
        </div>
      </div>
    )
  }
})

var rrcHref = "http://andreypopp.viewdocs.io/react-router-component";
var githubHref = "https://github.com/andreypopp/react-router-page-transition";

React.renderComponent(App(), document.body);
