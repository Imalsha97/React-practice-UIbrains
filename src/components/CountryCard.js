import React from 'react';
import img1 from '../assests/image/pexels-felix-mittermeier-957024.jpg';
import img2 from '../assests/image/pexels-kelly-l-2876511.jpg';
import img3 from '../assests/image/pexels-lumn-167699.jpg';
import img4 from '../assests/image/pexels-thiago-japyassu-1563604.jpg';

let CountryCard = () => {
    return (
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-3">
                    <div className="card shadow-lg">
                        <img src={img1} alt=""/>
                        <div className="card-body">
                            <h3>Paris</h3>
                            <p>
                            is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 2000s, 
                            when an unknown printer took .
                            </p>
                            <button className="btn btn-dark btn-sm">Read more</button>
                
                        </div>
                
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-lg">
                        <img src={img2} alt=""/>
                        <div className="card-body">
                            <h3>Paris</h3>
                            <p>
                            is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 2000s, 
                            when an unknown printer took .
                            </p>
                            <button className="btn btn-dark btn-sm">Read more</button>
                
                        </div>
                
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-lg">
                        <img src={img4} alt=""/>
                        <div className="card-body">
                            <h3>Paris</h3>
                            <p>
                            is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 2000s, 
                            when an unknown printer took .
                            </p>
                            <button className="btn btn-dark btn-sm">Read more</button>
                
                        </div>
                
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-lg">
                        <img src={img3} alt=""/>
                        <div className="card-body">
                            <h3>Paris</h3>
                            <p>
                            is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 2000s, 
                            when an unknown printer took .
                            </p>
                            <button className="btn btn-dark btn-sm">Read more</button>
                
                        </div>
                
                    </div>
                </div>
            </div>
        </div>

        </>
    )

};

export default CountryCard;
