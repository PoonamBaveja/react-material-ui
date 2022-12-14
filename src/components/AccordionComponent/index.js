import { ExpandMore, Menu } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails, FormControlLabel, IconButton } from '@material-ui/core';
import TableComponent from "../TableComponent";
 
const AccordionComponent = (props) => {
    return(
        <>
            <Accordion defaultExpanded={props.index === "0" ? true : false}>
                <AccordionSummary  expandIcon={<ExpandMore />}>
                  <Menu style={{ color: "red", marginRight: 8, marginTop: 5 }}/> Employee Info 
                </AccordionSummary>
                <AccordionDetails>
                <p>For Identification</p>
                <TableComponent />
                    {/* <FormControlLabel
                        aria-label="Enable"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Switch />}
                        label="Enable Security"
                    /> */}
                    
                </AccordionDetails>

            </Accordion>


        </>
    )
}
export default AccordionComponent;