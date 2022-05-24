import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

class ImageList extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    // props


    render() {

        // const users = [
        //     {id: 1, name: 'test1'},
        //     {id: 2, name: 'test2'},
        //     {id: 3, name: 'test3'},
        //     {id: 4, name: 'test4'},
        //     {id: 5, name: 'test5'},
        //     {id: 6, name: 'test6'},
        //     {id: 7, name: 'test7'},

        // ]
        // const usersList = users.map(( {id, name} ) => <li key={id}>{name}</li>);
        // <ul>{usersList}</ul>


        const images = this.props.images.map(image => {
            return <ImageCard key={image.id} image={image} />
        } )
        return (
            <div className="image-list">
                {images}
            </div>
        );
    }
}

export default ImageList;
