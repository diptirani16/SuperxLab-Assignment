import React, { Component } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material';


class TablePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [
                {name: 'Text1', calories: 'Text', fat: 'Text', carbs: 'Text', protein: 'Text'},
                {name: 'Text2', calories: 'Text', fat: 'Text', carbs: 'Text', protein: 'Text'},
                {name: 'Text3', calories: 'Text', fat: 'Text', carbs: 'Text', protein: 'Text'},
                {name: 'Text4', calories: 'Text', fat: 'Text', carbs: 'Text', protein: 'Text'}
            ],
        }
        
        this.handleChange = this.handleChange.bind(this);
        // this.handleName = this.handleName.bind(this);
        // this.handleCalories = this.handleCalories.bind(this);
        // this.handleFat = this.handleFat.bind(this);
        // this.handleCarbs = this.handleCarbs.bind(this);
        // this.handleProtein = this.handleProtein.bind(this);
    }


    handleChange(id) {
        this.state.rows.map(i => {
            if(i.name === id){
                let indexOfOldData = this.state.rows.indexOf(i); 
                console.log(indexOfOldData)
            }
        })
    }


    render() {

        const inputStyle = {
            border: 'none',
            width: '10vw'
        }

        return (
            <>
                <Typography variant="subtitle1" align="center" gutterBottom component="div">
                    TEXT
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell>Calories</TableCell>
                                <TableCell>Fat&nbsp;(g)</TableCell>
                                <TableCell>Carbs&nbsp;(g)</TableCell>
                                <TableCell>Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.rows.map((row) => (
                                <TableRow key={row.name} onChange={() => this.handleChange(row.name)}>
                                    <TableCell component="th" scope="row"><input type="text" value={row.name} style={inputStyle}></input> </TableCell>
                                    <TableCell><input type="text" style={inputStyle} value={row.calories}></input></TableCell>
                                    <TableCell><input type="text" style={inputStyle} value={row.fat}></input></TableCell>
                                    <TableCell><input type="text" style={inputStyle} value={row.carbs}></input></TableCell>
                                    <TableCell><input type="text" style={inputStyle} value={row.protein}></input></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        )
    }
}

export default TablePage;