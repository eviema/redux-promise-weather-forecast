import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };

        // to fix incorrect context "this" 
        // when calling a callback function, 
        // use the following statement, which reads:
        // "this" (right side), this instance of our searchbar component,
        // has a function called onInputChange. 
        // Bind this function to "this" instance, and
        // replace this function with a new bound instance of it. 
        this.onInputChange = this.onInputChange.bind(this);

        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault(); // prevent default behaviour of HTML
                                // i.e. don't submit the form!
                                // but why using <form /> at all?
                                // because it comes with OTHER behaviour for FREE
                                // e.g. meeting user expectations of typing sth in,
                                // hitting enter key, or clicking Submit button.
                                // so good to use <form /> for any type of user input
        // need to go and fetch weather data here
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        // classNames ready to use? boostrap linked
        
        // A WRONG WAY TO handle input change:
        // onChange={this.onInputChange} WITHOUT 
        // binding the context as this instance of the class component
        // two ways to fix: bind the context, or use arrow function instead
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-button">
                    <button type="submit" 
                            className="btn btn-secondary">
                            Submit
                    </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
// null: don't care about state here 
// mapDispatchToProps can be passed only as the SECOND argument