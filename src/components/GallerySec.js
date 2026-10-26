import React,{Component} from "react";
import CenteredColumns from "./CenteredColumns";
import Gallery from 'react-grid-gallery';


class GallerySec extends React.Component {
  //console.log(`${Config.API}`);
  
  constructor(props){
    super(props);

    this.state = {
        images: this.props.images
    };

}

  // singleevent(itm){
  //   console.log("hehe"+itm.id);
    
  // }
  render(){
  return (
    <CenteredColumns>
      
        <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    
                    overflow: "auto"}}>
                <Gallery
            images={this.state.images}
            enableLightbox={true}
            enableImageSelection={false}/>


        </div>
      
    </CenteredColumns>
  );
}
}
export default GallerySec;
