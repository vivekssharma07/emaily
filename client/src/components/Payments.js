import React,{Component} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {

        return (
            <StripeCheckout
                name = "Emaily"
                description="$5 for 5 credits "
                amount ={500}
                token={token =>this.props.handlePayment(token)}
                stripeKey={'pk_test_0ojU6w0MSZcoros8qyReCVNb007U7Mnt67'} 
                >
                <button className="btn">
                     Add Credits
                </button>
           </ StripeCheckout>
          
        )
    }
}

export default connect(null,actions)(Payments);