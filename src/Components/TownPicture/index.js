import {useState, useEffect} from 'react';

export default function TownPicture(props) {
const [url, setUrl] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg')

    useEffect(() => {
        if (props.actualTown === 'London') {
            setUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg")
        }
        if (props.actualTown === 'Crawley') {
            setUrl("https://upload.wikimedia.org/wikipedia/commons/0/0f/Queens_Square%2C_Crawley_%28geograph_5814836%29.jpg")
        }
        if (props.actualTown === 'Maidstone') {
            setUrl("https://upload.wikimedia.org/wikipedia/commons/b/b9/Fremlin_Walk_-_geograph.org.uk_-_948897.jpg")
        }
        if (props.actualTown === 'Winchester') {
            setUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Winchester_Cathedral_-_geograph.org.uk_-_1736947.jpg/1920px-Winchester_Cathedral_-_geograph.org.uk_-_1736947.jpg")
        }
        if (props.actualTown === 'Dover') {
            setUrl("https://upload.wikimedia.org/wikipedia/commons/e/ec/Dover_Castle_%28Castle_Street%29.JPG")
        }  
    }, [props.actualTown]);

    return (
        <div className="townPicture">
            <img src={url} alt={props.currentTown} style={{width: '380px', height: '250px'}}/>
        </div>
    )

}