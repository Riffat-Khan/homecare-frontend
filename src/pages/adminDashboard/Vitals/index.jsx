import React from "react";
import PermanentDrawerLeft from "../../../modals/Drawer/Drawer";
import RowAndColumnSpacing from "./molecules/vitalsBox";

function Vitals() {
  return (
    <div>
      <PermanentDrawerLeft
        heading={"VITALS"}
        screen={
          <>
            <RowAndColumnSpacing />
          </>
        }
      />
    </div>
  );
}

export default Vitals;
