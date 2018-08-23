import React, { Component } from 'react';
import Result from './Result/Result';

import './SearchBar.css';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: '',
            resultsActive: false,
            results: []
        }
    }
    render() {
        const { searchInput, resultsActive, results } = this.state;

        const resultList = results.map( (result, i) => {
            return <Result key={i} product={ result.title }/>
        })

        return(
            <article className="search_dropdown">
                <section className={!resultsActive ? "full_drop" : "partial_drop"}>
                    <input id="searchBar" type="text" value={ searchInput } onChange={ e => this.setState({searchInput: e.target.value})}/>
                </section>
                {
                    resultsActive ? <section className="results_drop">
                        { resultList }
                        <section className="result_product_link">
                            <p>View all products matching "{searchInput}" ({results.length})</p>
                        </section>
                    </section>
                    : null
                }
            </article>
        )
    }
}

export default SearchBar;