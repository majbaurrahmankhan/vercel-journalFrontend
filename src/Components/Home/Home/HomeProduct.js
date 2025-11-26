
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from '../Rating';
import './UserProduct.css'

import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';


import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


const HomeUserProduct = ({ addItem }) => {
    const { sale } = addItem;
    const [likeCount, setLikeCount] = useState(100);
    const [dislikeCount, setDislikeCount] = useState(100);

    const [activeBtn, setActiveBtn] = useState("none");


    const handleLikeClick = () => {
        if (activeBtn === "none") {
            setLikeCount(likeCount + 1);
            setActiveBtn("like");
            return;
        }

        if (activeBtn === 'like') {
            setLikeCount(likeCount - 1);
            setActiveBtn("none");
            return;
        }

        if (activeBtn === "dislike") {
            setLikeCount(likeCount + 1);
            setDislikeCount(dislikeCount - 1);
            setActiveBtn("like");
        }
    };
    const handleDisikeClick = () => {
        if (activeBtn === "none") {
            setDislikeCount(dislikeCount + 1);
            setActiveBtn("dislike");
            return;
        }

        if (activeBtn === 'dislike') {
            setDislikeCount(dislikeCount - 1);
            setActiveBtn("none");
            return;
        }

        if (activeBtn === "like") {
            setDislikeCount(dislikeCount + 1);
            setLikeCount(likeCount - 1);
            setActiveBtn("dislike");
        }
    };

    const [addedItems, setAddedItems] = useState()

    const { _id, name, img, description, Quantity, Supplier, price, rating } = addItem;
    const navigate = useNavigate();

    const navigateToAddedItemDetail = id => {
        navigate(`/addedItem/${id}`);
    }
    return (
        <div data-aos="fade-up" className="col">
            <div className="card h-100 cardImage border-start-0 border-bottom-0 border-top-0 p-3 border-end-3">
                <div className="card-body">
                    <img className='w-100' src={img} alt="" />
                    <h2 className="card-title">{name}</h2>
                    {/* <p>{description}</p> */}
                    <p>Price : {price}</p>
                    <p>In stock : {Quantity}</p>
                    <p>Supplier : {Supplier}</p>
                    <Container>

                        <p className='rating'>Rating :

                            {/* <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star-half-stroke"></i> */}


                            <FaStar className="icon FaStar" />
                            <FaStar className="icon FaStar" />
                            <FaStar className="icon FaStar" />
                            <FaStar className="icon FaStar" />
                            <FaStarHalfAlt className="icon FaStarHalfAlt" />




                        </p>
                    </Container>
                    {/* liktbtn */}
                    <div>
                        <div className="container">
                            <div className="btn-container">
                                <button
                                    className={`btn my-1 bg-success text-white ${activeBtn === "like" ? "like-active" : ""}`}
                                    onClick={handleLikeClick}
                                >
                                    <span className="material-symbols-rounded bg-primary"></span>
                                    Like {likeCount}
                                </button>

                                <button
                                    className={`btn m-1 bg-secondary text-white ${activeBtn === "dislike" ? "dislike-active" : ""}`}
                                    onClick={handleDisikeClick}
                                >
                                    <span className="material-symbols-rounded bg-primary"></span>
                                    Dislike {dislikeCount}
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* likebtn */}
                    {/* <Rating></Rating> */}





                    {/* <Rating></Rating> */}

                    <button onClick={() => navigateToAddedItemDetail(_id)} className='btn btn-primary'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default HomeUserProduct;