import React from "react";
import breakfast from "./Image/Breakfast.png";
import munchies from "./Image/Munchies.png";
import colddrink from "./Image/Colddrink.png";
import tea from "./Image/Tea.png";
import bakery from "./Image/Bakery.png";
import instantfood from "./Image/Instantfood.png";
import sweettooth from "./Image/Sweettooth.png";
import vegtablesfruits from "./Image/Vegtablesfruits.png"

const Category = () => {
  return (
    <div className="container">
      <div className="row mt-4">
      <h4>Shop by Category</h4>
        <div className="col-12 col-sm-3">
          <div className='rounded float-start mt-4 w-75'>
            <img src={vegtablesfruits} className="img-fluid img-thumbnail" alt='vegtablesfruits' style={{ backgroundColor: "#e1efef", borderRadius: "30px" }} />
            <b>Vegtables & Fruits</b>
          </div>
        </div>
        <div className="col-4 col-sm-3">
          <div className='rounded float-start mt-4 w-75'>
            <img src={breakfast} className="img-fluid img-thumbnail" alt='breakfast' style={{ backgroundColor: "#e1efef", borderRadius: "30px" }} />
            <b> Dairy & Breakfast</b>
          </div>
        </div>
        <div className="col-4 col-sm-3">
          <div className='rounded float-start mt-4 w-75'>
            <img src={munchies} className="img-fluid img-thumbnail" alt='munchies' style={{ backgroundColor: "#e1efef", borderRadius: "30px" }} />
            <b>Munchies</b>
          </div>
        </div>
        <div className="col-4 col-sm-3">
          <div className='rounded float-start mt-4 w-75'>
            <img src={colddrink} className="img-fluid img-thumbnail" alt='colddrink' style={{ backgroundColor: "#e1efef", borderRadius: "30px" }} />
            <b>Cold Drinks & Juices</b>
          </div>
        </div>

        <div className="col-4 col-sm-3">
          <div className='rounded float-start mt-4 w-75'>
            <img src={instantfood} className="img-fluid img-thumbnail" alt='instantfood' style={{ backgroundColor: "#e1efef", borderRadius: "30px" }} />
            <b>Instant & Frozen Food</b>
          </div>
        </div>
        <div className="col-4 col-sm-3">
          <div className='rounded float-start mt-4 w-75'>
            <img src={tea} className="img-fluid img-thumbnail" alt='tea' style={{ backgroundColor: "#e1efef", borderRadius: "30px" }} />
            <b>Tea, Coffee & Health Drinks</b>
          </div>
        </div>
        <div className="col-4 col-sm-3">
          <div className='rounded float-start mt-4 w-75'>
            <img src={bakery} className="img-fluid img-thumbnail" alt='bakery' style={{ backgroundColor: "#e1efef", borderRadius: "30px" }} />
            <b>Bakery & Biscuits</b>
          </div>
        </div>
        <div className="col-4 col-sm-3">
          <div className='rounded float-start mt-4 w-75'>
            <img src={sweettooth} className="img-fluid img-thumbnail" alt='sweettooth' style={{ backgroundColor: "#e1efef", borderRadius: "30px" }} />
            <b>Sweet Tooth</b>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Category;
