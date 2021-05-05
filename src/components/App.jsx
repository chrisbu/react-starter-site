import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    static propTypes = {
        /* Foo - enter something */
        foo: PropTypes.string,
        /* Bar - something else */
        bar: PropTypes.string
    }
    static defaultProps = {
        /* Bar has a default (Foo does not) */
        bar: "World"
    }


    render() {
        return(
          <div className="container mt-3">
              <h1 className="text-primary">Message: {this.props.foo} {this.props.bar}</h1>
          </div>
        );
    }
}

export default App;
