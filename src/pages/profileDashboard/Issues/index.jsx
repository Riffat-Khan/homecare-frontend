import React from 'react'
import PermanentDrawerLeft from '../../../modals/Drawer/Drawer';
import ResponsiveGrid from './molecules/issueBox';
import DialogModal from '../../../modals/dialog/DialogModal';
import Create from './molecules/create';

function Issues() {
  return (
    <div>
        <PermanentDrawerLeft heading={"ISSUES"} screen={<><ResponsiveGrid /></>} />   
        <DialogModal sign={"New Issue"} route={<Create />} />   
    </div>
  )
}

export default Issues;
