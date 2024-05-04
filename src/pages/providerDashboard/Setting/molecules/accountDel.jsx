import React from 'react'
import Button from "../../../../components/button/Button"
function AccountDel({heading, text , button , bgColor , textColor}) {
  return (
    <div className={`flex flex-col gap-5 rounded-lg p-5 ${bgColor} ${textColor}`}>
      <h1 className="flex justify-start">{heading}</h1>
      <p>{text}</p>
      <div className="flex justify-end">
      <Button ButtonContent={button} />
      </div>
    </div>
  )
}

export default AccountDel;
