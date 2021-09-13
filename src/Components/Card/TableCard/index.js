import React from "react";

const TableCard = () => {
  const tableHead = ["Location", "Views", "Sales", "Conversion", "Total"];

  const tableData = [
    {
      location: "google.com",
      views: "3796",
      sales: "752",
      conversion: "43%",
      total: "$19,291",
    },
    {
      location: "facebook.com",
      views: "8126",
      sales: "728",
      conversion: "32%",
      total: "$17,638",
    },
    {
      location: "twitter.com",
      views: "8836",
      sales: "694",
      conversion: "28%",
      total: "$16,218",
    },
    {
      location: "Direct, email, IM",
      views: "1173",
      sales: "645",
      conversion: "24%",
      total: "$14,421",
    },
    {
      location: "linkedin.com",
      views: "2739",
      sales: "539",
      conversion: "20%",
      total: "$12,370",
    },
  ];

  return (
    <div className="p-2 lg:p-3 w-full md:col-span-2 md:w-2/3 lg:-mt-40">
      <div className="bg-white px-4 py-3 rounded-lg">
        <div className="mt-3 flex justify-between">
          <h3 className="text-lg text-lightGray pb-3">Referrer</h3>
        </div>
        <div className=" w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap mb-3">
            <thead>
              <tr>
                {tableHead.map((head) => (
                  <th
                    className="p-4 title-font font-medium text-tableHeadTextColor text-sm bg-tableHeadColor"
                    key={head}
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.sales} className="text-mainColor text-sm">
                  <td className="p-4 border-b border-veryLightGray">
                    {data.location}
                  </td>
                  <td className="p-4 border-b border-veryLightGray">
                    {data.views}
                  </td>
                  <td className="p-4 border-b border-veryLightGray">
                    {data.sales}
                  </td>
                  <td className="p-4 border-b border-veryLightGray">
                    {data.conversion}
                  </td>
                  <td className="p-4 border-b border-veryLightGray">
                    {data.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <a href="/" className="text-sm px-4" style={{ color: "#3B86FF" }}>
            Show More
          </a>
        </div>
      </div>
    </div>
  );
};

export default TableCard;
