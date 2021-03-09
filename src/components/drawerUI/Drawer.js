import React, { useState, useRef, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

const headersPL=[
    "O mnie",
    "Technologie",
    "Portfolio",
    "Zainteresowania",
    "Kontakt",
];

const ListWrapper = styled.div`
color:#ff3300;
width:100%;
height:auto;
`

const useStyles = withStyles({
    list: {
      color:'red',
      width: 350, //'100%' nie wyświetla błędu ale nie zmienia zachowania CSSa
    },
    fullList: {
      width: 'auto',
    },
  });

  const styles = {
    root: {
        backgroundColor: 'blue',
        boxShadow: 'none',
        // color:'#009900',
      },
    };

class TemporaryDrawer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            top: true,
         }
    }
    // classes = useStyles;
  
    toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      this.setState({ ...this.state, [anchor]: open });
    };
  
    list = (anchor) => (
      <ListWrapper>
              <div
            //   className={clsx(this.classes.list, {
            //       [this.classes.fullList]: anchor === 'top' || anchor === 'bottom',
            //   })}
                
              role="presentation"
              onClick={this.toggleDrawer(anchor, false)}
              onKeyDown={this.toggleDrawer(anchor, false)}
              >
                  {/* {console.log(this.props)} - sprytne wyświetlenie propsów */}
              <List>
                  {headersPL.map((text, index) => (
                  <ListItem button key={text}>
                      {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                      <ListItemText primary={text} />
                  </ListItem>
                  ))}
              </List>
              </div>
          </ListWrapper>
    );
  
  render(){
      const { toggleDrawer, state, list } = this;
      const { classes } = this.props;
    return (
      <div>

        {['MENU'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer classes={{ root: classes.root }} anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
  }
}
  export default withStyles(styles)(TemporaryDrawer);
//   export default TemporaryDrawer;

// funkcyjnie i hooki-------------------------------------------------------
// export default function TemporaryDrawer() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: true,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <ListWrapper>
//             <div
//             className={clsx(classes.list, {
//                 [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//             })}
//             role="presentation"
//             onClick={toggleDrawer(anchor, false)}
//             onKeyDown={toggleDrawer(anchor, false)}
//             >
//             <List>
//                 {headersPL.map((text, index) => (
//                 <ListItem button key={text}>
//                     {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
//                     <ListItemText primary={text} />
//                 </ListItem>
//                 ))}
//             </List>
//             </div>
//         </ListWrapper>
//   );


//   return (
//     <div>
//       {['MENU'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }
