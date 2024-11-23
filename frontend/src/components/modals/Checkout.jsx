import React,{useState} from "react";

import pause from '../../assets/pause.svg'

const Checkout = () => {

  const [discountBox,setDiscountBox]=useState(false)
  const [couponBox,setCouponBox]=useState(false)
  const [addNoteBox,setAddNoteBox]=useState(false)
  
  return (
    <div className="w-[30vw] bg-white px-3 py-2 relative">
      {/* Add Section */}
      <div className="flex justify-between items-center bg-[#ffd7a5] text-[#FC8019] font-medium rounded-lg mb-2 px-2 py-2">
        <div>
          <h4>Add</h4>
        </div>
        <div className="flex gap-4">
          <h4 onClick={()=>{setDiscountBox(!discountBox),setCouponBox(false),setAddNoteBox(false)}} className="cursor-pointer">Discount</h4>
          <h4 onClick={()=>{setDiscountBox(false),setCouponBox(!couponBox),setAddNoteBox(false)}} className="cursor-pointer">Coupon Code</h4>
          <h4 onClick={()=>{setDiscountBox(false),setCouponBox(false),setAddNoteBox(!addNoteBox)}} className="cursor-pointer">Note</h4>
        </div>
      </div>

      {/* Amount Section */}
      <div className="flex flex-col gap-2 ">
        {/* Subtotal Section */}
        <div className="flex justify-between items-center text-md">
          <p>Subtotal</p>
          <p>$200.00</p>
        </div>
        {/* Tax Section */}
        <div className="flex justify-between items-center">
          <p>Tax</p>
          <p>$45.00</p>
        </div>
        {/* Payable amount section */}
        <div className="flex justify-between items-center text-xl font-semibold">
          <p>Payable Amount</p>
          <p>$195.00</p>
        </div>
        <div className="flex w-full justify-between gap-2">
          <button className="text-lg rounded-lg text-center w-full py-3 orange">Hold To Cart</button>
          <button className="text-lg rounded-lg text-center w-full py-3 bg-green-500">Proceed</button>
        </div>
      </div>

      <div className={`${discountBox ?'absolute':'hidden'} bottom-14 right-full mr-2 shadow-sm shadow-black min-w-32 min-h-20 px-3 py-2 bg-white  border rounded-lg`}>
        <h2 >Add Discount</h2>
        <div className="my-2 flex gap-2">
          <p className="cursor-pointer px-3 py-2 bg-gray-300 rounded-lg font-semibold">%</p>
          <p className="cursor-pointer px-3 py-2 bg-gray-300 rounded-lg font-semibold">$</p>
          <input type="text" placeholder="Amount" className="w-32 border-2 px-2 py-1 rounded-lg outline-none"/>
        </div>
        <div className="my-2 flex gap-2 w-full">
          <p onClick={()=>setDiscountBox(false)} className="cursor-pointer px-8 py-2 orange rounded-lg">Cancel</p>
          <p className="cursor-pointer px-8 py-2 bg-green-500 rounded-lg">Add</p>
        </div>
      </div>

      {/* Add Coupon Code */}
      <div className={`${couponBox ?'absolute':'hidden'} bottom-14 right-full mr-2 shadow-sm shadow-black min-w-32 min-h-20 px-3 py-2 bg-white  border rounded-lg`}>
        <h2 >Add Coupon Code</h2>
        <div className="my-2 flex gap-2">
          
          <input type="text" placeholder="Add Coupon Code" className="w-full border px-2 py-1 rounded-lg outline-none"/>
        </div>
        <div className="my-2 flex gap-2 w-full">
          <p onClick={()=>setCouponBox(false)} className="cursor-pointer px-8 py-2 orange rounded-lg">Cancel</p>
          <p className="cursor-pointer px-8 py-2 bg-green-500 rounded-lg">Add</p>
        </div>
      </div>

      {/* Add Note Box */}
      <div className={`${addNoteBox ?'absolute':'hidden'} bottom-14 right-full mr-2 shadow-sm shadow-black min-w-32 min-h-20 px-3 py-2 bg-white  border rounded-lg`}>
        <h2 >Add Notes</h2>
        <div className="my-2 flex gap-2">
        
          <input type="text" placeholder="Add Note..." className="w-full border px-2 py-1 rounded-lg outline-none"/>
        </div>
        <div className="my-2 flex gap-2 w-full">
          <p onClick={()=>setAddNoteBox(false)} className="cursor-pointer px-8 py-2 orange rounded-lg">Cancel</p>
          <p className="cursor-pointer px-8 py-2 bg-green-500 rounded-lg">Add</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
