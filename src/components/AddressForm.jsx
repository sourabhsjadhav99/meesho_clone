import React from "react";
import { useFormik } from "formik";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import validationSchema from "../validations/addressValidation";

function AddressForm({ isOpenAddress, toggleAddressSidebar, onSave }) {
  const navigate = useNavigate();

 
// Define formik object with initial values, validation schema, and onSubmit function
const formik = useFormik({
  initialValues: {
    name: "",
    mobile: "",
    house: "",
    road: "",
    pincode: "",
    city: "",
    state: "",
  },
  validationSchema, // Assuming validationSchema is defined elsewhere
  onSubmit: (values) => {
    // Saving form values to local storage
    localStorage.setItem("address", JSON.stringify(values));

    // Toggling the address sidebar (assuming this function exists in your component)
    toggleAddressSidebar();

    // Navigating to the "/payment" route using useNavigate from React Router
    navigate("/payment");

    // Executing the onSave function (assuming this function exists in your component)
    onSave();
  },
});


  return (
    <div
      className={`sidebar fixed top-0 right-0 w-[75%] md:w-[35%] h-[100%] bg-white border-l-2 z-100 hidden transition-transform duration-500 ${
        isOpenAddress ? "open" : ""
      }`}
    >
      <div className="flex flex-col h-[100%]">
        <div className="flex justify-between border-b-2 p-5">
          <p className="text-lg font-semibold">ADD DELIVERY ADDRESS</p>
          <button onClick={toggleAddressSidebar}>
            <RxCross2 className="text-2xl font-bold" />
          </button>
        </div>
        <div className="sidebar-body">
          <form
            onSubmit={formik.handleSubmit}
            id="addressForm"
            className="flex flex-col gap-5"
          >
            <div className="flex gap-3 items-center font-bold">
              <FaPhoneVolume className="text-xl text-sky-600" />
              <h2 className="text-xl">Contact Details</h2>
            </div>
            <div>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-[100%] border-b p-3  outline-0 ${
                  formik.touched.name && formik.errors.name
                    ? " border-[#9f2089]"
                    : ""
                }`}
                placeholder="Name"
              />
              {formik.touched.name && formik.errors.name ? (
                <small className="text-red-500 text-xs">
                  {formik.errors.name}
                </small>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-[100%] border-b p-3  outline-0 ${
                  formik.touched.mobile && formik.errors.mobile
                    ? " border-[#9f2089]"
                    : ""
                }`}
                placeholder="Contact Number"
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                <small className="text-red-500 text-xs">
                  {formik.errors.mobile}
                </small>
              ) : null}
            </div>
            <div className="flex gap-3 items-center font-bold">
              <FaLocationDot className="text-xl text-sky-600" />
              <h2 className="text-xl">Address</h2>
            </div>
            <div>
              <input
                type="text"
                name="house"
                value={formik.values.house}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-[100%] border-b p-3  outline-0 ${
                  formik.touched.house && formik.errors.house
                    ? " border-[#9f2089]"
                    : ""
                }`}
                placeholder="House No. / Building name"
              />
              {formik.touched.house && formik.errors.house ? (
                <small className="text-red-500 text-xs">
                  {formik.errors.house}
                </small>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                name="road"
                value={formik.values.road}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-[100%] border-b p-3  outline-0 ${
                  formik.touched.road && formik.errors.road
                    ? " border-[#9f2089]"
                    : ""
                }`}
                placeholder="Road Name / Area / Colony"
              />
              {formik.touched.road && formik.errors.road ? (
                <small className="text-red-500 text-xs">
                  {formik.errors.road}
                </small>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                name="pincode"
                value={formik.values.pincode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-[100%] border-b p-3  outline-0 ${
                  formik.touched.pincode && formik.errors.pincode
                    ? " border-[#9f2089]"
                    : ""
                }`}
                placeholder="Pincode"
              />
              {formik.touched.pincode && formik.errors.pincode ? (
                <small className="text-red-500 text-xs">
                  {formik.errors.pincode}
                </small>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-[100%] border-b p-3  outline-0 ${
                  formik.touched.city && formik.errors.city
                    ? " border-[#9f2089]"
                    : ""
                }`}
                placeholder="City"
              />
              {formik.touched.city && formik.errors.city ? (
                <small className="text-red-500 text-xs">
                  {formik.errors.city}
                </small>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-[100%] border-b p-3  outline-0 ${
                  formik.touched.state && formik.errors.state
                    ? " border-[#9f2089]"
                    : ""
                }`}
                placeholder="State"
              />
              {formik.touched.state && formik.errors.state ? (
                <small className="text-red-500 text-xs ">
                  {formik.errors.state}
                </small>
              ) : null}
            </div>
          </form>
        </div>
        <div className="p-5 border-t-2 flex justify-center">
          <button
            type="submit"
            form="addressForm"
            className="flex items-center w-[100%] justify-center font-bold bg-[#9f2089] p-2 text-white rounded-lg"
          >
            Save Address and Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddressForm;
