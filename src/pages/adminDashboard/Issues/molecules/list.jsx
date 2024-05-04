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

  // Define different content for each list item
  const listItemContent = [
    { primary: "First item", secondary: "First item secondary text" },
    { primary: "Second item", secondary: "Second item secondary text" },
    { primary: "Third item", secondary: "Third item secondary text" },
  ];

  return (
    <Grid item xs={27} md={18}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Avatar with text and icon
      </Typography>
      <Demo>
        <List dense={dense}>
          {[0, 1, 2].map((value) => (
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
                secondary={secondary ? listItemContent[value].secondary : null}
              />
            </ListItem>
          ))}
        </List>
      </Demo>
    </Grid>
  );
}
