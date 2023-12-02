import React from "react";
import InAppNavbar from "../../components/layout/inAppNavbar";
import BooksTable from "../../components/table/allBookings";

const Allbooks = () => {
  return (
    <>
      <InAppNavbar />
      <div className="app-padding">
        <h2 className="allbkingheader">All Bookings</h2>
        <div
          style={{
            width: "100%",
            marginTop: "30px",
            background: "#E8EAF5",
            padding: "30px",
            borderRadius: "5px",
          }}
        >
          <BooksTable />
        </div>
      </div>
    </>
  );
};

export default Allbooks;
