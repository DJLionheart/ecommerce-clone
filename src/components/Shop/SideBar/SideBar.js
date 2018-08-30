import React, { Component } from 'react';

import FilterItem from './FilterItem/FilterItem';

import sideBarData from '../../../assets/data/shop/sideBarData';

import './SideBar.css';

class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            collectionOn: true,
            collectionFilters: {
                newRelease: false,
                abstract: false,
                architecture: false,
                australia: false,
                aviator: false,
                cities: false,
                desert: false,
                europe: false,
                fields: false,
                mountains: false,
                northwest: false,
                skies: false,
                southwest: false,
                trees: false,
                volcanoes: false,
                water: false,
                wildlife: false,
                viewAll: false
            },
            colorOn: true,
            colorFilters: {
                blackWhite: false,
                black: false,
                blue: false,
                brown: false,
                gray: false,
                green: false,
                orange: false,
                pink: false,
                purple: false,
                red: false,
                turquoise: false,
                violet: false,
                white: false,
                yellow: false
            },
            formatOn: true,
            formatFilters: {
                panoramic: false,
                square: false,
                standard: false
            },
            locationOn: true,
            locationFilters: {
                africa: false,
                alaska: false,
                america: false,
                arizona: false,
                arkansas: false,
                aspen: false,
                australia: false,
                belgium: false,
                california: false,
                canada: false,
                chicago: false,
                china: false,
                colorado: false,
                connecticut: false,
                czechRepublic: false,
                delaware: false,
                europe: false,
                florida: false,
                france: false,
                greece: false,
                hawaii: false,
                idaho: false,
                iowa: false,
                italy: false,
                kentucky: false,
                lulouisiana: false,
                maine: false,
                massachusetts: false,
                mexico: false,
                miami: false,
                michigan: false,
                minnesota: false,
                montana: false,
                nevada: false,
                newEngland: false,
                newHampshire: false,
                newMexico: false,
                newZealand: false,
                northDakota: false,
                ohio: false,
                oklahoma: false,
                oregon: false,
                paris: false,
                pennsylvania: false,
                rhodeIsland: false,
                southCarolina: false,
                tennessee: false,
                texas: false,
                utah: false,
                vermont: false,
                washington: false,
                westVirginia: false,
                wyoming: false
            },
            orientationOn: true,
            orientationFilters: {
                hor: false,
                vert: false
            },
            productOn: true,
            productFilters: {
                book: false,
                elementFrame: false,
                elementPack: false,
                eot: false,
                limited: false,
                open: false
            }
        }
        this.toggleFilterGroup = this.toggleFilterGroup.bind(this);
    }

    toggleFilterGroup(evt) {
        this.state[evt.target.name] ? this.setState({[evt.target.name]: false}) : this.setState({[evt.target.name]: true})
    }

    // toggleFilter(evt) {
    //     this.state.[evt.target.filterGroup][evt.target.name] ? this.setState({[evt.target.filterGroup][evt.target.name]: false})
    // }

    render() {
        const { collectionOn, colorOn, formatOn, locationOn, orientationOn, productOn } = this.state;
        
        const collectionList = sideBarData.collections.map( collection => {
            return <FilterItem key={collection.value} value={collection.value} filterGroup="collectionFilters" filterActive={collectionOn}>{collection.name}</FilterItem>
        });

        const colorList = sideBarData.colors.map( collection => {
            return <FilterItem key={collection.value} value={collection.value} filterGroup="colorFilters" filterActive={colorOn}>{collection.name}</FilterItem>
        });

        const formatList = sideBarData.format.map( collection => {
            return <FilterItem key={collection.value} value={collection.value} filterGroup="formatFilters" filterActive={formatOn}>{collection.name}</FilterItem>
        });

        const locationList = sideBarData.location.map( collection => {
            return <FilterItem key={collection.value} value={collection.value} filterGroup="locationFilters" filterActive={locationOn}>{collection.name}</FilterItem>
        });

        const orientationList = sideBarData.orientation.map( collection => {
            return <FilterItem key={collection.value} value={collection.value} filterGroup="orientationFilters" filterActive={orientationOn}>{collection.name}</FilterItem>
        });

        const productList = sideBarData.productTypes.map( collection => {
            return <FilterItem key={collection.value} value={collection.value} filterGroup="productFilters" filterActive={productOn}>{collection.name}</FilterItem>
        });


        return(
            <section className="filter_menu">
                <section className="filter_section">
                    <h5 className="filter_group">Shop by Collection <button name="collectionOn" onClick={ e => { this.toggleFilterGroup(e)}}>{collectionOn ? '-' : '+'}</button></h5>
                    <hr/>
                    <br/>
                    {
                        collectionOn ? <ul className="filter_menu_list">{ collectionList }</ul> : null
                    }
                </section>
                <br/>

                <section className="filter_section">
                    <h5 className="filter_group">Filter by Color <button name="colorOn" onClick={ e => { this.toggleFilterGroup(e)}}>{colorOn ? '-' : '+'}</button></h5>
                    <hr/>
                    <br/>
                    {
                        colorOn ? <ul className="filter_menu_list">{ colorList }</ul> : null
                    }
                </section>
                <br/>

                <section className="filter_section">
                    <h5 className="filter_group">Filter by Format <button name="formatOn" onClick={ e => { this.toggleFilterGroup(e)}}>{formatOn ? '-' : '+'}</button></h5>
                    <hr/>
                    <br/>
                    {
                        formatOn ? <ul className="filter_menu_list">{ formatList }</ul> : null
                    }
                </section>
                <br/>

                <section className="filter_section">
                    <h5 className="filter_group">Filter by Location <button name="locationOn" onClick={ e => { this.toggleFilterGroup(e)}}>{locationOn ? '-' : '+'}</button></h5>
                    <hr/>
                    <br/>
                    {
                        locationOn ? <ul className="filter_menu_list">{ locationList }</ul> : null
                    }
                </section>
                <br/>

                <section className="filter_section">
                    <h5 className="filter_group">Filter by Orientation <button name="orientationOn" onClick={ e => { this.toggleFilterGroup(e)}}>{orientationOn ? '-' : '+'}</button></h5>
                    <hr/>
                    <br/>
                    {
                        orientationOn ? <ul className="filter_menu_list">{ orientationList }</ul> : null
                    }
                </section>
                <br/>

                <section className="filter_section">
                    <h5 className="filter_group">Filter by Product <button name="productOn" onClick={ e => { this.toggleFilterGroup(e)}}>{productOn ? '-' : '+'}</button></h5>
                    <hr/>
                    <br/>
                    {
                        productOn ? <ul className="filter_menu_list">{ productList }</ul> : null
                    }
                </section>
                <br/>
            </section>
        )
    }
}

export default SideBar;