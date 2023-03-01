export default function ImageShowComponent({image}) {
    return(<div>
        <img src={image.urls.small} alt={image.alt_description} />
    </div>)
}