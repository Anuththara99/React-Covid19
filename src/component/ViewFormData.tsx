import React from "react";
import Form from "./Form";
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export interface CovidCase{
    country: string;
    newcases: number;
    totcases: number;
    totDeaths:number;
    
}


//getting the values from local storage
const getDataFromLS= ()=>{
    const data = localStorage.getItem('covidCases');
    if(data){
        return JSON.parse(data);
    }else{
        return []
    }
}

const useStyles = makeStyles({
    table: {
      minWidth: 550,
    },
  });

function ViewFormData(){

    const classes = useStyles();

     //array of case objects
     const [covidCases,setCovidCases] =useState(getDataFromLS())

    return(
        <div>
            {covidCases.length > 0 && <> 
            <div>
            <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    {/* <TableCell>Email</TableCell> */}
                    <TableCell align="right">Country</TableCell>
                    <TableCell align="right">new Cases&nbsp;</TableCell>
                    <TableCell align="right">tot Cases&nbsp;</TableCell>
                    <TableCell align="right">tot Deaths&nbsp;</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {covidCases.map((row:any) => (
                    <TableRow >
                    {/* <TableCell component="th" scope="row">
                        {row.email}
                    </TableCell> */}
                    <TableCell align="right">{row.country}</TableCell>
                    <TableCell align="right">{row.newCases}</TableCell>
                    <TableCell align="right">{row.totCases}</TableCell>
                    <TableCell align="right">{row.totDeaths}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </div>
            </>}
            {covidCases.length < 1 && <div>No Covid Cases Found</div>}
        </div>
    )
}

export default ViewFormData