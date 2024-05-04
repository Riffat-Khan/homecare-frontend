import React, {useState} from 'react';
import PermanentDrawerLeft from '../../../modals/Drawer/Drawer';
import { iconArray , adminDashboardSideBar } from '../../../modals/Drawer';
import GridBox from "./molecules/gridBox";

function Employees() {
  return (
    <div>
        <PermanentDrawerLeft TopiconArray={iconArray} SideBarContent={adminDashboardSideBar} heading={"Employees List"} screen={<><GridBox /> </>} />
    </div>
  )
}

export default Employees
