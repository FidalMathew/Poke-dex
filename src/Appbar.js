
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import React from 'react';


export default function ButtonAppBar({ check, change }) {
    const label = {
        inputProps: { 'aria-label': 'Switch demo' }
    };
    return (
        <>
            <Switch {...label}
                checked={check}
                onChange={change}
            />
        </>


    );
}
