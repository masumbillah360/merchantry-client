import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const OrderRow = ({ order, refetch }) => {
  const handleDelete = (id) => {
    axios
      .delete(`https://merchantry-server.vercel.app/booking/${id}`, {
        headers: {
          authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
        },
      })
      .then(() => {
        toast.success("Successfylly deleted");
        refetch();
      });
  };
  return (
    <tr className="hover">
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={order?.thumbnail} alt="Orderd product thumbanil" />
          </div>
        </div>
      </td>
      <td>
        {order?.name}
        <br />
        <span className="badge badge-ghost badge-sm">{order?.brand}</span>
      </td>
      <td>{order?.price}</td>
      <th>
        <button
          onClick={() => handleDelete(order._id)}
          className="btn btn-error btn-xs mr-4"
        >
          Del
        </button>
        <Link
          to={`/dashboard/payment/${order?.productId}`}
          className={`btn btn-primary btn-xs ${
            order?.paid ? "btn-disabled" : ""
          }`}
        >
          {order.status ? "Paid" : "Pay"}
        </Link>
      </th>
    </tr>
  );
};

export default OrderRow;
