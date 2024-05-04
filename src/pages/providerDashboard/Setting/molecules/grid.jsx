import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ProfileForm from './infoBox';
import ProfileCard from "./profileCard";
import PasswordChange from "./password";
import AccountDel from "./accountDel";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CSSGrid() {
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 8">
          <Item className="border-2 border-[#314154]"><ProfileForm /></Item>
        </Box>
        <Box gridColumn="span 4">
          <Item className="border-2 border-[#314154]"><ProfileCard /></Item>
        </Box>
        <Box gridColumn="span 6">
          <Item><PasswordChange /></Item>
        </Box>
        <Box gridColumn="span 6">
          <Item><AccountDel bgColor="bg-[#314154]" textColor="text-white" heading={"Close account"} text={"You can permanently delete or temporarily freeze your account. "} button={"Delete Account"} /></Item>
        </Box>
        <Box gridColumn="span 6">
        </Box>
        <Box gridColumn="span 6">
          <Item className="-mt-60 border-2 border-[#314154]"><AccountDel textColor="text-[#314154]" heading={"Need Help?"} text={"We are here to assist you, we're just a click away!"} button={"Click Here"} /></Item>
        </Box>
      </Box>
    </Box>
  );
}
