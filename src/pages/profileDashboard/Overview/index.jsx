import React from "react";
import PermanentDrawerLeft from "../../../modals/Drawer/Drawer";
import { AutoGrid, ResponsiveGrid } from "./molecules/overview";
import { iconArray, dashboardSideBar } from "../../../modals/Drawer/index";

function Overview() {
  return (
    <div>
      <PermanentDrawerLeft
        TopiconArray={iconArray} SideBarContent={dashboardSideBar}
        heading={"OVERVIEW"} screen={<><ResponsiveGrid />
          <AutoGrid />
        </>
        }
      />
    </div>
  );
}

export default Overview;


