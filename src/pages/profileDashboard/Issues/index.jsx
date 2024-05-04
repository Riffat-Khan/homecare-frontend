import React from 'react'
import PermanentDrawerLeft from '../../../modals/Drawer/Drawer';
import ResponsiveGrid from './molecules/issueBox';
import DialogModal from '../../../modals/dialog/DialogModal';
import Create from './molecules/create';
import ColumnsGrid from "./molecules/bottomBox";
import { iconArray , dashboardSideBar } from '../../../modals/Drawer';

function Issues() {
  return (
    <div>
        <PermanentDrawerLeft TopiconArray={iconArray} SideBarContent={dashboardSideBar} heading={"ISSUES"} screen={<><ResponsiveGrid /><div className="flex justify-end mr-10 my-5"><DialogModal sign={"Create New Issue"} route={<Create />} /></div><ColumnsGrid /> </>} />
    </div>
  )
}

export default Issues;
