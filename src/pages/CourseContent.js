import React, { useState } from 'react';
import styles from './CourseContent.module.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import { Button } from '@mui/material';

const modules = [
  {
    type: 'video',
    title: 'Введение в UX',
    duration: '7 мин',
    content: (
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/9Bv2zltQKQA"
        title="Введение в UX"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    type: 'video',
    title: 'Пользовательские исследования',
    duration: '8 мин',
    content: (
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/5g0LGoZ2oBg"
        title="Пользовательские исследования"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    type: 'video',
    title: 'Прототипирование и тестирование',
    duration: '6 мин',
    content: (
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/3t6L-FlpQ6g"
        title="Прототипирование и тестирование"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    type: 'article',
    title: 'Основы проектирования интерфейсов',
    duration: '5 мин',
    content: (
      <div>
        <h3>Основы проектирования интерфейсов</h3>
        <p>Проектирование интерфейсов — это процесс создания удобных и эффективных взаимодействий между пользователем и продуктом. Важно учитывать потребности пользователя, простоту навигации и визуальную иерархию.</p>
        <ul>
          <li>Понимание целей пользователя</li>
          <li>Создание прототипов</li>
          <li>Тестирование решений</li>
        </ul>
      </div>
    ),
  },
  {
    type: 'article',
    title: 'Лучшие практики UX',
    duration: '4 мин',
    content: (
      <div>
        <h3>Лучшие практики UX</h3>
        <p>UX-дизайн — это постоянное улучшение продукта на основе обратной связи пользователей. Используйте современные инструменты, проводите тестирования и внедряйте лучшие решения для повышения удовлетворенности пользователей.</p>
        <ol>
          <li>Проводите юзабилити-тесты</li>
          <li>Собирайте обратную связь</li>
          <li>Внедряйте улучшения</li>
        </ol>
      </div>
    ),
  },
  {
    type: 'test',
    title: 'Финальный тест',
    duration: '10 вопросов',
    content: null, // будет отдельный рендер
  },
];

const testQuestions = Array.from({ length: 10 }, (_, i) => ({
  question: `Пример тестирования #${i + 1}`,
  options: ['ДА', 'нет', 'нет', 'нет'],
  correct: 0,
}));

export default function CourseContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(Array(modules.length).fill(false));
  const [testAnswers, setTestAnswers] = useState({});
  const [testSubmitted, setTestSubmitted] = useState(false);

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

  return (
    <div className={styles.courseWrapper}>
      {/* Боковое меню */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTitle}>Модули курса</div>
        <ul className={styles.moduleList}>
          {modules.map((mod, idx) => (
            <li
              key={mod.title}
              className={
                styles.moduleItem +
                ' ' +
                (activeIndex === idx ? styles.active : '') +
                ' ' +
                (progress[idx]
                  ? styles.completed
                  : '')
              }
              onClick={() => setActiveIndex(idx)}
            >
              <span className={styles.icon}>
                {mod.type === 'video' && <PlayCircleOutlineIcon fontSize="small" />}
                {mod.type === 'article' && <ArticleOutlinedIcon fontSize="small" />}
                {mod.type === 'test' && <QuizOutlinedIcon fontSize="small" />}
              </span>
              <span className={styles.moduleTitle}>{mod.type === 'test' ? mod.title : `${mod.type === 'video' ? 'Видео' : 'Статья'}: ${mod.title}`}</span>
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

      {/* Контент модуля */}
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
                    color="primary"
                    className={styles.testSubmitBtn}
                  >
                    Завершить тест
                  </Button>
                </form>
              ) : (
                <div className={styles.testResult}>
                  <h3>Тест завершён!</h3>
                  <p>Ваш результат: {Object.entries(testAnswers).filter(([idx, ans]) => testQuestions[idx].correct === ans).length} из 10</p>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className={styles.moduleContent}>{modules[activeIndex].content}</div>
              {!progress[activeIndex] && (
                <Button
                  variant="contained"
                  color="primary"
                  className={styles.completeBtn}
                  onClick={() => handleComplete(activeIndex)}
                >
                  Отметить как завершённое
                </Button>
              )}
              {progress[activeIndex] && (
                <div className={styles.completedLabel}>Завершено!</div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
} 