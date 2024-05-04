import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const listItemContent = [
    { primary: "Issue Title", secondary: "Issue Description with a status - Status" },
    { primary: "Issue Title", secondary: "Issue Description with a status - Status" },
    { primary: "Issue Title", secondary: "Issue Description with a status - Status" },
    { primary: "Issue Title", secondary: "Issue Description with a status - Status" },
    { primary: "Issue Title", secondary: "Issue Description with a status - Status" },
    { primary: "Issue Title", secondary: "Issue Description with a status - Status" },
  ];

  return (
    <Grid item xs={27} md={18}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Latest Issues with their Status
      </Typography>
      <Demo>
        <List dense={dense}>
          {[0, 1, 2, 3, 4, 5].map((value) => (
            <ListItem
              key={value}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={listItemContent[value].primary}
                secondary={listItemContent[value].secondary}
              />
            </ListItem>
          ))}
        </List>
      </Demo>
    </Grid>
  );
}
