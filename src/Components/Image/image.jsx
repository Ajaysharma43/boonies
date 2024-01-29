import './image.css'
import vally from '../../assets/vally.jpeg'
import location from '../../assets/location.png'
import search1 from '../../assets/search1.png'
function image() {
    return(
        <>
        <div id='image-vally'>
            <div id='image-empty'></div>
            <h1 id="image-text">explore</h1>
            <h1 id='image-text-1'>EXTRAORDINARY</h1>
            <h1 id='image-text-2'>locations</h1>
            <div id='image-empty-2'>
                <div></div>
                <div id='image-empty-3'>
                    <div id='image-line'></div>
                    <div id='image-text-3'><i>to make remarkable memories</i></div>
                    <div id='image-line'></div>
                </div>
                <div></div>
            </div>
            <div id='image-empty-4'>
                <div></div>
                <div id='image-empty-5'>
                <div id='image-location'>
                <img src={location} alt="" id='image-location-2' />
                </div>
                <div>
                    <input type="text" placeholder='Search By City, State or Stay Name' id='image-search'/>
                </div>
                <div>
                <button id='image-search-button'><p><img src={search1.png} alt={search1.png} id='image-search1'/>Search</p></button>
                </div>
                </div>
                <div></div>
                
            </div>
        </div>
        </>
    )
}

export default image;