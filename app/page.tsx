"use client";

import { motion } from "framer-motion";
<<<<<<< HEAD
// import { useRef, useState, useEffect } from "react";
import { useRef, useState, useEffect, CSSProperties } from "react";


type Heart = {
  id: number;
  left: number;
  duration: number;
};
=======
import { useRef, useState, useEffect } from "react";
>>>>>>> 1e23f5070f8c94298c7a3d56a01d5d5feb2b4f03

export default function Home() {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [yesScale, setYesScale] = useState(1);
<<<<<<< HEAD
  // const [hearts, setHearts] = useState([]);
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [accepted, setAccepted] = useState(false);
  // const audioRef = useRef(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

=======
  const [hearts, setHearts] = useState([]);
  const [accepted, setAccepted] = useState(false);
  const audioRef = useRef(null);
>>>>>>> 1e23f5070f8c94298c7a3d56a01d5d5feb2b4f03

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 400) - 200;
    const randomY = Math.floor(Math.random() * 400) - 200;
    setNoPosition({ x: randomX, y: randomY });
  };

<<<<<<< HEAD
  // const createHearts = () => {
  //   let newHearts = [];
  //   for (let i = 0; i < 30; i++) {
  //     newHearts.push({
  //       id: i,
  //       left: Math.random() * 100,
  //       duration: Math.random() * 2 + 3,
  //     });
  //   }
  //   setHearts(newHearts);
  // };
  const createHearts = () => {
  const newHearts: Heart[] = [];

  for (let i = 0; i < 25; i++) {
    newHearts.push({
      id: i + Math.random(),
      left: Math.random() * 100,
      duration: Math.random() * 2 + 3,
    });
  }

  setHearts(newHearts);
};


  // const handleYesClick = () => {
  //   setAccepted(true);
  //   createHearts();
  //   if (audioRef.current) {
  //     audioRef.current.play();
  //   }
  // };
  const handleYesClick = () => {
  setAccepted(true);
  createHearts();
  if (audioRef.current) {
    audioRef.current.play(); // TypeScript comprend que play() existe
  }
};
=======
  const createHearts = () => {
    let newHearts = [];
    for (let i = 0; i < 30; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        duration: Math.random() * 2 + 3,
      });
    }
    setHearts(newHearts);
  };

  const handleYesClick = () => {
    setAccepted(true);
    createHearts();
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
>>>>>>> 1e23f5070f8c94298c7a3d56a01d5d5feb2b4f03

  useEffect(() => {
    const interval = setInterval(() => {
      createHearts();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div  className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-200 to-pink-400 overflow-hidden"
     style={styles.container}>
      <audio ref={audioRef} src="/music.mp3" />

      {!accepted && (
        <>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 text-center" 
          style={styles.title}>Would you be my Valentine's Day forever and ever Baby? 💘</h1>

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 justify-center items-center" style={styles.buttons}>
            <motion.button
            className="px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl rounded-xl bg-pink-500 text-white"
              style={styles.yesButton}
              animate={{ scale: yesScale }}
              onMouseEnter={() => setYesScale(1.4)}
              onMouseLeave={() => setYesScale(1)}
              onClick={handleYesClick}
            >
              YES ❤️
            </motion.button>

            <motion.button
            className="px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl rounded-xl bg-gray-800 text-white"
              style={styles.noButton}
              animate={{ x: noPosition.x, y: noPosition.y }}
              transition={{ type: "spring", stiffness: 300 }}
              onMouseEnter={moveNoButton}
            >
              NO 😈
            </motion.button>
          </div>
        </>
      )}

    {accepted && (
  <motion.h1
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 text-center flex flex-wrap justify-center"
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.3, // chaque mot apparait avec 0.3s de décalage
        },
      },
    }}
  >
    {[
      "Thank", "You", "My", "love", "and", "I", "love", "You", "❤️",
      "Thank", "You", "For", "Me"
    ].map((word, index) => (
      <motion.span
        key={index}
        className="mx-1"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {word}
      </motion.span>
    ))}
  </motion.h1>
)}


      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: -50, opacity: 1 }}
          animate={{ y: "110vh", opacity: 0 }}
          transition={{ duration: heart.duration }}
          className="fixed text-xl sm:text-2xl pointer-events-none"
          style={{ left: `${heart.left}%`
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
<<<<<<< HEAD
    container: "column",
=======
    flexDirection: "column",
>>>>>>> 1e23f5070f8c94298c7a3d56a01d5d5feb2b4f03
    fontFamily: "Arial, sans-serif",
    background: "radial-gradient(circle, #ffe6f0, #ffb3c6)",
    overflow: "hidden",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "40px",
  },
  buttons: {
    display: "flex",
    gap: "20px",
  },
  yesButton: {
    padding: "15px 30px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#ff4d6d",
    color: "white",
    cursor: "pointer",
  },
  noButton: {
    padding: "15px 30px",
    fontSize: "18px",
    borderRadius: "10px",
<<<<<<< HEAD
=======
    borderRadius: "10px",
>>>>>>> 1e23f5070f8c94298c7a3d56a01d5d5feb2b4f03
    border: "none",
    backgroundColor: "#333",
    color: "white",
    cursor: "pointer",
  },
  finalMessage: {
    fontSize: "3rem",
    color: "#ff3366",
  },
};
