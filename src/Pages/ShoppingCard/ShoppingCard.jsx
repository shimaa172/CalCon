import React, { useState } from "react";
import shopsty from "./shopping.module.css";
import { useNavigate } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

export default function ShoppingCard() {
  let cartMeals = JSON.parse(window.localStorage.getItem("meals"))
    ? JSON.parse(window.localStorage.getItem("meals"))
    : [];
  const [meals, setCartMeals] = useState(cartMeals);
  const navigate = useNavigate();

  let shippingfees = 0;
  let taxes = 0;
  let totalPrice = 0;
  meals.forEach((p) => (totalPrice += p.price));

  let removeDev = (id) => {
    cartMeals = cartMeals.filter((p) => p.id !== id);
    if (cartMeals.length === 0) {
      window.localStorage.removeItem("meals");
    }
    window.localStorage.setItem("meals", JSON.stringify(cartMeals));
    setCartMeals([...cartMeals]);
  };
  let removeAll = () => {
    window.localStorage.removeItem("meals");
    let cartMeals = [];
    setCartMeals([...cartMeals]);
  };

  return (
    <div className={`${shopsty.parentshop}`}>
      <div className={` ${shopsty.secoundparent}`}>
        <div className="pt-5 container">
          <Nav/>
          <div className={`row `}>
            <div className={`col-sm-12 col-md-12 col-lg-6 `}>
              <div className={`${shopsty.parentcolor}`}>
                <div className="p-2">
                  <span className="ms-2">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                  <span className="ms-2">Order summary </span>
                  <span className={`${shopsty.removeall}`} onClick={removeAll}>
                    Remove all
                  </span>
                </div>

                {meals.map((meal, index) => {
                  return (
                    <div className={` row mb-4`} key={index}>
                      <div className={`col-sm-12 col-md-5 col-lg-5 col-12`}>
                        <div className={`${shopsty.tdone}`}>
                          <img src={meal.src} alt="noimage" />
                          <p>
                            {meal.name}
                            <br />
                            <span className={`${shopsty.spaninfo}`}>
                              sub information
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className={`col-sm-3 col-md-3 col-lg-3 col-3 mt-2`}>
                        <div className={`${shopsty.tdtwo}`}>
                          <p className={`${shopsty.tdtwop}`}>+</p>
                          <span>1</span>
                          <p className={`${shopsty.tdtwop}`}>-</p>
                        </div>
                      </div>
                      <div className={`col-sm-2 col-md-2 col-lg-2  col-2 mt-2`}>
                        <div>
                          <p>{meal.price} LE</p>
                        </div>
                      </div>
                      <div className={`col-sm-2 col-md-2 col-lg-2  col-2 mt-2`}>
                        <span
                          onClick={() => {
                            removeDev(meal.id);
                          }}
                        >
                          <i
                            className={`fa-solid fa-trash-can ${shopsty.deletecol}`}
                          ></i>
                        </span>
                      </div>
                    </div>
                  );
                })}

                <hr />
                <div>
                  <div className={`row `}>
                    <div className={`col-sm-12 col-md-5 col-lg-5 `}>
                      <div>
                        <h6 className={`${shopsty.hcolor}`}>subtotal</h6>
                        <h6 className={`${shopsty.hcolor}`}>shipping fees</h6>
                        <h6 className={`${shopsty.hcolor}`}>taxes</h6>
                        <h6 className={`${shopsty.hcolor} ${shopsty.hweight}`}>
                          total(include)
                        </h6>
                      </div>
                    </div>
                    <div
                      className={`col-sm-12 col-md-5 col-lg-5 offset-md-2 offset-lg-2`}
                    >
                      <div>
                        <h6 className={`${shopsty.hcolor}`}>{totalPrice}LE</h6>
                        <h6 className={`${shopsty.hcolor}`}>
                          {shippingfees}Le
                        </h6>
                        <h6 className={`${shopsty.hcolor}`}>{taxes}LE</h6>
                        <h6 className={`${shopsty.hcolor} ${shopsty.hweight}`}>
                          {totalPrice}LE
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-sm-12 col-md-12 col-lg-6 mt-md-4 mt-lg-0`}>
              <div className={`mt-4 mt-md-0 ${shopsty.leftparent}`}>
                <p className={`${shopsty.credit}`}>current credit card</p>
                <p className={`${shopsty.credittwo}`}>add new credit card</p>

                <div className={`${shopsty.divfelx}`}>
                  <div className={`${shopsty.firstdiv}`}>
                    <p className={`${shopsty.parag}`}>VISA</p>
                    <p className={`mt-4 ${shopsty.paragtwo}`}>
                      .... &nbsp; .... &nbsp; ....&nbsp; 3693
                    </p>
                    <p className={`${shopsty.paragtwo}`}>Ahamed Mohamed</p>
                  </div>
                  <div className={`${shopsty.secounddiv}`}>
                    <input type="file" className={`${shopsty.hide}`} />
                    <p className={`${shopsty.paraginput}`}>+</p>
                  </div>
                </div>
                <div className={`mt-5 ${shopsty.cardholder}`}>
                  <div className={`mb-5`}>
                    <label className={`mt-2`}>Name of card holder</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ahamed Mohamed"
                    />
                  </div>
                  <div className={`${shopsty.creditnumber}`}>
                    <p className={`${shopsty.paragnumber}`}>
                      credit card number
                    </p>
                    <div className={`mt-4 ${shopsty.paragtwoagain}`}>
                      <p className={`${shopsty.pcredit}`}>
                        .... &nbsp; .... &nbsp; ....&nbsp; 3693
                      </p>
                      <button className={`${shopsty.creditshow}`}>show</button>
                    </div>
                    <div className={`mt-5 ${shopsty.finalbutton}`}>
                      <button
                        className={`${shopsty.finalfirstbut}`}
                        onClick={() => {
                          navigate("/payment");
                        }}
                      >
                        checkOut
                      </button>
                      <button
                        className={`${shopsty.finalsecondbut}`}
                        onClick={() => {
                          navigate("/home");
                        }}
                      >
                        back to Home
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}