document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const beginFriendQuizBtn = document.getElementById("beginFriendQuizBtn");
  const openInviteBtn = document.getElementById("openInviteBtn");

  const music = document.getElementById("bgMusic");
  const friendResultAudio = document.getElementById("friendResultAudio");

  // Lyrics game elements
  const lyricsLevelNumber = document.getElementById("lyricsLevelNumber");
  const lyricsTimer = document.getElementById("lyricsTimer");
  const lyricsStatus = document.getElementById("lyricsStatus");
  const lyricsLine = document.getElementById("lyricsLine");
  const lyricsHint = document.getElementById("lyricsHint");
  const lyricsMissing = document.getElementById("lyricsMissing");
  const lyricsInput = document.getElementById("lyricsInput");
  const lyricsSubmit = document.getElementById("lyricsSubmit");
  const lyricsReveal = document.getElementById("lyricsReveal");
  const lyricsFailed = document.getElementById("lyricsFailed");
  const lyricsComplete = document.getElementById("lyricsComplete");

  const friendQuizProgress = document.getElementById("friendQuizProgress");
  const friendQuizExtra = document.getElementById("friendQuizExtra");
  const friendQuizQuestion = document.getElementById("friendQuizQuestion");
  const friendQuizOptions = document.getElementById("friendQuizOptions");
  const friendQuizAnswer = document.getElementById("friendQuizAnswer");
  const friendQuizError = document.getElementById("friendQuizError");
  const friendQuizNextBtn = document.getElementById("friendQuizNextBtn");
  const friendQuizScore = document.getElementById("friendQuizScore");
  const friendQuizMessage = document.getElementById("friendQuizMessage");
  const resultsSparks = document.getElementById("resultsSparks");

  const openQuizBtn = document.getElementById("openQuizBtn");
  const quizBackBtn = document.getElementById("quizBackBtn");
  const quizCloseBtn = document.getElementById("quizCloseBtn");
  const quizFinishBtn = document.getElementById("quizFinishBtn");
  const quizRetryBtn = document.getElementById("quizRetryBtn");

  const quizScreen = document.getElementById("pageQuiz");
  const quizForm = document.getElementById("quizForm");
  const quizResult = document.getElementById("quizResult");
  const quizResultInner = document.getElementById("quizResultInner");
  const quizOverlay = document.getElementById("quizOverlay");
  const resultCover = document.getElementById("resultCover");
  const resultBlurb = document.getElementById("resultBlurb");
  const resultAudio = document.getElementById("resultAudio");
  const quizNameInput = document.getElementById("quizName");

  // Variable to store Sao-Paulo.mp3 pause time
  let saoPauloPauseTime = 0;

  // Lyrics game levels - 8 levels with Weeknd lyrics
  const lyricsLevels = [
    { 
      answer: "angel", 
      line: "_____, oh-oh-oh",
      displayLine: "_____, oh-oh-oh",
      hint: "Hint: Trilogy Album" 
    },
    { 
      answer: "wanderlust", 
      line: "You believe in something stronger than trust, _____",
      displayLine: "You believe in something stronger than trust, _____",
      hint: "Hint: Kissland Album" 
    },
    { 
      answer: "relieve", 
      line: "In the night, she's dancing to _____ the pain.",
      displayLine: "In the night, she's dancing to _____ the pain.",
      hint: "Hint: Beauty Behind the Madness Album" 
    },
    { 
      answer: "articulate", 
      line: "I'm findin' ways to _____ the feelin' I'm goin' through.",
      displayLine: "I'm findin' ways to _____ the feelin' I'm goin' through.",
      hint: "Hint: Starboy Album" 
    },
    { 
      answer: "piece", 
      line: "I almost cut a _____ of myself, for your life.",
      displayLine: "I almost cut a _____ of myself, for your life.",
      hint: "Hint: My Dear Melancholy Album" 
    },
    { 
      answer: "heart", 
      line: "I lost my _____ and my mind.",
      displayLine: "I lost my _____ and my mind.",
      hint: "Hint: After Hours Album" 
    },
    { 
      answer: "someone", 
      line: "Oh, baby, is there _____ else or not?",
      displayLine: "Oh, baby, is there _____ else or not?",
      hint: "Hint: Dawn FM Album" 
    },
    { 
      answer: "heartbeat", 
      line: "Just hold my _____ close to you",
      displayLine: "Just hold my _____ close to you",
      hint: "Hint: Hurry Up Tomorrow Album" 
    }
  ];

  const friendQuizQuestions = [
    {
      question: "When did I first meet you?",
      answers: ["year 1 block 2", "year 1, block 2", "year one block two", "block 2 of year 1", "first year block 2", "year 1, block 2"]
    },
    {
      question: "Which song by the weeknd is my anthem? You have videos of me singing this song.",
      answers: ["or nah", "the song is or nah", "ornah", "Or Nah"]
    },
    {
      question: "What alcohol did I get drunk from when we had a sleepover",
      answers: ["rum", "southern comfort", "the southen comfort"]
    },
    {
      question: "What big collection do I have displayed in my room on my shelf?",
      answers: ["energy drink collection", "energy drinks", "energy drink", "my energy drink collection", "energy drinks collection"]
    },
    {
      question: "Which member of Blackpink is my bias?",
      options: "Options: Jennie, Jisoo, Lisa, Rose",
      answers: ["jisoo", "kim jisoo"]
    },
    {
      question: "Which artist's music did you introduce me to?",
      answers: ["don toliver", "don", "toliver"]
    },
    {
      question: "What's our go to saying that started from a whatsapp sticker?",
      answers: ["you hate me", "the sticker that says you hate me", "you hate me is it because i'm ugly", "you hate me is it because im ugly", "you hate me, is it because im ugly", "you hate me?"]
    },
    {
      question: "What's my favorite animal?",
      answers: ["shark", "a shark", "sharks"]
    },
    {
      question: "What's my favorite kind of shows?",
      answers: ["thai shows", "thai", "thai dramas", "thai series"]
    },
    {
      question: "What piercing do I want, but my mother won't let me get?",
      answers: ["tongue", "you want a tongue piercing", "a tongue piercing"]
    },
    {
      question: "How many ex's/situationships have I had?",
      answers: ["7", "seven"]
    },
    {
      question: "Out of those ex's/Situationships who was my biggest heartbreak?",
      answers: ["shikara"]
    },
    {
      question: "What is the name of the thai show we watched together for the first time",
      answers: ["pluto", "pluto the series", "the show we watched was pluto"]
    },
    {
      question: "How many tattoos do I have?",
      answers: ["6", "6 tattoos", "you have 6 tattoos"]
    },
    {
      question: "Have I ever been ghosted—and by whom?",
      answers: ["tiara"]
    },
    {
      question: "Who was the first person I ever kissed?",
      options: "Options: Aidan, Logan, Nikara, Shikara, Tiara",
      answers: ["aidan"]
    },
    {
      question: "Whenever you say you're always there for me to talk about my problems, what is my response? Say it as if it's me.",
      answers: ["i don't want to bother you", "i'm not going to bother you", "i dont want to bother you", "i dont want to disturb you", "i dont want to bother you with my problems", "don't want to bother you"]
    },
    {
      question: "What was the biggest thing about Shikara that I had a major problem with?",
      options: "Options: She wanted my full attention and time, She didn't want to get to know my friends, She gets upset over small things, None of the above",
      answers: [
        "she didn't want to get to know my friends",
        "didn't want to get to know my friends",
        "she did not want to get to know my friends",
        "not wanting to get to know my friends",
        "she didn't want to get to know your friends"
      ]
    },
    {
      question: "What happened on the 6th of November 2025?",
      answers: ["i got into a car crash", "car crash", "you got into a car crash", "car accident", "you were in a car crash", "got into a car crash"]
    },
    {
      question: "What was the first ever Thai GL show I watched",
      answers: ["gap", "GAP", "gap the series"," GAP the series"]
    },
    {
      question: "Last question, nice and easy to end off. What are you saved as in my Phone?",
      answers: ["rope bunny", "ropebunny"]
    }
  ];

  const SONG_KEYS = ["cry-for-me", "nigara-falls", "the-abyss", "timeless", "wake-me-up"];
  const SONG_PRETTY = {
    "cry-for-me": "Cry For Me",
    "nigara-falls": "Nigara Falls",
    "the-abyss": "The Abyss",
    "timeless": "Timeless",
    "wake-me-up": "Wake Me Up"
  };
  const SONG_BLURB = {
    "cry-for-me": "You're soft-hearted, dramatic in the best way, and you feel everything properly.",
    "nigara-falls": "You're calm, pretty, and easy to be around. Quiet vibe, strong presence.",
    "the-abyss": "You're mysterious, deep, and a little hard to read, which makes people more curious.",
    "timeless": "You carry yourself like a star. Confident, cool, and impossible to ignore.",
    "wake-me-up": "You bring energy, warmth, and life into every room you walk into."
  };

  // Lyrics game state
  let lyricsIndex = 0;
  let lyricsSeconds = 40;
  let lyricsTimerId = null;
  let lyricsLocked = false;

  let friendQuizIndex = 0;
  let friendQuizCorrect = 0;
  const friendQuizResponses = [];
  let showDigDeeper = false;

  let inviteTime = 0;
  let scrollYBeforeQuiz = 0;

  function blurActiveField() {
    if (document.activeElement && typeof document.activeElement.blur === "function") {
      document.activeElement.blur();
    }
  }

  function pauseAllAudio() {
    if (music) {
      music.pause();
    }
    if (friendResultAudio) {
      friendResultAudio.pause();
    }
    if (resultAudio) {
      resultAudio.pause();
      resultAudio.currentTime = 0;
    }
  }

  function playInviteMusic() {
    if (!music) return;

    if (friendResultAudio) {
      friendResultAudio.pause();
      friendResultAudio.currentTime = 0;
    }

    if (resultAudio) {
      resultAudio.pause();
      resultAudio.currentTime = 0;
    }

    // Check if Sao-Paulo is already playing, if not set it
    const currentSrc = (music.getAttribute("src") || "").toLowerCase().replace(/-/g, '');
    if (!currentSrc.includes("saopaulo")) {
      music.src = "Sao-Paulo.mp3";
      music.load();
    }

    music.volume = 0.7;
    music.loop = true;
    music.play().catch(() => {});
  }

  function playSlowMotion() {
    if (!friendResultAudio) return;

    // Pause Sao-Paulo and save the current time
    if (music) {
      saoPauloPauseTime = music.currentTime || 0;
      music.pause();
    }

    if (resultAudio) {
      resultAudio.pause();
      resultAudio.currentTime = 0;
    }

    const currentSrc = (friendResultAudio.getAttribute("src") || "").toLowerCase().replace(/-/g, '');
    if (!currentSrc.includes("slowmotion")) {
      friendResultAudio.src = "Slow-Motion.mp3";
      friendResultAudio.load();
    }

    friendResultAudio.volume = 0.7;
    friendResultAudio.loop = true;

    if (friendResultAudio.paused) {
      friendResultAudio.play().catch(() => {});
    }
  }

  function stopSlowMotion() {
    if (!friendResultAudio) return;
    friendResultAudio.pause();
    friendResultAudio.currentTime = 0;
  }

  function showOnlyPage(pageId) {
    document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
    const target = document.getElementById(pageId);
    if (target) target.classList.add("active");
    blurActiveField();
  }

  function normalizeBasic(value) {
    return (value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function compact(value) {
    return normalizeBasic(value).replace(/\s+/g, "");
  }

  function levenshtein(a, b) {
    const m = a.length;
    const n = b.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + cost
        );
      }
    }

    return dp[m][n];
  }

  function similarEnough(userAnswer, expected) {
    const userNorm = normalizeBasic(userAnswer);
    const expectedNorm = normalizeBasic(expected);
    const userCompact = compact(userAnswer);
    const expectedCompact = compact(expected);

    if (!userNorm) return false;
    if (userNorm === expectedNorm) return true;
    if (userNorm.includes(expectedNorm) || expectedNorm.includes(userNorm)) return true;
    if (userCompact === expectedCompact) return true;

    const userTokens = userNorm.split(" ").filter(Boolean);
    const expectedTokens = expectedNorm.split(" ").filter(Boolean);
    const overlap = expectedTokens.filter((token) => userTokens.includes(token)).length;
    const ratio = expectedTokens.length ? overlap / expectedTokens.length : 0;
    if (ratio >= 0.7) return true;

    const distance = levenshtein(userCompact, expectedCompact);
    const longest = Math.max(userCompact.length, expectedCompact.length, 1);
    if (distance <= 2 || distance / longest <= 0.22) return true;

    return false;
  }

  function answerMatches(userAnswer, acceptedAnswers) {
    return acceptedAnswers.some((answer) => similarEnough(userAnswer, answer));
  }

  // Lyrics game functions
  function loadLyricsLevel(index) {
    clearInterval(lyricsTimerId);
    lyricsLocked = false;
    lyricsIndex = index;
    lyricsSeconds = 40;

    const level = lyricsLevels[index];
    lyricsLevelNumber.textContent = String(index + 1);
    lyricsTimer.textContent = String(lyricsSeconds);
    lyricsLine.textContent = level.displayLine;
    lyricsHint.textContent = level.hint;
    lyricsMissing.innerHTML = 'Missing word: <span class="blank">_____</span>';
    lyricsReveal.textContent = "";
    lyricsStatus.textContent = "Fill in the missing word before the timer runs out.";
    lyricsInput.value = "";
    lyricsInput.disabled = false;
    lyricsSubmit.disabled = false;
    lyricsFailed.classList.remove("show");
    lyricsComplete.classList.remove("show");

    setTimeout(() => blurActiveField(), 0);

    lyricsTimerId = setInterval(() => {
      lyricsSeconds -= 1;
      lyricsTimer.textContent = String(lyricsSeconds);

      if (lyricsSeconds <= 0) {
        clearInterval(lyricsTimerId);
        failLyricsLevel();
      }
    }, 1000);
  }

  function goToNextLyricsLevel() {
    if (lyricsIndex >= lyricsLevels.length - 1) {
      showOnlyPage("pageA");
      playSlowMotion();
      return;
    }
    loadLyricsLevel(lyricsIndex + 1);
  }

  function completeLyricsLevel() {
    if (lyricsLocked) return;
    lyricsLocked = true;
    clearInterval(lyricsTimerId);

    const level = lyricsLevels[lyricsIndex];
    lyricsStatus.textContent = "Correct! Next level loading...";
    lyricsReveal.textContent = `Answer: ${level.answer}`;
    lyricsMissing.innerHTML = `Missing word: <span class="correct-word">${level.answer}</span>`;
    lyricsComplete.classList.add("show");
    lyricsInput.disabled = true;
    lyricsSubmit.disabled = true;

    setTimeout(() => {
      lyricsComplete.classList.remove("show");
      goToNextLyricsLevel();
    }, 1400);
  }

  function failLyricsLevel() {
    if (lyricsLocked) return;
    lyricsLocked = true;

    const level = lyricsLevels[lyricsIndex];
    lyricsStatus.textContent = "Time is up. The answer has been revealed.";
    lyricsReveal.textContent = `Answer: ${level.answer}`;
    lyricsMissing.innerHTML = `Missing word: <span class="correct-word">${level.answer}</span>`;
    lyricsFailed.classList.add("show");
    lyricsInput.disabled = true;
    lyricsSubmit.disabled = true;

    setTimeout(() => {
      lyricsFailed.classList.remove("show");
      goToNextLyricsLevel();
    }, 1800);
  }

  function submitLyricsGuess() {
    if (lyricsLocked) return;

    const guess = lyricsInput.value.trim().toLowerCase();
    const answer = lyricsLevels[lyricsIndex].answer.toLowerCase();

    if (!guess) {
      lyricsStatus.textContent = "Type an answer first.";
      return;
    }

    if (guess === answer) {
      completeLyricsLevel();
    } else {
      lyricsStatus.textContent = "Not quite. Try again.";
      lyricsInput.select();
    }
  }

  function renderFriendQuizQuestion() {
    // Check if we need to show the dig deeper interstitial
    if (showDigDeeper) {
      friendQuizProgress.textContent = "";
      friendQuizQuestion.textContent = "";
      friendQuizOptions.textContent = "";
      friendQuizExtra.textContent = "";
      friendQuizAnswer.style.display = "none";
      friendQuizError.textContent = "";
      friendQuizNextBtn.textContent = "Continue";
      
      // Create dig deeper display
      let digDeeperDiv = document.getElementById("digDeeperText");
      if (!digDeeperDiv) {
        digDeeperDiv = document.createElement("div");
        digDeeperDiv.id = "digDeeperText";
        digDeeperDiv.className = "dig-deeper-text";
        friendQuizQuestion.parentNode.insertBefore(digDeeperDiv, friendQuizQuestion);
      }
      digDeeperDiv.innerHTML = "Time to dig deeper into your brain, lets see how well you really know me Sister Navika-Probably really well";
      digDeeperDiv.style.display = "block";
      return;
    }

    // Hide dig deeper if it exists
    const digDeeperDiv = document.getElementById("digDeeperText");
    if (digDeeperDiv) {
      digDeeperDiv.style.display = "none";
    }

    const item = friendQuizQuestions[friendQuizIndex];
    friendQuizProgress.textContent = `Question ${friendQuizIndex + 1} of ${friendQuizQuestions.length}`;
    friendQuizQuestion.textContent = item.question;
    friendQuizOptions.textContent = item.options || "";
    friendQuizExtra.textContent = item.extra || "";
    friendQuizAnswer.style.display = "block";
    friendQuizAnswer.value = friendQuizResponses[friendQuizIndex] || "";
    friendQuizError.textContent = "";
    friendQuizNextBtn.textContent = friendQuizIndex === friendQuizQuestions.length - 1 ? "Finish quiz" : "Next";

    setTimeout(() => blurActiveField(), 0);
  }

  function rainBlueSparks() {
    if (!resultsSparks) return;
    resultsSparks.innerHTML = "";

    for (let i = 0; i < 52; i++) {
      const spark = document.createElement("span");
      spark.className = "blue-spark";
      spark.style.left = `${Math.random() * 100}%`;
      spark.style.animationDelay = `${Math.random() * 0.9}s`;
      spark.style.animationDuration = `${1.2 + Math.random() * 1.4}s`;
      spark.style.height = `${60 + Math.random() * 120}px`;
      resultsSparks.appendChild(spark);
    }
  }

  function showFriendQuizResults() {
    showOnlyPage("friendQuizResults");
    playSlowMotion();
    rainBlueSparks();

    friendQuizScore.textContent = `You got ${friendQuizCorrect}/${friendQuizQuestions.length} questions correct!`;
    friendQuizMessage.textContent =
      friendQuizCorrect > 15
        ? "Wow Navika, well done, I'm very proud of you man, You know me so well. As we both already know"
        : "Damn bruh, thought we knew each other better. Nah I'm kidding. It's aight. Love u Rope Bunny";
  }

  function unlockInvite() {
    // Stop the quiz music (Slow-Motion)
    if (friendResultAudio) {
      friendResultAudio.pause();
      friendResultAudio.currentTime = 0;
    }
    
    // Resume Sao-Paulo from where it was paused
    document.body.classList.remove("locked");
    document.body.classList.add("scroll-mode");
    
    if (music) {
      const currentSrc = (music.getAttribute("src") || "").toLowerCase().replace(/-/g, '');
      if (!currentSrc.includes("saopaulo")) {
        music.src = "Sao-Paulo.mp3";
        music.load();
      }
      try {
        music.currentTime = saoPauloPauseTime || 0;
      } catch (e) {}
      music.volume = 0.7;
      music.loop = true;
      music.play().catch(() => {});
    }
    
    document.getElementById("page2")?.scrollIntoView({ behavior: "smooth" });
  }

  function submitFriendQuizAnswer() {
    // Handle dig deeper interstitial - when showing dig deeper, just hide it and advance
    if (showDigDeeper) {
      showDigDeeper = false;
      // We already processed question 10 (index 9), so now move to question 11 (index 10)
      friendQuizIndex = 10;
      renderFriendQuizQuestion();
      return;
    }

    const answer = friendQuizAnswer.value.trim();

    if (!answer) {
      friendQuizError.textContent = "Don't be a bum, answer the question";
      return;
    }

    friendQuizResponses[friendQuizIndex] = answer;
    const current = friendQuizQuestions[friendQuizIndex];

    if (answerMatches(answer, current.answers)) {
      friendQuizCorrect += 1;
    }

    // Check if we just finished question 10 (index 9) to show dig deeper
    if (friendQuizIndex === 9) {
      showDigDeeper = true;
      renderFriendQuizQuestion();
      return;
    }

    if (friendQuizIndex === friendQuizQuestions.length - 1) {
      showFriendQuizResults();
      return;
    }

    friendQuizIndex += 1;
    renderFriendQuizQuestion();
  }

  function stopResultAudio() {
    if (!resultAudio) return;
    resultAudio.pause();
    resultAudio.currentTime = 0;
    resultAudio.removeAttribute("src");
  }

  function enterQuizAudioMode() {
    stopResultAudio();
    inviteTime = music ? (music.currentTime || 0) : 0;
    pauseAllAudio();
  }

  function exitQuizAudioMode() {
    if (friendResultAudio) {
      friendResultAudio.pause();
      friendResultAudio.currentTime = 0;
    }
    if (resultAudio) {
      resultAudio.pause();
      resultAudio.currentTime = 0;
    }

    if (document.body.classList.contains("scroll-mode")) {
      // Resuming invite - play Sao-Paulo from where it was paused
      if (music) {
        const currentSrc = (music.getAttribute("src") || "").toLowerCase().replace(/-/g, '');
        if (!currentSrc.includes("saopaulo")) {
          music.src = "Sao-Paulo.mp3";
          music.load();
        }
        try {
          music.currentTime = saoPauloPauseTime || 0;
        } catch (e) {}
        music.volume = 0.7;
        music.loop = true;
        music.play().catch(() => {});
      }
    } else {
      // Still in quiz mode
      playSlowMotion();
    }
  }

  function resetQuizUI() {
    quizForm?.reset();

    if (quizResult) quizResult.style.display = "none";
    if (quizResultInner) {
      quizResultInner.classList.remove("show");
      quizResultInner.innerHTML = "";
    }
    if (resultCover) {
      resultCover.classList.remove("show");
      resultCover.removeAttribute("src");
      resultCover.onload = null;
    }
    if (resultBlurb) resultBlurb.textContent = "";
    quizOverlay?.classList.remove("on");
  }

  function openQuiz() {
    scrollYBeforeQuiz = window.scrollY || 0;
    enterQuizAudioMode();
    resetQuizUI();

    document.body.classList.add("quiz-open");
    quizScreen?.setAttribute("aria-hidden", "false");

    setTimeout(() => {
      if (quizScreen) quizScreen.scrollTop = 0;
      window.scrollTo({ top: 0, behavior: "auto" });
      blurActiveField();
    }, 0);
  }

  function closeQuiz() {
    document.body.classList.remove("quiz-open");
    quizScreen?.setAttribute("aria-hidden", "true");
    stopResultAudio();

    setTimeout(() => {
      window.scrollTo({ top: scrollYBeforeQuiz, behavior: "auto" });
    }, 0);

    exitQuizAudioMode();
  }

  function computeQuizResult() {
    if (!quizForm) return { error: "Quiz not found." };
    const data = new FormData(quizForm);
    const playerName = (data.get("quizName") || "").toString().trim();

    if (!playerName) {
      return { error: "Type your name first." };
    }

    for (let i = 1; i <= 6; i++) {
      if (!data.get(`q${i}`)) return { error: "Answer all 6 questions first." };
    }

    const scores = Object.fromEntries(SONG_KEYS.map((key) => [key, 0]));

    for (const [key, value] of data.entries()) {
      if (key.startsWith("q") && scores[value] !== undefined) scores[value] += 1;
    }

    const max = Math.max(...Object.values(scores));
    const top = Object.keys(scores).filter((key) => scores[key] === max);
    const chosen = top[Math.floor(Math.random() * top.length)];

    return { chosen, playerName };
  }

  function playResultSong(songKey) {
    pauseAllAudio();

    if (resultCover) {
      resultCover.src = `${songKey}.jpg`;
      resultCover.classList.add("show");
    }

    if (resultAudio) {
      resultAudio.pause();
      resultAudio.currentTime = 0;
      resultAudio.src = `${songKey}.mp3`;
      resultAudio.load();
      resultAudio.play().catch(() => {});
    }
  }

  function revealQuizResult(songKey, playerName) {
    if (!quizResult || !quizResultInner) return;

    const safeName = playerName && playerName.trim() ? playerName.trim() : "You";

    quizResult.style.display = "block";
    quizResultInner.classList.remove("show");
    quizResultInner.innerHTML = `<h2>${safeName}, you are <span>${SONG_PRETTY[songKey] || "a Mystery Track"}</span></h2>`;

    if (resultBlurb) resultBlurb.textContent = SONG_BLURB[songKey] || "";

    if (quizOverlay) {
      quizOverlay.classList.add("on");
      setTimeout(() => quizOverlay.classList.remove("on"), 900);
    }

    requestAnimationFrame(() => quizResultInner.classList.add("show"));
    playResultSong(songKey);

    const scrollToFullResult = () => {
      quizResult.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => window.scrollBy({ top: 140, left: 0, behavior: "smooth" }), 350);
      setTimeout(() => window.scrollBy({ top: 80, left: 0, behavior: "smooth" }), 900);
    };

    setTimeout(scrollToFullResult, 180);

    if (resultCover) {
      resultCover.onload = () => setTimeout(scrollToFullResult, 80);
    }
  }

  startBtn?.addEventListener("click", () => {
    showOnlyPage("page1");
    // Reset music to start fresh on page 1
    if (music) {
      music.src = "Sao-Paulo.mp3";
      music.load();
    }
    playInviteMusic();
    loadLyricsLevel(0);
  });

  lyricsSubmit?.addEventListener("click", submitLyricsGuess);

  lyricsInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitLyricsGuess();
    }
  });

  beginFriendQuizBtn?.addEventListener("click", () => {
    friendQuizIndex = 0;
    friendQuizCorrect = 0;
    friendQuizResponses.length = 0;
    showDigDeeper = false;
    
    // Remove any existing dig deeper element
    const existingDigDeeper = document.getElementById("digDeeperText");
    if (existingDigDeeper) {
      existingDigDeeper.remove();
    }
    
    showOnlyPage("friendQuizPage");
    playSlowMotion();
    renderFriendQuizQuestion();
  });

  friendQuizNextBtn?.addEventListener("click", submitFriendQuizAnswer);

  friendQuizAnswer?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitFriendQuizAnswer();
    }
  });

  openInviteBtn?.addEventListener("click", unlockInvite);

  openQuizBtn?.addEventListener("click", openQuiz);
  quizBackBtn?.addEventListener("click", closeQuiz);
  quizCloseBtn?.addEventListener("click", closeQuiz);

  quizRetryBtn?.addEventListener("click", () => {
    resetQuizUI();
    stopResultAudio();
    if (quizScreen) quizScreen.scrollTop = 0;
    setTimeout(() => blurActiveField(), 0);
  });

  quizFinishBtn?.addEventListener("click", () => {
    const res = computeQuizResult();

    if (res.error) {
      if (!quizResult || !quizResultInner) return;
      quizResult.style.display = "block";
      quizResultInner.classList.remove("show");
      quizResultInner.innerHTML = `<h2>Hold up</h2><p>${res.error}</p>`;
      if (resultBlurb) resultBlurb.textContent = "";
      requestAnimationFrame(() => quizResultInner.classList.add("show"));
      setTimeout(() => quizResult.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
      return;
    }

    revealQuizResult(res.chosen, res.playerName);
  });
});
