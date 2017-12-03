import React from 'react';


class ProductItem extends React.Component {

    constructor(){
        super();
        this.clickFN = this.clickFN.bind(this); 
    }

    clickFN(){
        console.log("Here Click");
    }

  render() {


    return (
        <li>
            { this.props.data.name }
            -
            { this.props.data.id }
            {/* product */}
            <button onClick={this.clickFN} > Delete </button>
            <button> Edit </button>  
        </li>
    );
  }
}

export default ProductItem;
