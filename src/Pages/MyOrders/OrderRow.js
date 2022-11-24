import React from "react";

const OrderRow = ({ order }) => {
  return (
    <tr className="hover">
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={order.thumbnail} alt="Orderd product thumbanil" />
          </div>
        </div>
      </td>
      <td>
        {order.name}
        <br />
        <span className="badge badge-ghost badge-sm">{order?.brand}</span>
      </td>
      <td>{order.price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Del</button>
        <button className="btn btn-ghost btn-xs">Pay</button>
      </th>
    </tr>
  );
};

export default OrderRow;
