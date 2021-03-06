import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as ActionType from '../../config/ActionType';
import {storage} from '../../config/url';

const operatorName = {
    add: 'add',
    clean: 'clean'
};

const NumbersItem = ({numbers, onEvent}) => (
    <div className="numbers-item">
        <div className="numbers-item__button minus" onClick={() => onEvent(operatorName.clean)}><p>-</p></div>
        <p className="numbers-item__numbers">{numbers}</p>
        <div className="numbers-item__button plus" onClick={() => onEvent(operatorName.add)}><p>+</p></div>
    </div>
);

class BasketControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: 0,
            price: 0,
        };
        this.onBasket = this.onBasket.bind(this);
    }

    onBasket(operator) {
        const {
            item_name,
            category_name,
            item_id,
            item_price,
            item_size_m_price,
        } = this.props.item;

        const pushBasket = (callback) => {
            callback({
                name: item_name,
                category: category_name,
                id: item_id,
                numbers: this.state.numbers,
                price: this.state.price,
                size: this.props.size
            })
        };

        const pushNewState = () => {
            if (this.props.size) {
                if (item_size_m_price) {
                    this.setState({price: this.state.numbers * (Number(item_price) + Number(item_size_m_price))}, () => pushBasket(this.props.addBasket));
                } else {
                    this.setState({price: this.state.numbers * Number(item_price)},() => pushBasket(this.props.addBasket));
                }
            } else {
                this.setState({price: this.state.numbers * Number(item_price)}, () => pushBasket(this.props.addBasket));
            }
        };

        if (operator === operatorName.add) {
            this.setState({numbers: ++this.state.numbers}, () => pushNewState() );
        } else if (operator === operatorName.clean) {
            if (this.state.numbers > 1) {
                this.setState({numbers: --this.state.numbers}, () => pushNewState());
            } else if (this.state.numbers === 1) {
                this.setState({numbers: 0, price: 0}, () => pushBasket(this.props.deleteItemBasket));
            }
        }
    }

    componentDidMount() {
        const storageBasket = localStorage.getItem(storage.basket);
        if (storageBasket) {
            const storageBasketArray = JSON.parse(storageBasket);
            const findItem = storageBasketArray.find((item) => {
                return item.id === this.props.item.item_id && item.size === this.props.size
            });
            if (findItem) {
                this.setState({price: findItem.price, numbers: findItem.numbers, size: findItem.size});
            }
        }
    }

    render() {
        const {numbers} = this.state;
        return (
            <div>
                {numbers ? <NumbersItem numbers={numbers} onEvent={this.onBasket}/> :
                    <div onClick={() => this.onBasket(operatorName.add)} className="numbers-item__active">{this.props.addBlock}</div>}
            </div>
        )
    }
}

BasketControl.defaultProps = {
    addBlock: null,
    size: false,
};

export default connect(
    state => ({
        Store: state
    }),
    dispatch => ({
        addBasket: (item) => {
            dispatch({type: ActionType.ADD_BASKET, payload: item});
        },
        deleteItemBasket: (item) => {
            dispatch({type: ActionType.DELETE_ITEM_BASKET, payload: item});
        }
    })
)(BasketControl)