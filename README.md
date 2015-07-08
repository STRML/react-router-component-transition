### AnimatedLocations (React-Router-Component)

A simple component that overrides `<Locations>` in [React-Router-Component](https://github.com/STRML/react-router-component)
to animate page transitions.

[View the Demo](https://andreypopp.github.io/react-router-page-transition/)

This is not yet published as an npm module and is more of a proof of concept. If you want to use it via npm,
use a github URL.

#### Usage

Simply replace any usage of `<Locations>` in your app with `<AnimatedLocations>`.

View [the <AnimatedLocations> source](index.js) for more details and comments.

You can also change the transition used on a particular link by using the prop `transitionName`, or shut off
transitions entirely by using the prop `noTransition`.

View the [demo source](demo.js) for more usage details.

#### Development

To run the demo locally and tinker:

    % git clone https://github.com/andreypopp/react-router-page-transition.git
    % npm install
    % npm run develop
    % open index.html
