import { Box, Typography, Paper, TextField, Button } from "@mui/material";

function LoginPage() {
    return <Box sx={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="h4" sx={{ marginRight: "10px" }}>
                Welcome to
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                ianshoes.
            </Typography>
        </Box>
        <Typography variant="h6" >
            Please login.
        </Typography>
        <Paper elevation={6} sx={{ width: 400, height: 340, display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"center"}} >
            <TextField id="usernameTF" label="Enter your Username" variant="outlined" size="medium" sx={{ width: 380, ml: 2, mr: 2, mt: 2 }} />
            <TextField id="passwordTF" label="Enter your Password" type="password" variant="outlined" size="medium" sx={{ width: 380, ml: 2, mr: 2, mt: 2 }} />
            <Button variant="contained" sx={{ width: 380, ml: 2, mr: 2, mt: 2 }}
                onClick={() => {
                    console.log("HELLO");
                }} >Login</Button>

            <Button variant="outlined" sx={{ width: 380, ml: 2, mr: 2, mt: 2 }} color="error"
                onClick={() => {
                    console.log("HELLO");
                }} >Create an Account</Button>
        </Paper>
    </Box>;
}

export default LoginPage;