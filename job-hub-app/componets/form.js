import { FormLabel, Radio, Button,MenuItem, TextField, Typography,FormControl,FormControlLabel,RadioGroup,Checkbox } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'


const labelSx ={ marginTop:"10px"}
const form = (data, onSubmit) => {
    
    const [Inputs, setInputs] = useState(
        data ? {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            resume: data.resume,
            coverLetter: data.coverLetter,
            desiredPosition: data.desiredPosition,
            skills: data.skills,
            availability: data.availability,
            additionalInformation:data.additionalInformation,
        } : {
                name: '',
            emai:"",
                additionalInformation: "",
            
        }
    );
    return <form
        style={{
            width: "50%", height: "30%", margin: "auto", boxShadow:"15px 15px 30px #ccc", borderRadius:"20px"
        }}>
        <Typography color={"#cc5333"} fontWeight="bold" variant="h5" mt={1} padding={2} textAlign="center">{data ? "Jobs Details" : "Apply More Job Here"}</Typography>
        <Box padding={3} display="flex" flexDirection="column">
            <FormLabel sx={labelSx} >Full-Name:</FormLabel>
            <TextField
                  required
                  fullWidth
                  id="Full Name"
                  label="Full Name"
                  name="name"
                autoComplete="Full Name"
                margin="normal"
                />
            <FormLabel sx={labelSx} >Email Address:</FormLabel>
            <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                autoComplete="email"
                margin="normal"
                />
            <FormLabel sx={labelSx} >phoneNumber:</FormLabel>
            <TextField
                  required
                  fullWidth
                  id="Phone NUmber"
                  label="Phone NUmber"
                name="phoneNumber"
                margin="normal"
                />
            <FormLabel sx={labelSx} >Resume:</FormLabel>
            <TextField
             required
             fullWidth
             id="Resume"
             label="Resume"
                name="resume"
                margin="normal"/>
            <FormControl margin='20px'>
            <FormLabel  sx={labelSx} >cover Letter:</FormLabel>
            <TextField
                  required
                  fullWidth
                  id="upload"
                  label="Cover Letter"
                  name="coverLetter"
                    autoComplete="Upload File"
                    type="file"
                    margin="normal"
                />
            </FormControl>
            <FormControl sx={labelSx} >
                <TextField label="Desired Position" name="desiredPosition" select>
                    <MenuItem value="Assistance IT personel">Assistance IT personel</MenuItem>
                    <MenuItem value="Technical Assistance">Technical Assistance</MenuItem>
                    <MenuItem value="Senior Software Developer ">Senior Software Developer </MenuItem>
                    <MenuItem value="Junior Software Developer">Junior Software Developer</MenuItem>
                </TextField>
            </FormControl>
            
            <FormControl sx={labelSx} >
                <FormLabel id="Skills" name="skills">Skills</FormLabel >
                <FormControlLabel label='Software Engineering ' control={<Checkbox />} />
                <FormControlLabel label='Software Programmer ' control={<Checkbox />} />
                <FormControlLabel label='Backend Developer ' control={<Checkbox />} />
                <FormControlLabel label='Front-End Developer ' control={<Checkbox />} />
                <FormControlLabel label='Front/Back-end Developer ' control={<Checkbox />} />
            </FormControl>
            <FormControl>
                <FormLabel id="skills-experience" name="availability">Availability:</FormLabel>
                <RadioGroup name="skills-experience-group" arial-labelledby='skills-experince-group-label'>
                    <FormControlLabel control={<Radio />} label='1 Week' value='1 Week' />
                    <FormControlLabel control={<Radio />} label='2 Week' value='2 Weeks' />
                    <FormControlLabel control={<Radio />} label='3 Weeks' value='3 Weeks' />
                    <FormControlLabel control={<Radio />} label ='1 Month' value='1 Month'/>
                </RadioGroup>
            </FormControl>
            <FormControl   sx={labelSx} >
            <TextField
                  required
                  fullWidth
                  id="info"
                  label="Additional Information"
                  name="additionalInformation"
                    autoComplete="info"
                    margin="normal"
                />
            </FormControl>

            <Button  sx={labelSx} variant='contained'>Submit</Button>
            

            
        </Box>

    </form>;
};

export default form
