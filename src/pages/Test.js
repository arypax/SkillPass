import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Radio, RadioGroup, FormControlLabel, Button, Paper } from '@mui/material';
import styles from './Test.module.css';

const questions = [
  {
    question: "What is the main goal of UX design?",
    options: [
      "To make interfaces look beautiful",
      "To create user-centered solutions that solve real problems",
      "To implement the latest design trends",
      "To reduce development costs"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of these is NOT a common UX research method?",
    options: [
      "User interviews",
      "A/B testing",
      "Server optimization",
      "Usability testing"
    ],
    correctAnswer: 2
  },
  // Добавьте остальные 8 вопросов здесь
];

function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleAnswer = (questionIndex, answerIndex) => {
    setAnswers({
      ...answers,
      [questionIndex]: answerIndex
    });
  };

  const handleSubmit = () => {
    // Проверка ответов и сохранение результатов
    const score = Object.entries(answers).reduce((acc, [questionIndex, answerIndex]) => {
      return acc + (parseInt(answerIndex) === questions[parseInt(questionIndex)].correctAnswer ? 1 : 0);
    }, 0);

    // Сохранение результатов в Firebase
    // ...

    // Переход на страницу результатов
    navigate('/results', { state: { score, totalQuestions: questions.length } });
  };

  return (
    <Container maxWidth="md" className={styles.container}>
      <Typography variant="h4" gutterBottom>
        Final Test
      </Typography>

      <Paper className={styles.questionCard}>
        <Typography variant="h6" gutterBottom>
          Question {currentQuestion + 1} of {questions.length}
        </Typography>

        <Typography variant="body1" gutterBottom>
          {questions[currentQuestion].question}
        </Typography>

        <RadioGroup
          value={answers[currentQuestion] || ''}
          onChange={(e) => handleAnswer(currentQuestion, parseInt(e.target.value))}
        >
          {questions[currentQuestion].options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={index.toString()}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>

        <Box className={styles.navigation}>
          <Button
            variant="contained"
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
          >
            Previous
          </Button>

          {currentQuestion < questions.length - 1 ? (
            <Button
              variant="contained"
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit Test
            </Button>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default Test; 