import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import breakfast from "./Image/Breakfast.png";
import munchies from "./Image/Munchies.png";
import colddrink from "./Image/Colddrink.png";

const Vegtablesfruits = () => {
    return (
        <div className="container-fluid mt-3">

            <div class="container overflow-hidden">
                <div class="row gy-1">
                    <div class="col-12">
                        <div class="p-3 border bg-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2C15.187 2 19 5.813 19 10.5C19 12.6747 18.1791 14.6613 16.8309 16.1662L22.8658 22.1945C23.0494 22.3794 23.0494 22.68 22.8658 22.8648C22.7744 22.9568 22.6539 23.0033 22.5334 23.0033C22.4128 23.0033 22.2923 22.9568 22.2 22.8648L16.1632 16.8335C14.6587 18.1802 12.6733 19 10.5 19C5.813 19 2 15.187 2 10.5C2 5.813 5.813 2 10.5 2ZM10.5 3C6.364 3 3 6.364 3 10.5C3 14.636 6.364 18 10.5 18C14.637 18 18 14.636 18 10.5C18 6.364 14.637 3 10.5 3Z" fill="#414547" />
                            </svg>
                        </div>

                    </div>
                    <div class="col-2 sm-3">
                        <div class="p-3 border bg-light">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <div className='rounded mx-auto d-block w-25'>
                                        <img src={breakfast} className="img-fluid img-thumbnail" alt='breakfast' />
                                        <b>Fresh Vegtables</b>
                                    </div>
                                </li>
                                <li class="nav-item">
                                <div className='rounded mx-auto d-block w-25'>
                                        <img src={munchies} className="img-fluid img-thumbnail" alt='munchies' />
                                        <b>Fresh Fruits</b>
                                    </div>
                                </li>
                                <li class="nav-item">
                                <div className='rounded mx-auto d-block w-25'>
                                        <img src={colddrink} className="img-fluid img-thumbnail" alt='colddrink' />
                                        <b>Fresh cuts and Sprouts</b>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-10">
                        <div class="p-3 border bg-light">
                        <div className='rounded mx-auto d-block w-25'>
                                        <img src={breakfast} className="img-fluid img-thumbnail" alt='breakfast' />
                                        <b>Fresh Vegtables</b>
                                    </div>
                                    <div className='rounded mx-auto d-block w-25'>
                                        <img src={breakfast} className="img-fluid img-thumbnail" alt='breakfast' />
                                        <b>Fresh Vegtables</b>
                                    </div>
                                    <div className='rounded mx-auto d-block w-25'>
                                        <img src={breakfast} className="img-fluid img-thumbnail" alt='breakfast' />
                                        <b>Fresh Vegtables</b>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Vegtablesfruits;
