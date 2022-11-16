
export default function Card(props){
    return(
        <div className='card flex-container'>
            <div className='image'>
                <img className='card-img' src={props.imageUrl}/>
            </div>
            <div className='information'>
                <div class='location-info'>
                    <p className='country'><i class="fa-solid fa-location-dot"></i> {props.location}</p>
                    <a className='map' href={props.googleMapsUrl}>View on google maps</a>
                </div>
                <h3 className='title'>{props.title}</h3>
                <p className='dates'>{props.startDate} - {props.endDate}</p>
                <p className='description'>{props.description}</p>
                

            </div>


        </div>
    )


}