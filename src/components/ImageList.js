import ImageShowComponent from "./ImageShow"
import './ImageList.css'
export default function ImageListComponent({images}) {
    const renderedImages = images.map((x)=>
    {return <ImageShowComponent key={x.id} image={x}/>} )
    return(<div className="image-list">{renderedImages}</div>)
}