import React from 'react';
import CSSGrid from "./molecules/grid"
import PermanentDrawerLeft from '../../../modals/Drawer/Drawer';
import { adminDashboardSideBar , iconArray } from '../../modals/Drawer/index'

function Setting() {
  return (
    <div>
        <PermanentDrawerLeft TopiconArray={iconArray} SideBarContent={adminDashboardSideBar} heading={"ACCOUNT SETTING"} screen={<CSSGrid />}/>
    </div>
  )
}

export default Setting;
