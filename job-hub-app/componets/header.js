import React, { useState } from "react";
import { useRouter } from 'next/router';
import { AppBar, Tab,Tabs,Box,Toolbar } from "@mui/material"
import HubIcon from '@mui/icons-material/Hub';

const Header = () => {
    // creating routing from one page to anoher
    const router = useRouter();



    const [value, setValue] = useState();
    const handleChange = (e, val) => { 
        setValue(val);

        if (val == 0) {
            router.push("/")
        } else if (val === 1) {
            router.push("/jobsAvailable/moreJobs")
        }
    };
    
    return (
        <AppBar position="sticky" sx={{bgcolor:"#c83576"}}>
            <Toolbar>
                <HubIcon sx={{ color: 'inherit', fontSize: '5rem' }} />
                
                <Box display="flex" margin={"auto"}>
                    
                    <Tabs onChange={handleChange} value={value} textColor="inherit">
                        <Tab label="Home" />
                        
                        <Tab label="Job Application Form" />
                    </Tabs>
                </Box>
        </Toolbar>
    </AppBar>
); 
};
export default Header;