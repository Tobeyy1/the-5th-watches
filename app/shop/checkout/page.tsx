"use client";

import { FunctionComponent } from "react";
import classes from "./Checkout.module.scss";
import NavBar from "@/app/components/NavBar/Navbar";
import Image, { StaticImageData } from "next/image";
import ONYX from "../../assets/bilbao/onyx.png";
import { useDispatch, useSelector } from "react-redux";
import { showCartActions } from "@/app/store/store";
import Cart from "@/app/components/utils/Cart/Cart";

interface CheckoutProps {}

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  amount: number;
  collection: string;
  src: StaticImageData;
  bgColor: string;
}

const Checkout: FunctionComponent<CheckoutProps> = () => {
  // const cartItems = [];
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.cart);
  const showCart = useSelector((state: any) => state.showCart.showCart);
  const totalAmount = useSelector(
    (state: any) => state.totalAmount.totalAmount
  );
  console.log(cartItems);
  const editHandler = () => {
    dispatch(showCartActions.setShowCart());
  };

  return (
    <div className={classes.container}>
      <NavBar />
      <div className={classes.ui}>
        {showCart && <Cart />}
        <section className={classes.payment__details}>
          <header className={classes.header}>
            <h2>Checkout Details</h2>
          </header>
          <div className={classes.shipping__info}>
            <h6>Shipping Address</h6>
            <form className={classes.form}>
              <label htmlFor="Country" className={classes.label}>
                <p>Country</p>
                <select
                  title="Country"
                  name="Country"
                  id={classes.select}
                  required
                >
                  <option value="AU">Australia</option>
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="DE">Germany</option>
                  <option disabled={true} value="">
                    ---
                  </option>
                  <option value="AR">Argentina</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BG">Bulgaria</option>
                  <option value="CA">Canada</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="HR">Croatia</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czechia</option>
                  <option value="DK">Denmark</option>
                  <option value="EC">Ecuador</option>
                  <option value="SV">El Salvador</option>
                  <option value="EE">Estonia</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GR">Greece</option>
                  <option value="HK">Hong Kong SAR</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IE">Ireland</option>
                  <option value="IT">Italy</option>
                  <option value="JP">Japan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macao SAR</option>
                  <option value="MY">Malaysia</option>
                  <option value="MT">Malta</option>
                  <option value="MU">Mauritius</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="MA">Morocco</option>
                  <option value="NL">Netherlands</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NO">Norway</option>
                  <option value="PH">Philippines</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="RO">Romania</option>
                  <option value="SG">Singapore</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="KR">South Korea</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="TW">Taiwan</option>
                  <option value="TH">Thailand</option>
                  <option value="TR">Turkey</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                  <option value="UY">Uruguay</option>
                  <option value="VN">Vietnam</option>
                </select>
              </label>
              <div className={classes.fullName}>
                <label htmlFor="First Name" className={classes.label}>
                  <p>First Name</p>
                  <input
                    type="text"
                    name="First Name"
                    placeholder="John"
                    className={classes.input}
                  />
                </label>
                <label htmlFor="Last Name" className={classes.label}>
                  <p>Last Name</p>
                  <input
                    type="text"
                    name="Last Name"
                    placeholder="Doe"
                    className={classes.input}
                  />
                </label>
              </div>
              <label htmlFor="Company" className={classes.label}>
                <p>Company</p>
                <input
                  type="text"
                  name="Company"
                  placeholder="Company(optional)"
                  className={classes.input}
                />
              </label>
              <label htmlFor="Address" className={classes.label}>
                <p>Address</p>
                <input
                  type="text"
                  name="Address"
                  placeholder="Address"
                  className={classes.input}
                />
              </label>
              <label htmlFor="Apartment" className={classes.label}>
                <input
                  type="text"
                  name="Apartment"
                  placeholder="Apartment(optional)"
                  className={classes.input}
                />
              </label>
              <div className={classes.location}>
                <label htmlFor="City" className={classes.label}>
                  <input
                    type="text"
                    name="City"
                    placeholder="City"
                    className={classes.input}
                  />
                </label>
                <label htmlFor="State" className={classes.label}>
                  <input
                    type="text"
                    name="State"
                    placeholder="State"
                    className={classes.input}
                  />
                </label>
                <label htmlFor="ZIP Code" className={classes.label}>
                  <input
                    type="number"
                    inputMode="numeric"
                    name="ZIP Code"
                    placeholder="ZIP Code"
                    className={classes.input}
                  />
                </label>
              </div>
              <label htmlFor="Phone" className={classes.label}>
                <input
                  type="number"
                  inputMode="numeric"
                  name="Phone"
                  placeholder="Phone(optional)"
                  className={classes.input}
                />
              </label>
              <div className={classes.form__cta__container}>
                <button className={classes.form__cta}>
                  Continue to Shipping
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className={classes.order}>
          <header>
            <h6>Your order</h6>
            <button type="button" onClick={editHandler}>
              Edit
            </button>
          </header>
          <div className={classes.cart__items}>
            {cartItems.map((cartItem: CartItem) => {
              return (
                <div className={classes.cart__item} key={cartItem.name}>
                  <div
                    className={classes.image__container}
                    style={{
                      backgroundColor: `${cartItem.bgColor}`,
                    }}
                  >
                    <Image
                      src={cartItem.src}
                      alt={"Cart item"}
                      fill
                      className={classes.image}
                    />
                  </div>
                  <p>{cartItem.name}</p>
                  <span>${cartItem.amount.toFixed(2)}</span>
                </div>
              );
            })}
          </div>

          <div className={classes.total__amount}>
            <section className={classes.coupon}>
              <p>Free Shipping on orders above $100.00</p>
            </section>
            <section className={classes.details}>
              <div>
                <p>Subtotal:</p>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div>
                <p>Taxes:</p>
                <span>Free</span>
              </div>
              <div>
                <p>Shipping</p>
                <span>Free</span>
              </div>
              <div className={classes.total}>
                <p>Total Price</p>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </section>
          </div>
          <section className={classes.order__cta__container}>
            <button type="button" className={classes.order__cta}>
              Place Order
            </button>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Checkout;
