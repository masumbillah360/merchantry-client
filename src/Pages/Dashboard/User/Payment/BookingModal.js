import axios from "axios";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";

const BookingModal = ({ setBookingData, data }) => {
  console.log(data);
  const { user } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const handleBooking = (e) => {
    if (!user?.uid) {
      toast.error("Please login before booking");
      navigate("/login");
      return;
    }
    e.preventDefault();
    const bookingInfo = {
      phone: e.target.phone.value,
      location: e.target.location.value,
      productId: data?._id,
      thumbnail: data?.thumbnail,
      price: data?.presentPrice,
      name: data?.name,
      brand: data?.brand,
      userName: user?.displayName,
      userEmail: user?.email,
    };
    axios
      .post("http://localhost:8000/booking", bookingInfo, {
        headers: {
          authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setBookingData(null);
        toast.success("Booking successfully Added");
        navigate("/dashboard/myorders");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box md:w-full relative">
          <h3 className="text-lg font-bold">{data?.name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
            <input
              defaultValue={"Price : " + data?.presentPrice + " $"}
              readOnly
              type="text"
              className="input input-bordered w-full"
            />
            <input
              defaultValue={user?.email}
              type="text"
              readOnly
              className="input input-bordered w-full"
            />
            <input
              defaultValue={user?.displayName}
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
