
const GifGridItem =({title,image})=>{

    return(
        <div>
            <img src={image} alt={title} />
            <p>{title}</p>
            
        </div>
    )

}

export default GifGridItem