import React from 'react';
import DialogModal from '../../../../modals/dialog/DialogModal';
import AddEmployee from './AddEmp';

function GridBox() {

    const data = [
        { no: 1, name: '', email: '', cnic: '', address: '', documents: '' },
        { no: 2, name: '', email: '', cnic: '', address: '', documents: '' },
        { no: 3, name: '', email: '', cnic: '', address: '', documents: '' },
        { no: 4, name: '', email: '', cnic: '', address: '', documents: '' },
        { no: 5, name: '', email: '', cnic: '', address: '', documents: '' },
        { no: 6, name: '', email: '', cnic: '', address: '', documents: '' },
        { no: 7, name: '', email: '', cnic: '', address: '', documents: '' },
        { no: 8, name: '', email: '', cnic: '', address: '', documents: '' },
        { no: 9, name: '', email: '', cnic: '', address: '', documents: '' },
      ];

    return (
        <div>
            <div className='flex pb-5 justify-end'>
                <DialogModal sign={"Add New Employee"} route={<AddEmployee
                heading={"Add New Employee"}
                subHeading={"Employee Field"}
                input1={"Full Name"}
                input2={"Email Id"}
                input3={"CNIC"}
                input4={"Phone Number"}
                input5={"Address"}
                input6={"Male/Female"}
                input7={"Upload Document"}
              />} />
            </div>
          <div className="flex flex-col w-full">
            <div className="grid grid-cols-12 text-lg font-bold justify-center">
              <div className="col-span-1 py-2 px-10 border-2 border-r-0 border-[#D3D3D3]">No</div>
              <div className="col-span-2 py-2 border-2 border-r-0 border-[#D3D3D3]">Name</div>
              <div className="col-span-2 py-2 border-2 border-r-0 border-[#D3D3D3]">Email Id</div>
              <div className="col-span-2 py-2 border-2 border-r-0 border-[#D3D3D3]">CNIC</div>
              <div className="col-span-2 py-2 border-2 border-r-0 border-[#D3D3D3]">Address</div>
              <div className="col-span-3 py-2 border-2 border-[#D3D3D3]">Documents</div>
            </div>
            {data.map((item, index) => (
              <div className="grid grid-cols-12 justify-center" key={index}>
                <div className="col-span-1 py-2 border-t-0 px-10 border-2 border-r-0 border-[#D3D3D3]">{item.no}</div>
                <div className="col-span-2 py-2 border-t-0 border-2 border-r-0 border-[#D3D3D3]">{item.name}</div>
                <div className="col-span-2 py-2 border-t-0 border-2 border-r-0 border-[#D3D3D3]">{item.email}</div>
                <div className="col-span-2 py-2 border-t-0 border-2 border-r-0 border-[#D3D3D3]">{item.cnic}</div>
                <div className="col-span-2 py-2 border-t-0 border-2 border-r-0 border-[#D3D3D3]">{item.address}</div>
                <div className="col-span-3 py-2 border-t-0 border-2 border-[#D3D3D3]">{item.documents}</div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default GridBox
