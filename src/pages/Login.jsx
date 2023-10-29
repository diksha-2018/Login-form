import bgimg from './bg/backimg.jpg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import signin from './bg/img.jpg';
import { Button,TextField,Typography,Container,Checkbox,FormControlLabel,Stack,Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {ThemeProvider,createTheme} from "@mui/material/styles";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

const darkTheme=createTheme({
    palette:{
        mode:"dark"
    },
})

const boxstyle={
    position:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
    width:"75%",
    height:"70%",
    bgcolor:"background.paper",
    boxShadow:24
};

const center={
    position:"relative",
    top:"50%",
    left:"37%"
}

const Login = () => {
    const [remember,setRemember]=useState(false);
    const navigate=useNavigate();
  return (
    <>
      <div style={{
            backgroundImage:`url(${bgimg})`,
            backgroundSize:"cover",
            height:"100vh",
            color:"#f5f5f5",
        }}>
      <Box sx={boxstyle}>
      <Grid container>
        <Grid item xs={12} sm={12} lg={6}>
            <Box style={{
                 backgroundImage:`url(${signin})`,
                 backgroundSize:"cover",
                 marginTop:"40px",
                 marginLeft:"15px",
                 marginRight:"15px",
                 height:"63vh",
                 color:"#f5f5f5",
            }}></Box>
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
            <Box style={{
                backgroundSize:"cover",
                height:"70vh",
                minHeight:"500px",
                backgroundColor:"#3b3dd5"
            }}>
            <ThemeProvider theme={darkTheme}>
            <Container>
                <Box height={35}/>
                 <Box sx={center}>
                    <Avatar sx={{ml:"35px",mb:"4px",bgcolor:"ffffff"}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Sign In
                    </Typography>
                 </Box>
                 <Box height={35}/>
                <Grid container spacing={1}>
                    <Grid item xs={12} sx={{ml:"3em",mr:"3em"}}>
                        <TextField 
                          requied
                          fullWidth
                          id="email"
                          label="username"
                          name="email"
                          autocomplete="email"
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ml:"3em",mr:"3em",mb:"3em"}}>
                        <TextField 
                          requied
                          fullWidth
                          id="password"
                          label="password"
                          name="password"
                          type="password"
                          autocomplete="new-password"
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ml:"3em",mr:"3em",mb:"3em"}}>
                        <Stack direction="row" spacing={2}>
                            <FormControlLabel
                              sx={{width:"60%"}}
                              onClick={()=>setRemember(!remember)}
                              control={<Checkbox checked={remember}/>}
                              label="Remember me"
                            />
                            <Typography
                              variant="body1"
                              component="span"
                              onClick={()=>{navigate("/reset-password");}}
                              style={{marginTop:"10px",cursor:"pointer"}}
                            >
                             forgot Password?
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sx={{ml:"5rem",mr:"5rem"}}>
                        <Button 
                           type="submit"
                           variant="contained"
                           fullWidth="true"
                           size="large"
                           sx={{
                            mt:"5px",
                            mr:"20px",
                            borderRadius:28,
                            color:"#ffffff",
                            minWidth:"170px",
                            backgroundColor:"#FF9A01"
                           }}
                           >
                            SIGN IN
                           </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ml:"5rem",mr:"5rem"}}>
                        <Stack direction="row" spacing={2}>
                            <Typography
                              variant="body1"
                              component="span"
                              style={{marginTop:"10px"}}
                            >
                               Don't have an account?{" "}
                                <span
                                  style={{color:"beb4fb",cursor:"pointer"}}
                                  onClick={()=>{navigate("/register");}}
                                >
                                  <i>Register here</i>
                                </span>
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            </ThemeProvider>
            </Box>
        </Grid>
      </Grid>
      </Box>
      </div>
    </>
  )
}

export default Login;