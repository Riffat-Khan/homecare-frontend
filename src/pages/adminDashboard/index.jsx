import React, {useState} from 'react'
import PermanentDrawerLeft from '../../modals/Drawer/Drawer'
import { adminDashboardSideBar , iconArray } from '../../modals/Drawer/index';
import { renderRows, renderTopRow } from "../../modals/grid/grid"
import Employees from "./Employee/employees"

function AdminDashboard() {

  return (
    <Employees />
    // <div>
    //   {/* <PermanentDrawerLeft TopiconArray={iconArray} SideBarContent={adminDashboardSideBar} heading={"Employees"} screen={<AdminDashboard />} /> */}
    //   {/* {renderTopRow(cols, colSpan, colHeading)}
    //   {renderRows(rows, cols, colSpan )} */}
    // </div>
  )
}

export default AdminDashboard
