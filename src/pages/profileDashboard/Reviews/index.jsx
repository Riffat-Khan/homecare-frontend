import React from "react";
import PermanentDrawerLeft from "../../../modals/Drawer/Drawer";
import CSSGrid from "./molecules/grid";
import { iconArray , dashboardSideBar } from '../../../modals/Drawer/index';

function Reviews() {
  return (
    <div>
      <PermanentDrawerLeft
        TopiconArray={iconArray}
        SideBarContent={dashboardSideBar}
        heading={"REVIEWS"}
        screen={<CSSGrid />}
      />
    </div>
  );
}

export default Reviews;
