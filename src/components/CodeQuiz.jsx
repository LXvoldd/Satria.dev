import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaCheckCircle,
  FaTimesCircle,
  FaRedo,
  FaTrophy,
  FaClock,
} from "react-icons/fa";

// ============ BANK SOAL ============
const quizQuestions = [
  {
    question: "Apa output dari `typeof null` di JavaScript?",
    options: ['"null"', '"object"', '"undefined"', '"number"'],
    answer: 1,
    explanation:
      "Ini adalah bug legendaris JavaScript. `typeof null` mengembalikan `\"object\"` — seharusnya `null`.",
  },
  {
    question: "Hook React apa yang dipakai untuk side effect?",
    options: ["useState", "useEffect", "useContext", "useRef"],
    answer: 1,
    explanation:
      "`useEffect` dipakai untuk side effect seperti fetch data, subscribe event, atau manipulasi DOM.",
  },
  {
    question: "Apa kepanjangan dari HTML?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlink Text Mark Language",
    ],
    answer: 0,
    explanation:
      "HTML = HyperText Markup Language — bahasa markup standar untuk membuat halaman web.",
  },
  {
    question: "Di CSS, property apa untuk mengubah warna teks?",
    options: ["background-color", "text-color", "color", "font-color"],
    answer: 2,
    explanation:
      "Property `color` di CSS dipakai untuk mengubah warna teks. `background-color` untuk background.",
  },
  {
    question: "Apa itu `===` di JavaScript?",
    options: [
      "Assignment",
      "Perbandingan nilai saja",
      "Perbandingan nilai & tipe data",
      "Bukan operator",
    ],
    answer: 2,
    explanation:
      "`===` adalah strict equality — membandingkan nilai DAN tipe data. Sedangkan `==` cuma nilai.",
  },
  {
    question: "Framework PHP apa yang populer untuk backend?",
    options: ["Django", "Laravel", "Express", "Spring"],
    answer: 1,
    explanation:
      "Laravel adalah framework PHP paling populer. Django (Python), Express (Node.js), Spring (Java).",
  },
  {
    question: "Apa fungsi `useState` di React?",
    options: [
      "Untuk routing",
      "Untuk state management lokal",
      "Untuk fetch API",
      "Untuk styling",
    ],
    answer: 1,
    explanation:
      "`useState` dipakai untuk menyimpan state lokal di functional component React.",
  },
  {
    question: "Di Git, command apa untuk menyimpan perubahan?",
    options: ["git save", "git commit", "git push", "git store"],
    answer: 1,
    explanation:
      "`git commit` menyimpan perubahan ke repository lokal. `git push` mengirim ke remote.",
  },
  {
    question: "Apa itu Virtual DOM di React?",
    options: [
      "DOM asli browser",
      "Representasi ringan DOM di memori",
      "Database virtual",
      "Browser virtual",
    ],
    answer: 1,
    explanation:
      "Virtual DOM adalah representasi ringan dari DOM asli. React pakai ini untuk optimasi rendering.",
  },
  {
    question: "Bahasa apa yang dipakai Unity untuk scripting?",
    options: ["JavaScript", "Python", "C#", "C++"],
    answer: 2,
    explanation:
      "Unity pakai C# sebagai bahasa scripting utama. Bisa juga JavaScript (usang).",
  },
];

const TIMER_PER_QUESTION = 20; // detik

function CodeQuiz() {
  const [gameState, setGameState] = useState("idle"); // idle | playing | finished
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIMER_PER_QUESTION);
  const [highScore, setHighScore] = useState(0);
  const [answers, setAnswers] = useState([]); // track jawaban user

  // Load highscore dari localStorage
  useEffect(() => {
    const saved = localStorage.getItem("quizHighScore");
    if (saved) setHighScore(parseInt(saved));
  }, []);

  // Timer
  useEffect(() => {
    if (gameState !== "playing" || showExplanation) return;

    if (timeLeft <= 0) {
      // Waktu habis — anggap salah
      handleAnswer(-1);
      return;
    }

    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, gameState, showExplanation]);

  // Mulai game
  const startGame = () => {
    setGameState("playing");
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setTimeLeft(TIMER_PER_QUESTION);
    setAnswers([]);
  };

  // Handle jawaban
  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return; // udah jawab, skip

    setSelectedAnswer(index);
    setShowExplanation(true);

    const isCorrect = index === quizQuestions[currentQuestion].answer;

    if (isCorrect) {
      // Bonus poin kalau jawab cepat
      const bonus = Math.floor(timeLeft / 2);
      setScore((s) => s + 10 + bonus);
    }

    setAnswers((prev) => [
      ...prev,
      { question: currentQuestion, answer: index, correct: isCorrect },
    ]);
  };

  // Soal berikutnya
  const nextQuestion = () => {
    if (currentQuestion + 1 >= quizQuestions.length) {
      // Game selesai
      setGameState("finished");

      // Update highscore
      if (score > highScore) {
        localStorage.setItem("quizHighScore", score.toString());
        setHighScore(score);
      }
    } else {
      setCurrentQuestion((q) => q + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeLeft(TIMER_PER_QUESTION);
    }
  };

  const currentQ = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const correctCount = answers.filter((a) => a.correct).length;

  return (
    <section id="quiz" className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden">
      {/* Dekorasi background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-6 lg:px-12 xl:px-20">
        {/* Judul Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-sm lg:text-base font-semibold text-blue-400 tracking-widest uppercase mb-3">
            🎮 Mini Game
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Code Quiz Challenge
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          <p className="text-base lg:text-lg text-slate-400 mt-6 max-w-2xl mx-auto">
            Uji pengetahuan programming kamu! {quizQuestions.length} soal,{" "}
            {TIMER_PER_QUESTION} detik per soal. Jawab cepat = poin lebih!
          </p>
        </motion.div>

        {/* Game Container */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {/* ===== IDLE STATE ===== */}
            {gameState === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8 lg:p-12 text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white text-4xl lg:text-5xl shadow-lg shadow-blue-500/30"
                >
                  <FaCode />
                </motion.div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Siap Main?
                </h3>
                <p className="text-slate-400 mb-8 max-w-md mx-auto">
                  {quizQuestions.length} soal tentang programming. Waktu{" "}
                  {TIMER_PER_QUESTION} detik per soal.
                </p>

                {/* Highscore */}
                {highScore > 0 && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium mb-6">
                    <FaTrophy />
                    Highscore: {highScore} poin
                  </div>
                )}

                <motion.button
                  onClick={startGame}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="block mx-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-colors"
                >
                  Mulai Main 🚀
                </motion.button>
              </motion.div>
            )}

            {/* ===== PLAYING STATE ===== */}
            {gameState === "playing" && (
              <motion.div
                key="playing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-6 lg:p-10"
              >
                {/* Header — Progress & Timer */}
                <div className="flex items-center justify-between mb-6 gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs lg:text-sm text-slate-400 mb-2">
                      <span>
                        Soal {currentQuestion + 1} / {quizQuestions.length}
                      </span>
                      <span>Skor: {score}</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </div>

                  {/* Timer */}
                  <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-lg lg:text-xl transition-colors ${
                      timeLeft <= 5
                        ? "bg-red-500/20 text-red-400 animate-pulse"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    <FaClock className="text-sm" />
                    {timeLeft}
                  </div>
                </div>

                {/* Pertanyaan */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg lg:text-2xl font-bold text-white mb-6 leading-snug">
                      {currentQ.question}
                    </h3>

                    {/* Pilihan Jawaban */}
                    <div className="grid gap-3 mb-6">
                      {currentQ.options.map((option, idx) => {
                        const isSelected = selectedAnswer === idx;
                        const isCorrect = idx === currentQ.answer;
                        const showResult = selectedAnswer !== null;

                        let buttonClass =
                          "bg-slate-700/50 border-slate-600 hover:border-blue-500 hover:bg-slate-700";

                        if (showResult) {
                          if (isCorrect) {
                            buttonClass =
                              "bg-emerald-500/20 border-emerald-500 text-emerald-300";
                          } else if (isSelected && !isCorrect) {
                            buttonClass =
                              "bg-red-500/20 border-red-500 text-red-300";
                          } else {
                            buttonClass =
                              "bg-slate-700/30 border-slate-700 text-slate-500";
                          }
                        }

                        return (
                          <motion.button
                            key={idx}
                            onClick={() => handleAnswer(idx)}
                            disabled={showResult}
                            whileHover={!showResult ? { scale: 1.01, x: 4 } : {}}
                            whileTap={!showResult ? { scale: 0.99 } : {}}
                            className={`w-full text-left px-4 lg:px-5 py-3.5 lg:py-4 rounded-xl border-2 ${buttonClass} text-sm lg:text-base font-medium text-white transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-between gap-3`}
                          >
                            <span className="flex items-center gap-3">
                              <span className="w-7 h-7 lg:w-8 lg:h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-slate-800/70 text-xs lg:text-sm font-bold">
                                {String.fromCharCode(65 + idx)}
                              </span>
                              {option}
                            </span>
                            {showResult && isCorrect && (
                              <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                            )}
                            {showResult && isSelected && !isCorrect && (
                              <FaTimesCircle className="text-red-400 flex-shrink-0" />
                            )}
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    <AnimatePresence>
                      {showExplanation && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 mb-4">
                            <p className="text-sm lg:text-base text-blue-300 leading-relaxed">
                              <span className="font-semibold">💡 Penjelasan: </span>
                              {currentQ.explanation}
                            </p>
                          </div>

                          <motion.button
                            onClick={nextQuestion}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-colors"
                          >
                            {currentQuestion + 1 >= quizQuestions.length
                              ? "Lihat Hasil 🏆"
                              : "Soal Berikutnya →"}
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}

            {/* ===== FINISHED STATE ===== */}
            {gameState === "finished" && (
              <motion.div
                key="finished"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8 lg:p-12 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-white text-4xl lg:text-5xl shadow-lg shadow-yellow-500/30"
                >
                  <FaTrophy />
                </motion.div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {correctCount === quizQuestions.length
                    ? "Perfect! 🎉"
                    : correctCount >= quizQuestions.length * 0.7
                    ? "Hebat! 🔥"
                    : correctCount >= quizQuestions.length * 0.5
                    ? "Bagus! 👍"
                    : "Coba Lagi! 💪"}
                </h3>

                <p className="text-slate-400 mb-8">
                  Kamu jawab benar {correctCount} dari {quizQuestions.length} soal
                </p>

                {/* Skor */}
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-8">
                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                    <p className="text-xs text-slate-400 mb-1">Skor Kamu</p>
                    <p className="text-2xl lg:text-3xl font-bold text-blue-400">
                      {score}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                    <p className="text-xs text-slate-400 mb-1">Highscore</p>
                    <p className="text-2xl lg:text-3xl font-bold text-yellow-400">
                      {highScore}
                    </p>
                  </div>
                </div>

                {score > 0 && score >= highScore && (
                  <div className="inline-block px-4 py-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-yellow-300 text-sm font-medium mb-6">
                    🎊 New Highscore!
                  </div>
                )}

                <motion.button
                  onClick={startGame}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-colors"
                >
                  <FaRedo />
                  Main Lagi
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default CodeQuiz;