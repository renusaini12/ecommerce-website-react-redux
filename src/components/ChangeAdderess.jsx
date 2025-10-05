import React, { useState } from "react";

const ChangeAddress = ({ address, setAddress, setIsModalOpen }) => {
  const [newAddress, setNewAddressInput] = useState(address);

  return (
    <div>
      <input
        type="text"
        value={newAddress}
        onChange={(e) => setNewAddressInput(e.target.value)}
        placeholder="Enter new address"
        className="border p-2 w-full mb-4"
      />
      <div className="flex justify-end">
        <button
          onClick={() => setIsModalOpen(false)}
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            setAddress(newAddress);
            setIsModalOpen(false);
          }}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
