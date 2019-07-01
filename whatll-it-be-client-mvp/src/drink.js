import React, {Component} from 'react';

class Drink extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            drinks: [], 
            search: ''
        }
    }

    setSearch(search) {
        this.setState({
            search
        });
    }

    render() {
        const drinks = this.state.drinks.map((drink, i) => {
            return <
        })
    }
}
