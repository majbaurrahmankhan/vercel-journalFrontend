import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

import banner1 from './banner-1.jpg';
import banner2 from './banner-2.png';
import banner3 from './banner-3.jpg';


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
       /* <Carousel className="w-50 mt-5 pt-5 mx-auto" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className="text-light">
                    <h3>“Crashing is part of cycling as crying is part of love.” — ...</h3>
                    <p>If you crash, it is imperative that you assess injury and damage to both yourself and your bike prior to continuing your ride. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100   "
                    src={banner2}
                    alt="First slide"
                />
                <Carousel.Caption className="text-light">
                    <h3>PLAY AND BE FIT.</h3>
                    <p>The health benefits of regular cycling include: increased cardiovascular fitness.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100   "
                    src={banner3}
                    alt="First slide"
                />
                <Carousel.Caption className="text-light">
                    <h3>CYCLING IS mainly AN AEROBIC ACTIVITY.</h3>
                    <p>You will breathe deeper, perspire and experience increased body temperature, which will improve your overall fitness level.</p>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>
        */


        <Carousel className="w-100" activeIndex={index} onSelect={handleSelect}>
                   
         <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={banner1}
                    alt="First slide"
                />
                 <Carousel.Caption className="text-light">
                    <h3>“Welcome to Journal of Computer Science &  Engineering (CSE) Journal: ” — ...</h3>
                    <p>A CSE journal is a scholarly publication that publishes research articles, reviews, case studies, and technical papers in the field of Computer Science and Engineering. These journals serve as platforms for researchers, academicians, and professionals to share new knowledge, techniques, and innovations. </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={banner2}
                    alt="First slide"
                />
                 <Carousel.Caption className="text-light">
                    <h3>“Crashing is part of cycling as crying is part of love.” — ...</h3>
                    <p>If you crash, it is imperative that you assess injury and damage to both yourself and your bike prior to continuing your ride. </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={banner3}
                    alt="First slide"
                />
                 <Carousel.Caption className="text-light">
                    <h3>“Crashing is part of cycling as crying is part of love.” — ...</h3>
                    <p>If you crash, it is imperative that you assess injury and damage to both yourself and your bike prior to continuing your ride. </p>
                </Carousel.Caption>
            </Carousel.Item>
        
                </Carousel>
    );
};

export default Banner;













// import React from 'react';
// import b1 from '../../../images/banner-1.jpg'
// import b2 from '../../../images/banner-2.jpg'
// import b3 from '../../../images/banner-3.jpg'
// import b4 from '../../../images/banner-1.jpg'
// import b5 from '../../../images/banner-2.jpg'
// import b6 from '../../../images/banner-3.jpg'
// import b7 from '../../../images/banner-1.jpg'
// import b8 from '../../../images/banner-2.jpg'
// import b9 from '../../../images/banner-3.jpg'
// import './Banner.css'


// const Banner = () => {
//     return (
//         <div>

//             <div class="gallery carousel-item">
//                 <ul class="cards">
//                     <li><img src={b1} height="600" width="800"/></li>
//                     <li><img src={b2} height="600" width="800"/></li>
//                     <li><img src={b3} height="600" width="800"/></li>
//                     <li><img src={b4} height="600" width="800"/></li>
//                     <li><img src={b5} height="600" width="800"/></li>
//                     <li><img src={b6} height="600" width="800"/></li>
//                     <li><img src={b7} height="600" width="800"/></li>
//                     <li><img src={b8} height="600" width="800"/></li>
//                     <li><img src={b9} height="600" width="800"/></li>
                    

//                 </ul>
//                 <div class="actions">
//                     <button class="prev">Prev</button>
//                     <button class="next">Next</button>
//                 </div>
//             </div>

//             <script src='https://unpkg.co/gsap@3/dist/gsap.min.js'></script>
//             <script src='https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js'></script>
//             <script src="./script.js"></script>

//         </div>
//     );
// };

// export default Banner;