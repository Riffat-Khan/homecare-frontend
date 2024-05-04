import React from 'react'
import PermanentDrawerLeft from '../../../modals/Drawer/Drawer';
import ResponsiveGrid from './molecules/issueBox';
import ColumnsGrid from "./molecules/bottomBox";
import { iconArray , ProviderDashboardSideBar } from '../../../modals/Drawer';

function Issues() {
  return (
    <div>
        <PermanentDrawerLeft TopiconArray={iconArray} SideBarContent={ProviderDashboardSideBar} heading={"ISSUES"} screen={<><ResponsiveGrid /><ColumnsGrid /> </>} />
    </div>
  )
}

export default Issues;
