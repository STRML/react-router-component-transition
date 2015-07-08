/**
 * @jsx React.DOM
 */

var React              = require('react/addons');
var Router             = require('react-router-component');
var Location           = Router.Location;
var Link               = Router.Link;
var AnimatedLocations  = require('./index');


var App = React.createClass({
  render: function() {
    return (
      <AnimatedLocations hash className="Main" transitionName="moveUp" popStateTransitionName="fade">
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
            '<AnimatedLocations className="Main" transitionName="moveUp" popStateTransitionName="fade">',
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
          <p>
            Go back to <Link transitionName="moveDown" href="/">main page
            </Link> (please notice it uses another kind of animated transition).
          </p>
          <p>
            This link will lead to <Link noTransition transitionName="moveDown" href="/">main page
            </Link> too but with no animated transition.
          </p>
          <p>
            You can also use the back/forward buttons in your browser. <br />
            Back/forward actions will use the <code>popStateTransitionName</code> specified in the props. <br />
            It is set to a fade transition in this demo. If none is specified, no animation will be used.
          </p>
        </div>
      </div>
    )
  }
})

var rrcHref = "http://andreypopp.viewdocs.io/react-router-component";
var githubHref = "https://github.com/andreypopp/react-router-page-transition";

React.render(React.createElement(App), document.body);
