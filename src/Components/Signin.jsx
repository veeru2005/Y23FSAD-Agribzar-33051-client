import React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
} from "@mui/material";

const providers = [{ id: "credentials", name: "Credentials" }];

const BRANDING = {
  logo: (
    <img
      src="src/assets/images/Logo.png"
      alt="AgriBzar Logo"
      style={{ height: 80, marginBottom: 16 }}
    />
  ),
  title: "AgriBzar",
};

const signIn = async (provider) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve();
    }, 500);
  });
  return promise;
};

export default function BrandingSignInPage() {
  const theme = useTheme();

  return (
    <AppProvider branding={BRANDING} theme={theme}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
        
      >
        <Paper elevation={3} sx={{ padding: 4, maxWidth: 500, width: "100%", borderRadius: 4 }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginBottom={2}
          >
            {BRANDING.logo}
            <Typography variant="h5" fontWeight="bold">
              Sign in to {BRANDING.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" marginTop={1}>
              Welcome back! Please enter your credentials to continue.
            </Typography>
          </Box>

          {/* Sign-in form */}
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
          >
            
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              autoFocus={false}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              onClick={() => signIn(providers[0])}
            >
              Sign In
            </Button>
          </Box>

          <Divider sx={{ marginY: 2 }} />

          {/* Footer */}
          <Typography variant="body2" color="textSecondary" align="center">
            © {new Date().getFullYear()} AgriBzar. All rights reserved.
          </Typography>
        </Paper>
      </Box>
    </AppProvider>
  );
}