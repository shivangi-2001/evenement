import { useState, useEffect } from "react";
import ContactSlider from "../components/contactSlider";

const PricingContact = () => {
  return (
    <>
        <div className="flex justify-center bg-orange-200  py-3 rounded-lg w-full">
      <div className="container mx-auto w-5/12">
          <div className="flex justify-center border-1 border-orange-300 bg-orange-100 p-4 px-0 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl m-auto box-content p-2">
              <form action="" method="post" className="space-y-4 p-4 text-orange-950">
                <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" required/>
                <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" required/>
                <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Message (optional)"></textarea>              
                <button className="btn btn-outline flex-auto hover:text-white hover:bg-orange-900 text-orange-900">Contact Us</button>
              </form>
              <div className="w-full md:w-64">
                <div className="mx-auto carousel rounded-box">
                  <ContactSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingContact;
