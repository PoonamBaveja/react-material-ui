import { Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';

const TableComponent = () => {
    return(
        <>
            <TableContainer>  
                <Table className="tableWidth">   
                    <TableBody>  
                        <TableRow>  
                            <TableCell variant="head">Name(Last, First)</TableCell>  
                            <TableCell align="right">Is</TableCell>  
                            <TableCell align="right">Smith, John</TableCell>    
                        </TableRow> 
                        <TableRow>  
                            <TableCell variant="head">Email</TableCell>  
                            <TableCell align="right">Is</TableCell>  
                            <TableCell align="right"><a mailTo="JSMITH6@travelers.com">JSMITH6@travelers.com</a></TableCell>    
                        </TableRow> 
                        <TableRow>  
                            <TableCell variant="head">Office Loc(Type, Name, Code)</TableCell>  
                            <TableCell align="right">Is</TableCell>  
                            <TableCell align="right">Field,Edison-343, 9295</TableCell>    
                        </TableRow> 
                    </TableBody>
                </Table>  
            </TableContainer>
        </>
    )
}
export default TableComponent;