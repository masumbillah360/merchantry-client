import React, { useState } from "react";
import BookingModal from "./Payment/BookingModal";
import Payment from "./Payment/Payment";

const Dashboard = () => {
  const [contactInfo, setContactInfo] = useState("contact");
  return (
    <div>
      <BookingModal setContactInfo={setContactInfo} />
      <div className="hidden">
        <Payment constactInfo={contactInfo} />
      </div>
    </div>
  );
};

export default Dashboard;
