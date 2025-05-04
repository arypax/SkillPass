import React, { useState } from 'react';
import styles from './CourseContent.module.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import { Button, LinearProgress } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { generateCertificate } from '../utils/certificateGenerator';
import { auth } from '../firebase/config';

const modules = [
  {
    type: 'video',
    title: 'Introduction to UX Design',
    duration: '7 min',
    content: (
      <video
        width="100%"
        height="400"
        controls
        className={styles.videoPlayer}
      >
        <source src="/video/ui.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
  },
  {
    type: 'video',
    title: 'UI Design in Practice',
    duration: '9 min',
    content: (
      <video
        width="100%"
        height="400"
        controls
        className={styles.videoPlayer}
      >
        <source src="/video/ui.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
  },
  {
    type: 'video',
    title: 'User Research Methods',
    duration: '8 min',
    content: (
      <video
        width="100%"
        height="400"
        controls
        className={styles.videoPlayer}
      >
        <source src="/videos/user-research.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
  },
  {
    type: 'video',
    title: 'Prototyping and Testing',
    duration: '6 min',
    content: (
      <video
        width="100%"
        height="400"
        controls
        className={styles.videoPlayer}
      >
        <source src="/video/ui.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
  },
  {
    type: 'article',
    title: 'Interface Design Fundamentals',
    duration: '5 min',
    content: (
      <div className={styles.articleContent}>
        <h3>Interface Design Fundamentals</h3>
        <p>Interface design is a crucial aspect of creating successful digital products. It involves understanding user needs, creating intuitive navigation, and establishing clear visual hierarchy.</p>
        
        <h4>Key Principles</h4>
        <ul>
          <li>User-Centered Design: Always prioritize user needs and goals</li>
          <li>Visual Hierarchy: Guide users through content using size, color, and spacing</li>
          <li>Consistency: Maintain uniform patterns across the interface</li>
          <li>Feedback: Provide clear responses to user actions</li>
        </ul>

        <h4>Design Process</h4>
        <ol>
          <li>Research and Analysis</li>
          <li>Wireframing and Prototyping</li>
          <li>Visual Design</li>
          <li>User Testing</li>
          <li>Iteration and Refinement</li>
        </ol>

        <h4>Best Practices</h4>
        <p>Effective interface design requires attention to detail and understanding of user psychology. Consider these aspects:</p>
        <ul>
          <li>Clear navigation structure</li>
          <li>Responsive design principles</li>
          <li>Accessibility standards</li>
          <li>Performance optimization</li>
        </ul>
      </div>
    ),
  },
  {
    type: 'article',
    title: 'UX Best Practices',
    duration: '4 min',
    content: (
      <div className={styles.articleContent}>
        <h3>UX Best Practices</h3>
        <p>Creating exceptional user experiences requires a combination of research, testing, and continuous improvement. This guide covers essential practices for UX professionals.</p>

        <h4>Research Methods</h4>
        <ul>
          <li>User Interviews: Direct feedback from target users</li>
          <li>Usability Testing: Observing users completing tasks</li>
          <li>Analytics: Data-driven insights from user behavior</li>
          <li>A/B Testing: Comparing different design solutions</li>
        </ul>

        <h4>Design Principles</h4>
        <ol>
          <li>Simplicity: Keep interfaces clean and focused</li>
          <li>Consistency: Maintain uniform patterns and behaviors</li>
          <li>Feedback: Provide clear responses to user actions</li>
          <li>Error Prevention: Design to minimize user mistakes</li>
        </ol>

        <h4>Implementation Strategies</h4>
        <p>Successful UX implementation requires:</p>
        <ul>
          <li>Regular user testing and feedback collection</li>
          <li>Iterative design improvements</li>
          <li>Cross-functional team collaboration</li>
          <li>Performance monitoring and optimization</li>
        </ul>
      </div>
    ),
  },
  {
    type: 'test',
    title: 'Final Assessment',
    duration: '10 questions',
    content: null,
  },
];

const testQuestions = Array.from({ length: 10 }, (_, i) => ({
  question: 'Demonstration of control testing for the E-Learning Platform',
  options: ['YES', 'no'],
  correct: 0,
}));

export default function CourseContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(Array(modules.length).fill(false));
  const [testAnswers, setTestAnswers] = useState({});
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [testRestarted, setTestRestarted] = useState(false);

  const calculateProgress = () => {
    const completed = progress.filter(Boolean).length;
    return (completed / modules.length) * 100;
  };

  const handleComplete = (idx) => {
    const updated = [...progress];
    updated[idx] = true;
    setProgress(updated);
  };

  const handleTestAnswer = (qIdx, optIdx) => {
    setTestAnswers({ ...testAnswers, [qIdx]: optIdx });
  };

  const handleTestSubmit = () => {
    setTestSubmitted(true);
    handleComplete(modules.length - 1);
  };

  const handleRestartTest = () => {
    setTestAnswers({});
    setTestSubmitted(false);
    setTestRestarted(true);
  };

  const handleNext = () => {
    if (activeIndex < modules.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleBack = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleGetCertificate = () => {
    const userName = auth.currentUser?.displayName || 'Student';
    const courseName = 'User Experience. Principles of Human-Centered Design';
    const completionDate = new Date().toLocaleDateString();
    generateCertificate(userName, courseName, completionDate);
  };

  // Подсчет баллов за тест
  const testScore = Object.entries(testAnswers).filter(
    ([idx, ans]) => modules[activeIndex].type === 'test' ? testQuestions[idx].correct === ans : false
  ).length;
  const isTestPassed = testScore >= 8;

  return (
    <div className={styles.courseWrapper}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTitle}>Course Modules</div>
        <div className={styles.progressContainer}>
          <div className={styles.progressInfo}>
            <span>Course Progress</span>
            <span>{Math.round(calculateProgress())}%</span>
          </div>
          <LinearProgress 
            variant="determinate" 
            value={calculateProgress()} 
            className={styles.progressBar}
            sx={{
              height: '8px',
              borderRadius: '4px',
              backgroundColor: '#f0f0f0',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#ff3f3a',
              },
            }}
          />
        </div>
        <ul className={styles.moduleList}>
          {modules.map((mod, idx) => (
            <li
              key={mod.title}
              className={`${styles.moduleItem} ${activeIndex === idx ? styles.active : ''} ${progress[idx] ? styles.completed : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <span className={styles.icon}>
                {mod.type === 'video' && <PlayCircleOutlineIcon fontSize="small" />}
                {mod.type === 'article' && <ArticleOutlinedIcon fontSize="small" />}
                {mod.type === 'test' && <QuizOutlinedIcon fontSize="small" />}
              </span>
              <span className={styles.moduleTitle}>
                {mod.type === 'test' ? mod.title : `${mod.type === 'video' ? 'Video' : 'Article'}: ${mod.title}`}
              </span>
              <span className={styles.moduleDuration}>{mod.duration}</span>
              <span className={styles.statusIcon}>
                {progress[idx] ? (
                  <CheckCircleIcon style={{ color: '#27ae60' }} />
                ) : (
                  <RadioButtonUncheckedIcon style={{ color: '#ff3f3a' }} />
                )}
              </span>
            </li>
          ))}
        </ul>
      </aside>

      <main className={styles.contentArea}>
        <div className={styles.contentCard}>
          <h2 className={styles.contentTitle}>{modules[activeIndex].title}</h2>
          {modules[activeIndex].type === 'test' ? (
            <div className={styles.testBlock}>
              {!testSubmitted ? (
                <form onSubmit={e => { e.preventDefault(); handleTestSubmit(); }}>
                  {testQuestions.map((q, idx) => (
                    <div key={idx} className={styles.testQuestion}>
                      <div className={styles.testQTitle}>{q.question}</div>
                      <div className={styles.testOptions}>
                        {q.options.map((opt, oidx) => (
                          <label key={oidx} className={styles.testOption}>
                            <input
                              type="radio"
                              name={`q${idx}`}
                              value={oidx}
                              checked={testAnswers[idx] === oidx}
                              onChange={() => handleTestAnswer(idx, oidx)}
                              required
                            />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Button
                    type="submit"
                    variant="contained"
                    className={styles.testSubmitBtn}
                  >
                    Complete Test
                  </Button>
                </form>
              ) : (
                <div className={styles.testResult}>
                  <h3
                    style={{
                      color: isTestPassed ? '#27ae60' : '#ff3f3a',
                      fontWeight: 700,
                      fontSize: '1.4rem',
                      marginBottom: 10,
                    }}
                  >
                    {isTestPassed ? 'Test passed' : 'Test not passed'}
                  </h3>
                  <p>Your score: {testScore} out of {testQuestions.length}</p>
                  {!isTestPassed ? (
                    <Button
                      variant="outlined"
                      className={styles.testSubmitBtn}
                      onClick={handleRestartTest}
                    >
                      Try again
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      className={styles.certificateBtn}
                      onClick={handleGetCertificate}
                      startIcon={<CardGiftcardIcon />}
                    >
                      Get Certificate
                    </Button>
                  )}
                </div>
              )}
            </div>
          ) : (
            <>
              <div className={styles.moduleContent}>{modules[activeIndex].content}</div>
              {!progress[activeIndex] && (
                <Button
                  variant="contained"
                  className={styles.completeBtn}
                  onClick={() => handleComplete(activeIndex)}
                >
                  Mark as Completed
                </Button>
              )}
              {progress[activeIndex] && (
                <div className={styles.completedLabel}>Completed</div>
              )}
            </>
          )}

          <div className={styles.navigation}>
            {activeIndex > 0 && (
              <Button
                variant="outlined"
                className={styles.navButton}
                onClick={handleBack}
                startIcon={<ArrowBackIcon />}
                sx={{
                  color: '#ff3f3a',
                  borderColor: '#ff3f3a',
                  fontWeight: 700,
                  backgroundColor: '#fff',
                  '&:hover': {
                    backgroundColor: '#fff',
                    color: '#ff3f3a',
                    borderColor: '#ff3f3a',
                  },
                }}
              >
                Previous
              </Button>
            )}
            {modules[activeIndex].type !== 'test' && (
              <Button
                variant="contained"
                className={styles.navButton}
                onClick={handleNext}
                endIcon={<ArrowForwardIcon />}
                disabled={!(progress[activeIndex])}
                sx={{
                  backgroundColor: progress[activeIndex] ? '#ff3f3a' : '#f0f0f0',
                  color: progress[activeIndex] ? '#fff' : '#aaa',
                  fontWeight: 700,
                  borderColor: '#ff3f3a',
                  '&:hover': progress[activeIndex] ? {
                    backgroundColor: '#fff',
                    color: '#ff3f3a',
                    borderColor: '#ff3f3a',
                  } : {},
                }}
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 