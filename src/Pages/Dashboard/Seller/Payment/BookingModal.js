import axios from "axios";
import React from "react";

const BookingModal = ({ bookingData, setBookingData }) => {
  const handleBooking = (e) => {
    e.preventDefault();
    const bookingInfo = {
      phone: e.target.phone.value,
      location: e.target.location.value,
      productId: bookingData?.productId,
      thumbnail: bookingData?.thumbnail,
      price: bookingData?.price,
      name: bookingData?.name,
      brand: bookingData?.brand,
      userName: bookingData?.userName,
      userEmail: bookingData?.userEmail,
    };
    axios
      .post("http://localhost:8000/booking", bookingInfo)
      .then((res) => {
        console.log(res);
        setBookingData(null);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box md:w-full relative">
          <h3 className="text-lg font-bold">{bookingData?.name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
            <input
              defaultValue={"Price : " + bookingData?.price + " $"}
              readOnly
              type="text"
              className="input input-bordered w-full"
            />
            <input
              defaultValue={bookingData?.userEmail}
              type="text"
              readOnly
              className="input input-bordered w-full"
            />
            <input
              defaultValue={bookingData?.userName}
              type="text"
              readOnly
              className="input input-bordered w-full"
            />
            <input
              placeholder="Location"
              type="text"
              name="location"
              required
              className="input input-bordered w-full"
            />
            <input
              placeholder="phone number"
              type="text"
              required
              name="phone"
              className="input input-bordered w-full"
            />
            <div className="modal-action">
              <label htmlFor="bookingModal" className="btn">
                Cancel
              </label>
              <button type="submit" htmlFor="bookingModal" className="btn">
                Booking Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
