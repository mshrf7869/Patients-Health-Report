import React from "react";

const Diagnosis = ({ data, idx }) => {
  const diagnostics = data[idx].diagnostic_list;
  return (
    <div className="w-full max-h-[200px] bg-white rounded-xl p-2">
      <h1 className="text-xl font-bold my-2 px-2">Diagnostic List</h1>
      <div className="flex flex-col">
        <div className="flex bg-gray-100 font-semibold">
          <div className="flex-1 p-3 ">Problem/Diagnosis</div>
          <div className="flex-1 p-3 ">Description</div>
          <div className="flex-1 p-3 ">Status</div>
        </div>

        <div className="overflow-y-auto max-h-[200px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {diagnostics.map((item, inde) => (
            <div key={inde} className="flex hover:bg-gray-50">
              <div className="flex-1 p-2 border">{item.name}</div>
              <div className="flex-1 p-2 border">{item.description}</div>
              <div className="flex-1 p-2 border">{item.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;
