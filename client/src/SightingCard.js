import { deleteSighting } from "./SightingService"

const SightingCard = ({sighting, removeSighting}) => {

    const handleDelete = () => {
        deleteSighting(sighting._id)
        .then((res)=>{
            console.log(res)  //can add an error check here. If statement....
            removeSighting(sighting._id);
        })
    }
    return (
        <>
            <h1>{sighting.species}</h1>
            <p>Location: {sighting.location}</p>
            <p>Date: {sighting.date}</p>
            <button onClick={handleDelete}> 🗑 </button>
            <hr></hr>
        </>
    )
}

export default SightingCard;