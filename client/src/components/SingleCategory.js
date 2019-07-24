import React from 'react';
import Grid from '@material-ui/core/Grid';

import './Custom.css';

export default class SingleCategory extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            menu: this.props.data,
            display_col1: false,
            display_col2: false,
            display_col3: false,
            display_images: [],
        }

    }

    render() {

        let { menu, display_col1, display_col2, display_col3, display_images } = this.state

        //Grid data setup
        const latest_col1 = menu.children_data.map(child => {
            const otherColumns = child.is_column_header || child.include_in_menu_column2 || child.include_in_menu_column3
            console.log("Check is : ", otherColumns)
            if (!otherColumns) {
                display_col1 = true
                return (<Grid item md>
                    {child.name}
                </Grid>)
            }
            else { return null }

        }
        )
        //Grid data setup
        const latest_col2 = menu.children_data.map(child => {
            const include_col2 = child.include_in_menu_column2 && !child.is_column_header
            console.log("Check is : ", include_col2)
            if (include_col2) {
                display_col2 = true
                return (<Grid item md>
                    {child.name}
                </Grid>)
            }
            else { return null }
        }
        )
        //Grid data setup
        const latest_col3 = menu.children_data.map(child => {
            const include_col3 = child.include_in_menu_column3 && !child.is_column_header
            console.log("Check is : ", include_col3)
            if (include_col3) {
                display_col3 = true
                return (<Grid item md>
                    {child.name}
                </Grid>)
            }
            else { return null }
        }
        )

        const images = []

        if (menu.dropdown_image_url1) {

            images.push(
                {
                    title: menu.dropdown_image_title1,
                    url: menu.dropdown_image_url1
                }
            )
        }
        if (menu.dropdown_image_url2) {

            images.push(
                {
                    title: menu.dropdown_image_title2,
                    url: menu.dropdown_image_url2
                }
            )
        }
        if (menu.dropdown_image_url3) {

            images.push(
                {
                    title: menu.dropdown_image_title3,
                    url: menu.dropdown_image_url3
                }
            )
        }

        if (menu.dropdown_image_url4) {

            images.push(
                {
                    title: menu.dropdown_image_title4,
                    url: menu.dropdown_image_url4
                }
            )
        }

        const imageGrid = images.map(image => {
            display_images = true
            return (
                <div style={{ margin: 3 }}>
                    <img src={image.url} height={100} alt={image.title} />
                    <p>{image.title}</p>
                </div>
            )
        }

        )
//
        return (
        
            <div className="main">
               {display_col1 && <div className="col1">
               {latest_col1}
                </div>}
               { display_col2 &&<div className="col2">
               {latest_col2}
                </div>}
                {display_col3 &&<div className="col3">
                {latest_col3}
                </div> } 
                {display_images &&<div className="col4">
                {imageGrid}
                </div>  }
            </div>
            
            );
    }
}