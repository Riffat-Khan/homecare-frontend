import React from 'react';
import PermanentDrawerLeft from "../../../modals/Drawer/Drawer";
import { AutoGrid, ResponsiveGrid } from "./molecules/overview";
import { adminDashboardSideBar , iconArray } from '../../../modals/Drawer/index';

function Dashboard() {
  return (
    <div>
        <PermanentDrawerLeft TopiconArray={iconArray} SideBarContent={adminDashboardSideBar} heading={"OVERVIEW"} screen={<><ResponsiveGrid /><AutoGrid /></>} />      
    </div>
  )
}

export default Dashboard;
