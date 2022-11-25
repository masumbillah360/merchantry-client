import axios from "axios";
import React from "react";

const OrderRow = ({ order }) => {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/orders/${id}`)
      .then(() => alert("succes"));
  };
  return (
    <tr className="hover">
      <td className="w-10" title={order?.transactionId}>
        {order?.transactionId?.slice(0, 20) + "..."}
      </td>
      <td>
        {order?.price}
        <br />
        <span className="badge badge-ghost badge-sm">Price</span>
      </td>
      <td>
        <span>{order?.userEmail}</span>
        <span>{order?.userName}</span>
      </td>
      <th>
        <button
          onClick={() => handleDelete(order._id)}
          className="btn btn-error  btn-xs"
        >
          Del
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
