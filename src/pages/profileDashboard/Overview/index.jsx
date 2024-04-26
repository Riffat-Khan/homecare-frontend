import React from 'react';
import PermanentDrawerLeft from "../../../modals/Drawer/Drawer"
import { AutoGrid, ResponsiveGrid } from "./molecules/overview"

function Overview() {
  return (
    <div>
        <PermanentDrawerLeft heading={"OVERVIEW"} screen={<><ResponsiveGrid /><AutoGrid /></>} />      
    </div>
  )
}

export default Overview;
