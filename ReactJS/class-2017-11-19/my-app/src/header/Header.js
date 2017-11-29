import React from 'react';


class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        { this.props.data }
        { this.props.data1 }
        <br/>
        { this.props.data2.a + this.props.data2.b }
        
      </div>
    );
  }
}

export default Header;
