import React from 'react';
import Img1 from '../../Assets/Img/Goat-Kids-Care-and-Management-2.jpg';
import Img2 from '../../Assets/Img/goat3.jpeg';
import Img3 from '../../Assets/Img/weightGoat.jpg';
import Img12 from '../../Assets/Img/Vaccine.jpg';
import Img13 from '../../Assets/Img/breeding.webp';
import Img14 from '../../Assets/Img/report.jpg';
import Img15 from '../../Assets/Img/pngtree-yellow-office-report-image_1297576.jpg';
import Img16 from '../../Assets/Img/pngtree-write-report-line-filled-icon-png-image_324810.jpg';
import { Link } from 'react-router-dom';

function HomeServices() {
    return <>
    <div className='section'>
        <h2>Home Services</h2>
        <ul className='cards'>
            <li className='card'>
                <Link className='Link' to="/animals">
                <img  src={Img1} alt='goat1'/>
                <h3>Animals</h3>
                <p>Enter The  Animals Details Data</p>
                <button className='btn mb-2 me-2 ' style={{ backgroundColor: '#88522e', borderColor: '#88522e', color: 'white' }}>Go to Animal</button>
                </Link>
            </li>
            <li className='card'>
                <Link className='Link' to="/matingTable">
                <img  src={Img2} alt='goat2'/>
                <h3>Mating</h3>
                <p>Enter The Animal Mating Data</p>
                <button className='btn mb-2 me-2' style={{ backgroundColor: '#88522e', borderColor: '#88522e', color: 'white' }}>Go to Mating</button>
                </Link>
            </li>
            <li className='card'>
                <Link className='Link' to="/weightTable">
                <img  src={Img3} alt='goat3'/>
                <h3>Weight</h3>
                <p>Enter The Animal's Weight Data</p>
                <button className='btn mb-2 me-2' style={{ backgroundColor: '#88522e', borderColor: '#88522e', color: 'white' }}>Go to Weight</button>
                </Link>
            </li>

            <li className='card'>
                <Link className='Link' to="/breadingTable">
                <img  src={Img13} alt='goat5'/>
                <h3>Breeding</h3>
                <p>Enter The Animal's Breeding Data</p>
                <button className='btn mb-2 me-2' style={{ backgroundColor: '#88522e', borderColor: '#88522e', color: 'white' }}>Go to Breeding</button>
                </Link>
            </li>

            <li className='card'>
                <Link className='Link' to="/vaccineTable">
                <img  src={Img12} alt='goat4'/>
                <h3>Vaccine</h3>
                <p>Enter The Animal's Vaccine Data</p>
                <button className='btn mb-2 me-2' style={{ backgroundColor: '#88522e', borderColor: '#88522e', color: 'white' }}>Go to Vaccine</button>
                </Link>
            </li>

            <li className='card'>
                <Link className='Link' to="/report">
                <img  src={Img14} alt='goat5'/>
                <h3>Report</h3>
                <p>Enter The Animal's Report Data</p>
                <button className='btn mb-2 me-2' style={{ backgroundColor: '#88522e', borderColor: '#88522e', color: 'white' }}>Go to Report</button>
                </Link>
            </li>
            
            <li className='card'>
                <Link className='Link' to="/reportDaliy">
                <img  src={Img15} alt='goat6'/>
                <h3>Report</h3>
                <p>Enter The Animal's Daliy Report Data</p>
                <button className='btn mb-2 me-2' style={{ backgroundColor: '#88522e', borderColor: '#88522e', color: 'white' }}>Go to Daliy Report</button>
                </Link>
            </li>
            
            <li className='card'>
                <Link className='Link' to="/exclutedtable">
                <img  src={Img16} alt='goat7'/>
                <h3>Excluted</h3>
                <p>Enter The Animal's Daliy Excluted Data</p>
                <button className='btn mb-2 me-2' style={{ backgroundColor: '#88522e', borderColor: '#88522e', color: 'white' }}>Go to  Excluted</button>
                </Link>
            </li>
        </ul>
    </div>
    </>
}

export default HomeServices