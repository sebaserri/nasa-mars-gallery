import React from 'react';
import Photo from './Photo';

class PhotoGrid extends React.Component {
    render() {
        return (
          <div className="photo-grid">
            {this.props.gallery.map((image, i) => <Photo {...this.props} key={i} image={image} />)}
          </div>
        );    
    }
}
export default PhotoGrid;
