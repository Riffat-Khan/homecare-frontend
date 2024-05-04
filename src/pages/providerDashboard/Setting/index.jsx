import React from 'react';
import CSSGrid from "./molecules/grid"
import PermanentDrawerLeft from '../../../modals/Drawer/Drawer';
import { iconArray , dashboardSideBar } from '../../../modals/Drawer/index';

function Setting() {
  return (
    <div>
        <PermanentDrawerLeft TopiconArray={iconArray}
        SideBarContent={dashboardSideBar} heading={"ACCOUNT SETTING"} screen={<CSSGrid />}/>
    </div>
  )
}

export default Setting;
