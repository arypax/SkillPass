import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Button, Container, Typography, Box, Paper } from '@mui/material';
import styles from './Login.module.css';

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/course'); // После успешной авторизации перенаправляем на страницу курса
    } catch (error) {
      console.error('Error during Google login:', error);
      // Здесь можно добавить обработку ошибок
    }
  };

  return (
    <Container maxWidth="sm" className={styles.container}>
      <Paper className={styles.loginCard}>
        <Typography variant="h4" gutterBottom>
          Welcome to UX Course
        </Typography>
        
        <Typography variant="body1" gutterBottom>
          Please sign in to access the course content
        </Typography>

        <Box className={styles.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGoogleLogin}
            className={styles.googleButton}
          >
            Sign in with Google
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login; 