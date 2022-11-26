import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const OrderHistoryRow = ({ order, refetch }) => {
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/booking/${id}`).then(() => {
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
        <button className="btn  btn-primary btn-xs">Paid</button>
      </th>
    </tr>
  );
};

export default OrderHistoryRow;
