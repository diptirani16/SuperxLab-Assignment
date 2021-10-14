import React, { Component } from 'react';
import TablePage from './TablePage';
import { Drawer, Toolbar, Divider, List, ListItem, ListItemIcon, ListItemText, Typography, Box, AppBar, Button, Menu, MenuItem } from '@mui/material';
import { Inbox, Mail, Edit, FileCopy, Archive, MoreHoriz, ArrowDropDown } from '@mui/icons-material';

    
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            anchorEl: event.currentTarget,
        })
    }

    handleClose() {
        this.setState({
            anchorEl: null
        })
    }

    render() {

        const open = Boolean(this.state.anchorEl)

        return (
            <>
                <Box sx={{ display: 'flex' }}>
                    <AppBar position="fixed" sx={{ width: `calc(100% - 240px)`, ml: `240px` }} color="transparent" >
                        <Toolbar>
                            <Button id="demo-customized-button" size="small" aria-controls="demo-customized-menu" aria-haspopup="true" aria-expanded={open ? 'true' : undefined} variant="text" disableElevation onClick={this.handleClick} endIcon={<ArrowDropDown />} >
                                TEXT
                            </Button>
                            <Menu id="demo-customized-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'demo-customized-button',
                                }} anchorEl={this.state.anchorEl} open={open} onClose={this.handleClose} >
                                <MenuItem onClick={this.handleClose} disableRipple>
                                    <Edit />
                                    Edit
                                </MenuItem>
                                <MenuItem onClick={this.handleClose} disableRipple>
                                    <FileCopy />
                                    Duplicate
                                </MenuItem>
                                <Divider sx={{ my: 0.5 }} />
                                <MenuItem onClick={this.handleClose} disableRipple>
                                    <Archive />
                                    Archive
                                </MenuItem>
                                <MenuItem onClick={this.handleClose} disableRipple>
                                    <MoreHoriz />
                                    More
                                </MenuItem>
                            </Menu>
                    </Toolbar>
                </AppBar>
                <Drawer sx={{ width: 240, flexShrink: 0, '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box', }, }} variant="permanent" anchor="left" >
                    <Toolbar />
                    <Divider />
                    <List>
                        {['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Item6', 'Item7', 'Item8', 'Item9'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>


                <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }} >
                    <Toolbar />
                    <TablePage />
                    
                </Box>
            </Box>
            </>
        )
    }
}
export default HomePage;