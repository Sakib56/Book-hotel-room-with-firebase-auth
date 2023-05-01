import React from 'react';
import card1 from '../assets/single-room.jpg'
import card2 from '../assets/cupple-room.jpg'
import card3 from '../assets/family-room.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto my-20 grid grid-cols-1 md:grid-cols-3'>
            <div className="card w-96 shadow-xl">
                <h2 className='text-center text-lg my-3 font-semibold'>Standard single room</h2>
                <figure><img src={card1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to='/book' className="btn btn-primary ">Book</Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 shadow-xl">
                <h2 className='text-center text-lg my-3 font-semibold'>Couple Power room </h2>
                <figure><img src={card2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">

                        <Link to='/book' className="btn btn-primary ">Book</Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 shadow-xl">
                <h2 className='text-center text-lg my-3 font-semibold'>Family Capacity room</h2>
                <figure><img src={card3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">

                        <Link to='/book' className="btn btn-primary ">Book</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;