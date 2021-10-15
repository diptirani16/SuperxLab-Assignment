import React, { Component } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material';


class TablePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [
                {id: 0, name: 'Text1', calories: 'Text', fat: 'Text', carbs: 'Text', protein: 'Text'},
                {id: 1, name: 'Text2', calories: 'Text', fat: 'Text', carbs: 'Text', protein: 'Text'},
                {id: 2, name: 'Text3', calories: 'Text', fat: 'Text', carbs: 'Text', protein: 'Text'},
                {id: 3, name: 'Text4', calories: 'Text', fat: 'Text', carbs: 'Text', protein: 'Text'}
            ],
            index: 0
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleCalories = this.handleCalories.bind(this);
        this.handleFat = this.handleFat.bind(this);
        this.handleCarbs = this.handleCarbs.bind(this);
        this.handleProtein = this.handleProtein.bind(this);
    }


    handleChange(id) {
        console.log(id)
        this.state.rows.map(i => {
            if(i.id === id){
                console.log(i)
                console.log(this.state.rows.indexOf(i))
                this.setState({
                    index: this.state.rows.indexOf(i)
                })
                console.log(this.state.index);
            }
        })
    }

    handleName(e) {
        this.state.rows[this.state.index].name = e.target.value
    }

    handleCalories(e) {
        this.state.rows[this.state.index].calories = e.target.value
    }

    handleFat(e) {
        this.state.rows[this.state.index].fat = e.target.value
    }

    handleCarbs(e) {
        this.state.rows[this.state.index].carbs = e.target.value
    }

    handleProtein(e) {
        this.state.rows[this.state.index].protein = e.target.value
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
                                <TableRow key={row.id} onChange={() => this.handleChange(row.id)}>
                                    <TableCell component="th" scope="row"><input type="text" value={row.name} onChange={this.handleName} style={inputStyle}></input> </TableCell>
                                    <TableCell><input type="text" style={inputStyle} onChange={this.handleCalories} value={row.calories}></input></TableCell>
                                    <TableCell><input type="text" style={inputStyle} onChange={this.handleFat} value={row.fat}></input></TableCell>
                                    <TableCell><input type="text" style={inputStyle} onChange={this.handleCarbs} value={row.carbs}></input></TableCell>
                                    <TableCell><input type="text" style={inputStyle} onChange={this.handleProtein} value={row.protein}></input></TableCell>
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