import { Link } from "react-router-dom"

const Map = () => {
    return (
        <div>
            <div className='mapContainer'>
                <div className='mapCard'>
                    <h3 className='mapCardHeader'>Coogins</h3>
                    <p className='mapCardText'>Gainesville, FL</p>
                    <Link to={'https://www.google.com/maps/place/Deer+Run,+Gainesville,+FL+32653/@29.7105424,-82.3979759,15z/data=!3m1!4b1!4m6!3m5!1s0x88e8bad796d6bbe3:0xabdb531efd5dcd2e!8m2!3d29.713903!4d-82.3980661!16s%2Fg%2F11bvtdz1bj'} target="_blank" rel="noreferrer" className='mapCardLink'>Open in Google Maps</Link>
                </div>
            </div>
        </div>

    )
}

export default Map