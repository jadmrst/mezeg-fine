import React from 'react';


class Clickable extends React.Component {
    static propTypes = {
      children: React.PropTypes.element.isRequired
    }
    render () {
      let child = React.Children.only(this.props.children)
      return React.cloneElement(child, {style={cursor: 'pointer'}})
    }
  }

  
export default Weather;