import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import type {FormEvent} from 'react'
import { Card, CardContent, CardHeader, Tab ,Tabs, Typography} from '@material-ui/core';
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

function Form(){

    const classes = useStyles();

    //array of case objects
    const [covidCases,setCovidCases] =useState(getDataFromLS())

    //input field states 
    const [email,setEmail]=useState('');
    const [country,setCountry]=useState('');
    const [newCases,setNewCases]=useState('');
    const [totCases,setTotCases]=useState('');
    const [totDeaths,setTotDeaths]=useState('');

    //form submit event
    const handleAddCases=(e : any)=>{
        e.preventDefault();
        // creating an object
        let covidCase = {
            email,
            country,
            newCases,
            totCases,
            totDeaths
        }

        // const {email,country,newCases,totCases,totDeaths} = e.target;

        setCovidCases([...covidCases,covidCase])
        setEmail('');
        setCountry('');
        setNewCases('');
        setTotCases('');
        setTotDeaths('');
        
    }

    //saving data to local storage
    useEffect(()=>{
        localStorage.setItem('covidCases',JSON.stringify(covidCases))
    },[covidCases])

    
        return(
            <div>

                <Card style={{width:500, height:400,marginLeft:50,marginTop:100,float:'left'}}>
                        <CardHeader  title="Add New Covid Cases"/>
                        <CardContent >
                            <Typography variant="body2" color="textSecondary">

                            <form onSubmit={handleAddCases} >
                                <TextField id="outlined-basic" value={email} label="User Email" 
                                onChange ={(e)=>setEmail(e.target.value)}
                                variant="outlined" style={{marginLeft:5}}/>
                                <TextField id="outlined-basic" value={country}label="Country" variant="outlined" 
                                onChange ={(e)=>setCountry(e.target.value)} style={{marginLeft:5}} />
                                <br/>
                                <TextField id="outlined-basic" value={newCases} label="No of new cases" variant="outlined" 
                                onChange ={(e)=>setNewCases(e.target.value)} style={{marginTop:10}} />
                                <br/>
                                <TextField id="outlined-basic" value={totCases} label="No of total cases " variant="outlined"
                                onChange ={(e)=>setTotCases(e.target.value)} style={{marginTop:5}}/>
                                <br/>
                                <TextField id="outlined-basic" value={totDeaths} label="No of total deaths" variant="outlined"
                                onChange ={(e)=>setTotDeaths(e.target.value)} style={{marginTop:5}} />
                                <br/>
                                <Button type="submit" variant="contained" color="secondary" style={{marginTop:5}}>
                                    Save
                                </Button>
                             </form>
                        
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={{width:600, height:400,marginLeft:50,marginTop:100,float:'left'}}>
                        <CardHeader  title="View Covid Cases"/>
                        <CardContent >
                            <Typography variant="body2" color="textSecondary">
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
                            </Typography>
                        </CardContent>
                </Card>

                
            </div>
        )
    
    

}

export default Form