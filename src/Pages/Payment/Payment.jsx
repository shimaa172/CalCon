import React from "react";
import Nav from "../../Components/Nav/Nav";
import pymentsty from "./payment.module.css";
export default function Payment() {
  let fun = () => {
    let click = document.getElementById("click");
    click.style.display = "block";
    setTimeout(blockfun, 3000);
  };
  let blockfun = () => {
    let click = document.getElementById("click");
    click.style.display = "none";
  };

  return (
    <div className={`py-5 ${pymentsty.parentpyment}`}>
      <div className={` ${pymentsty.secondpar}`}>
        <div className={`container mt-5 py-5 ${pymentsty.pycontain}`}>
          <Nav/>
          <div className="row ">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="mb-4">
                <p>
                  <span className={`${pymentsty.ship}`}>1</span>shipping address
                  <br />
                  <span className={`${pymentsty.field}`}>
                    All field required unless labeled option
                  </span>
                </p>
                <div className={`${pymentsty.pyinfo}`}>
                  <label htmlFor="">E-mail</label>
                  <input
                    type="email"
                    className={`form-control ${pymentsty.innputs} `}
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="">country</label>
                  <select className={`form-control ${pymentsty.innputs}`}>
                    <option value="">Egypt</option>
                    <option value="">kwit</option>
                  </select>
                </div>
                <div className="mt-2">
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    className={`form-control  ${pymentsty.innputs}`}
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="">Address</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="4"
                    className={`form-control  ${pymentsty.innputs}`}
                  >
                    dddd
                  </textarea>
                </div>
                <div className="mt-2">
                  <label htmlFor="">City/Town</label>
                  <input
                    type="text"
                    className={`form-control  ${pymentsty.innputs}`}
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="">mobile number</label>
                  <input
                    type="number"
                    className={`form-control  ${pymentsty.innputs}`}
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="">payment method</label>
                  <select
                    name=""
                    id=""
                    className={`form-control  ${pymentsty.innputs}`}
                  >
                    <option value="" >Cash</option>
                    <option value="">visa</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4  ">
              <div className={` mb-4 ms-4`}>
                <p className={`${pymentsty.creditinfo}`}>
                  <span className={`${pymentsty.ship}`}>2</span>shipping &#38;
                  address
                  <br />
                  <span className={`${pymentsty.fieldtwo}`}>
                    secure credit card information
                  </span>
                </p>
                <div className={`${pymentsty.colorddiv}`}>
                  <div className={`${pymentsty.clickpos}`} id="click">
                    <p className={`${pymentsty.check}`}>
                      <i className="fa-solid fa-check"></i>
                    </p>
                    <p className={`${pymentsty.purchase} `}>
                      Thank you for your purchase. <br />
                      Please enjoy … something! <br />
                      We have sent a email confirmation to <br />
                      *******@gmail.com.
                    </p>
                  </div>

                  <p className={`${pymentsty.creditnum}`}>
                    credit card number{" "}
                    <span className={`${pymentsty.ship}`}>?</span>
                    {/* <i className={`fa-solid fa-bag-shopping  ${pymentsty.shoppingbag}`}></i> */}
                  </p>
                  <input
                    type="text"
                    className={`form-control  ${pymentsty.innputs} ${pymentsty.inputtag}`}
                  />
                  <i
                    className={`fa-solid fa-credit-card ${pymentsty.creditcard}`}
                  ></i>
                  <p className={`${pymentsty.creditnumtwo}`}>
                    Expiration Data{" "}
                    <span className={`${pymentsty.ship}`}>?</span>
                  </p>
                  <input
                    type="number"
                    className={`form-control ${pymentsty.pynum} ${pymentsty.innputs}`}
                  />
                  <span>/</span>
                  <input
                    type="number"
                    className={` form-control ${pymentsty.pynum} ${pymentsty.pynumtwo}`}
                  />
                  <p className={`${pymentsty.creditnumtwo}`}>
                    security code (or "cvc" or "cvv"){" "}
                    <span className={`${pymentsty.ship}`}>?</span>
                  </p>
                  <input
                    type="text"
                    className={`form-control  ${pymentsty.innputs} ${pymentsty.pynum}`}
                  />
                  <i
                    className={`fa-solid fa-credit-card ${pymentsty.creditcard}`}
                  ></i>
                  <div className="mt-3">
                    <input
                      type="checkbox"
                      className={` ${pymentsty.innputs} ${pymentsty.ccheck}`}
                    />
                    <p className={`${pymentsty.checkparg}`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam nulla labore, numquam quaerat quasi ipsa!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 ">
              <div className={`${pymentsty.summery}`}>
                <p className={`${pymentsty.summryinfo}`}>
                  <span className={`${pymentsty.ship}`}>3</span>Order &#38;
                  Summery
                  <br />{" "}
                </p>
                <div className="mt-4">
                  <label htmlFor="">Gift Card &#38; Promotional Codes</label>
                  <input
                    type="text"
                    className={`form-control ${pymentsty.optionsty}`}
                    placeholder="optional"
                  />
                </div>
                <p className={`mt-5 ${pymentsty.reminfo}`}>
                  Remember Your Account Information
                </p>
                <p className={`${pymentsty.remdetail}`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit .
                  Eaque, in. Ullam ducimus quis laborum eveniet!
                </p>
                <input
                  type="text"
                  className={`form-control ${pymentsty.optionsty}`}
                  placeholder="optional"
                />
                <p className={`mt-3 ${pymentsty.reminfo}`}>Order Summery</p>
                <p className={`${pymentsty.price}`}>
                  items:4
                  <br />
                  Total before tax:300EL
                  <br />
                  shopping &#38; handing:30 EL
                  <br />
                  Tax:30
                </p>
                <p className={`${pymentsty.pricetotal}`}>TOTAL</p>
                <h3 className={`${pymentsty.pricetotalh}`}>350 EL</h3>
                <button className="bttn" onClick={fun}>
                  place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
