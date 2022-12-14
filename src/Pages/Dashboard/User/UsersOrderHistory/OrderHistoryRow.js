import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const OrderHistoryRow = ({ order, refetch }) => {
  const handleDelete = (transactionId) => {
    axios
      .delete(
        `https://merchantry-server.vercel.app/payments/${transactionId}`,
        {
          headers: {
            authorisation: `bearer ${localStorage.getItem("merchantry-token")}`,
          },
        }
      )
      .then((data) => {
        toast.success("Successfylly deleted");

        refetch();
      })
      .catch((err) => console.log(err));
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
          onClick={() => handleDelete(order?.transactionId)}
          className="btn btn-error btn-xs mr-4"
        >
          Del
        </button>
        <button className="btn  btn-primary btn-xs btn-disabled">Paid</button>
      </th>
    </tr>
  );
};

export default OrderHistoryRow;
