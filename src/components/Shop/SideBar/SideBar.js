import React, { Component } from 'react';

import FilterItem from './FilterItem/FilterItem';

import sideBarData from '../../../assets/data/shop/sideBarData';

class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            collectionFil: true,
            colorFil: true,
            formatFil: true,
            locationFil: true,
            orientationFil: true,
            productFil: true,
        }
        this.toggleFilterGroup = this.toggleFilterGroup.bind(this);
    }

    toggleFilterGroup(evt) {
        this.setState({
            [evt.target.name]: ![evt.target.name]
        })
    }
    render() {
        const collectionList = sideBarData.collections.map( collection => {
            return <FilterItem key={collection.value}>{collection.name}</FilterItem>
        });

        const colorList = sideBarData.colors.map( collection => {
            return <FilterItem key={collection.value}>{collection.name}</FilterItem>
        });

        const formatList = sideBarData.format.map( collection => {
            return <FilterItem key={collection.value}>{collection.name}</FilterItem>
        });

        const locationList = sideBarData.location.map( collection => {
            return <FilterItem key={collection.value}>{collection.name}</FilterItem>
        });

        const orientationList = sideBarData.orientation.map( collection => {
            return <FilterItem key={collection.value}>{collection.name}</FilterItem>
        });

        const productTypeList = sideBarData.productTypes.map( collection => {
            return <FilterItem key={collection.value}>{collection.name}</FilterItem>
        });


        const { collectionFil, colorFil, formatFil, locationFil, orientationFil, productFil } = this.state;
        return(
            <section className="filter_menu">
                <h5 className="filter_group">Shop by Collection <button name="collectionFil" onClick={ e => { this.toggleFilterGroup(e)}}>{collectionFil ? '-' : '+'}</button></h5>
                <hr/>
                {
                    collectionFil ? <ul className="filter_menu_list">{ collectionList }</ul> : null
                }
            </section>
        )
    }
}

export default SideBar;