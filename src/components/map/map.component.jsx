import { Link } from "react-router-dom";
import { StyledMap } from "./maps.styles";

const Map = () => {
    return (
        <StyledMap>
            <div className='mapContainer'>
                <div className="mapCard">
                    <h3 className="mapCardHeading">Coogins</h3>
                    <p>Devil's Millhopper, Gainesville</p>
                    <Link className="mapCardLink" target="_blank" rel="noreferrer" to="https://www.google.com/maps/@29.7043425,-82.3937602,15z">Open in Google Maps</Link>
                </div>
            </div>
        </StyledMap>

    )
}

export default Map