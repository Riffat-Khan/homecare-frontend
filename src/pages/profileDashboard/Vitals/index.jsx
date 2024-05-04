import React from "react";
import PermanentDrawerLeft from "../../../modals/Drawer/Drawer";
import RowAndColumnSpacing from "./molecules/vitalsBox";
import { iconArray, dashboardSideBar } from "../../../modals/Drawer/index";

function Vitals() {
  return (
    <div>
      <PermanentDrawerLeft
        TopiconArray={iconArray}
        SideBarContent={dashboardSideBar}
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
