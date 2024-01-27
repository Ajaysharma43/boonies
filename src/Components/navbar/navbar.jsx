import './navbar.css'
import search from '../../assets/search.png'
import account from '../../assets/account.png';
function Navbar() {
    return(
        <div id="Navbar">
            <section id="section1">
                
                <ul id="list1">               
                <div id="empty"></div>
                    <p id="items1">DESTINATIONS</p>
                    <div class="dropdown">
                    <span>STAYS</span>
                    <div class="dropdown-content">
                    <p>COTTAGES</p>
                    <p>TENT</p>
                    <p>TREE HOUSE</p>
                    <p>CAMP</p>
                    <p>HUT</p>
                     </div>
                     </div>
                    <p id="items1">BLOGS</p>
                    <p id="items1">OUR STORY</p>
                    <p id="items1">CONTACT US</p>
                </ul>
            </section>
            <section id="section2">
                <ul id='list2'>
                    <img src={search} alt="" id='search-image' />
                    <p id='items2'>Search Place</p>
                    <p id='items2'>Login / Signup</p>
                    <button id='items2' class="button">BECOME A HOST</button>
                    <div id="empty"></div>
                </ul>
            </section>
        </div>
    )
}
export default Navbar;