// data.js
// Task 1: options — определения, answer — буква правильного определения (A-E)
// Task 2: options — 3 варианта, answer — индекс (0,1,2)

const VARIANTS = {
  1: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      words: [
        { word: "augmented", options: ["A. The main support or most important part of something.", "B. Enhanced with computer-generated elements.", "C. Unclear or lacking sharp detail.", "D. The quality of being open and easy to understand.", "E. The quality of being true or accurate."], answer: "B" },
        { word: "blurry", options: ["A. The main support or most important part of something.", "B. Enhanced with computer-generated elements.", "C. Unclear or lacking sharp detail.", "D. The quality of being open and easy to understand.", "E. The quality of being true or accurate."], answer: "C" },
        { word: "transparency", options: ["A. The main support or most important part of something.", "B. Enhanced with computer-generated elements.", "C. Unclear or lacking sharp detail.", "D. The quality of being open and easy to understand.", "E. The quality of being true or accurate."], answer: "D" },
        { word: "vulnerable", options: ["A. The main support or most important part of something.", "B. Enhanced with computer-generated elements.", "C. Unclear or lacking sharp detail.", "D. The quality of being open and easy to understand.", "E. The quality of being true or accurate."], answer: "A" },
        { word: "veracity", options: ["A. The main support or most important part of something.", "B. Enhanced with computer-generated elements.", "C. Unclear or lacking sharp detail.", "D. The quality of being open and easy to understand.", "E. The quality of being true or accurate."], answer: "E" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "She usually ____ the internet to find information.", options: ["use", "uses", "is using"], answer: 1 },
        { text: "Look! The technician ____ the computer.", options: ["repairs", "repaired", "is repairing"], answer: 2 },
        { text: "When I entered the room, they ____ a new application.", options: ["were testing", "tested", "are testing"], answer: 0 },
        { text: "We ____ this software last year.", options: ["buy", "bought", "have buy"], answer: 1 },
        { text: "He ____ work with computers when he was younger.", options: ["use to", "used to", "was use to"], answer: 1 }
      ]
    }
  },
  2: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      words: [
        { word: "immersive", options: ["A. Software designed to damage or disrupt computer systems.", "B. Creating a deeply involving experience that seems real.", "C. A computer program designed to communicate with users.", "D. A being that combines human and machine features.", "E. A number of different types or kinds."], answer: "B" },
        { word: "chatbot", options: ["A. Software designed to damage or disrupt computer systems.", "B. Creating a deeply involving experience that seems real.", "C. A computer program designed to communicate with users.", "D. A being that combines human and machine features.", "E. A number of different types or kinds."], answer: "C" },
        { word: "malware", options: ["A. Software designed to damage or disrupt computer systems.", "B. Creating a deeply involving experience that seems real.", "C. A computer program designed to communicate with users.", "D. A being that combines human and machine features.", "E. A number of different types or kinds."], answer: "A" },
        { word: "backbone", options: ["A. Software designed to damage or disrupt computer systems.", "B. Creating a deeply involving experience that seems real.", "C. A computer program designed to communicate with users.", "D. A being that combines human and machine features.", "E. A number of different types or kinds."], answer: "D" },
        { word: "variety", options: ["A. Software designed to damage or disrupt computer systems.", "B. Creating a deeply involving experience that seems real.", "C. A computer program designed to communicate with users.", "D. A being that combines human and machine features.", "E. A number of different types or kinds."], answer: "E" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "I ____ never ____ this application before.", options: ["have / used", "did / use", "am / using"], answer: 0 },
        { text: "They ____ the network for three hours.", options: ["have been checking", "check", "are check"], answer: 0 },
        { text: "By the time we arrived, the technician ____ the problem.", options: ["solves", "had solved", "has solve"], answer: 1 },
        { text: "There isn't ____ information in this document.", options: ["many", "much", "a few"], answer: 1 },
        { text: "Look at the sky! It ____ rain.", options: ["will", "is going to", "rains"], answer: 1 }
      ]
    }
  },
  3: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      words: [
        { word: "cyborg", options: ["A. The ability or right to enter or use something.", "B. Damaged or changed in a way that prevents proper use.", "C. The state of being aware of oneself and one's surroundings.", "D. The importance or usefulness of something.", "E. A being that combines human and machine features."], answer: "E" },
        { word: "consciousness", options: ["A. The ability or right to enter or use something.", "B. Damaged or changed in a way that prevents proper use.", "C. The state of being aware of oneself and one's surroundings.", "D. The importance or usefulness of something.", "E. A being that combines human and machine features."], answer: "C" },
        { word: "corrupted", options: ["A. The ability or right to enter or use something.", "B. Damaged or changed in a way that prevents proper use.", "C. The state of being aware of oneself and one's surroundings.", "D. The importance or usefulness of something.", "E. A being that combines human and machine features."], answer: "B" },
        { word: "access", options: ["A. The ability or right to enter or use something.", "B. Damaged or changed in a way that prevents proper use.", "C. The state of being aware of oneself and one's surroundings.", "D. The importance or usefulness of something.", "E. A being that combines human and machine features."], answer: "A" },
        { word: "value", options: ["A. The ability or right to enter or use something.", "B. Damaged or changed in a way that prevents proper use.", "C. The state of being aware of oneself and one's surroundings.", "D. The importance or usefulness of something.", "E. A being that combines human and machine features."], answer: "D" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "I think artificial intelligence ____ our future.", options: ["will change", "is changing yesterday", "changed tomorrow"], answer: 0 },
        { text: "This time tomorrow, we ____ our new project.", options: ["present", "will be presenting", "presented"], answer: 1 },
        { text: "By next year, they ____ the new system.", options: ["will have developed", "develop", "will developing"], answer: 0 },
        { text: "This computer is ____ than my old one.", options: ["fast", "faster", "fastest"], answer: 1 },
        { text: "This is ____ efficient device in the laboratory.", options: ["more", "most", "the most"], answer: 2 }
      ]
    }
  },
  4: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      words: [
        { word: "revolve", options: ["A. To exchange one thing for another.", "B. To check and confirm that something is correct.", "C. Designed around customers' needs and satisfaction.", "D. To finish or successfully do something.", "E. To have something as its central subject or point."], answer: "E" },
        { word: "customer-focused", options: ["A. To exchange one thing for another.", "B. To check and confirm that something is correct.", "C. Designed around customers' needs and satisfaction.", "D. To finish or successfully do something.", "E. To have something as its central subject or point."], answer: "C" },
        { word: "swap", options: ["A. To exchange one thing for another.", "B. To check and confirm that something is correct.", "C. Designed around customers' needs and satisfaction.", "D. To finish or successfully do something.", "E. To have something as its central subject or point."], answer: "A" },
        { word: "verify", options: ["A. To exchange one thing for another.", "B. To check and confirm that something is correct.", "C. Designed around customers' needs and satisfaction.", "D. To finish or successfully do something.", "E. To have something as its central subject or point."], answer: "B" },
        { word: "accomplish", options: ["A. To exchange one thing for another.", "B. To check and confirm that something is correct.", "C. Designed around customers' needs and satisfaction.", "D. To finish or successfully do something.", "E. To have something as its central subject or point."], answer: "D" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "The new application is ____ complicated as the old one.", options: ["as", "more", "than"], answer: 0 },
        { text: "The faster the processor, ____ the computer works.", options: ["the quickly", "the more quickly", "more quick"], answer: 1 },
        { text: "The device is ____ expensive to buy.", options: ["too", "enough", "such"], answer: 0 },
        { text: "It was ____ a difficult task that nobody completed it.", options: ["so", "such", "too"], answer: 1 },
        { text: "There were ____ many users that the website crashed.", options: ["such", "too", "so"], answer: 2 }
      ]
    }
  },
  5: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      words: [
        { word: "mapping", options: ["A. Arranged in rows and columns.", "B. Given a physical form or represented in a real body.", "C. The process of creating a representation of locations or spatial data.", "D. Made or adjusted to fit a particular person or purpose.", "E. To improve the quality or strength of something."], answer: "C" },
        { word: "custom-fit", options: ["A. Arranged in rows and columns.", "B. Given a physical form or represented in a real body.", "C. The process of creating a representation of locations or spatial data.", "D. Made or adjusted to fit a particular person or purpose.", "E. To improve the quality or strength of something."], answer: "D" },
        { word: "enhance", options: ["A. Arranged in rows and columns.", "B. Given a physical form or represented in a real body.", "C. The process of creating a representation of locations or spatial data.", "D. Made or adjusted to fit a particular person or purpose.", "E. To improve the quality or strength of something."], answer: "E" },
        { word: "tabular", options: ["A. Arranged in rows and columns.", "B. Given a physical form or represented in a real body.", "C. The process of creating a representation of locations or spatial data.", "D. Made or adjusted to fit a particular person or purpose.", "E. To improve the quality or strength of something."], answer: "A" },
        { word: "embodiment", options: ["A. Arranged in rows and columns.", "B. Given a physical form or represented in a real body.", "C. The process of creating a representation of locations or spatial data.", "D. Made or adjusted to fit a particular person or purpose.", "E. To improve the quality or strength of something."], answer: "B" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "____ developed this software?", options: ["Who", "Who did", "Whom did"], answer: 0 },
        { text: "You have already installed the update, ____?", options: ["haven't you", "have you", "don't you"], answer: 0 },
        { text: "The server isn't working, ____?", options: ["is it", "isn't it", "does it"], answer: 0 },
        { text: "Could you tell me where ____?", options: ["is the server", "the server is", "does the server"], answer: 1 },
        { text: "Do you know when the update ____?", options: ["will arrive", "will it arrive", "does arrive"], answer: 0 }
      ]
    }
  },
  6: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      words: [
        { word: "overlay", options: ["A. Reserved for a particular purpose or task.", "B. A layer of digital information placed over an image or view.", "C. The amount of data that can be transmitted in a given time.", "D. To interrupt or bother someone or something.", "E. To produce or display an image, especially by computer."], answer: "B" },
        { word: "disturb", options: ["A. Reserved for a particular purpose or task.", "B. A layer of digital information placed over an image or view.", "C. The amount of data that can be transmitted in a given time.", "D. To interrupt or bother someone or something.", "E. To produce or display an image, especially by computer."], answer: "D" },
        { word: "dedicated", options: ["A. Reserved for a particular purpose or task.", "B. A layer of digital information placed over an image or view.", "C. The amount of data that can be transmitted in a given time.", "D. To interrupt or bother someone or something.", "E. To produce or display an image, especially by computer."], answer: "A" },
        { word: "bandwidth", options: ["A. Reserved for a particular purpose or task.", "B. A layer of digital information placed over an image or view.", "C. The amount of data that can be transmitted in a given time.", "D. To interrupt or bother someone or something.", "E. To produce or display an image, especially by computer."], answer: "C" },
        { word: "render", options: ["A. Reserved for a particular purpose or task.", "B. A layer of digital information placed over an image or view.", "C. The amount of data that can be transmitted in a given time.", "D. To interrupt or bother someone or something.", "E. To produce or display an image, especially by computer."], answer: "E" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "The information ____ every day.", options: ["updates", "is updated", "updating"], answer: 1 },
        { text: "The computer ____ yesterday.", options: ["was repaired", "repaired", "is repairing"], answer: 0 },
        { text: "The new software ____ right now.", options: ["is being installed", "installs", "has installed"], answer: 0 },
        { text: "The files ____ already been uploaded.", options: ["have", "has", "are"], answer: 0 },
        { text: "The network ____ tomorrow.", options: ["will upgrade", "will be upgraded", "upgrades"], answer: 1 }
      ]
    }
  },
  7: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      words: [
        { word: "appliance", options: ["A. A unit of data sent across a network.", "B. To protect something from harm or danger.", "C. A device used in the home.", "D. Provided with the necessary equipment or features.", "E. A setting chosen automatically unless changed."], answer: "C" },
        { word: "equipment", options: ["A. A unit of data sent across a network.", "B. To protect something from harm or danger.", "C. A device used in the home.", "D. Provided with the necessary equipment or features.", "E. A setting chosen automatically unless changed."], answer: "D" },
        { word: "default", options: ["A. A unit of data sent across a network.", "B. To protect something from harm or danger.", "C. A device used in the home.", "D. Provided with the necessary equipment or features.", "E. A setting chosen automatically unless changed."], answer: "E" },
        { word: "packet", options: ["A. A unit of data sent across a network.", "B. To protect something from harm or danger.", "C. A device used in the home.", "D. Provided with the necessary equipment or features.", "E. A setting chosen automatically unless changed."], answer: "A" },
        { word: "safeguard", options: ["A. A unit of data sent across a network.", "B. To protect something from harm or danger.", "C. A device used in the home.", "D. Provided with the necessary equipment or features.", "E. A setting chosen automatically unless changed."], answer: "B" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "We ____ our computers when the electricity went off.", options: ["were using", "use", "are using"], answer: 0 },
        { text: "She ____ the report before the manager arrived.", options: ["has finished", "had finished", "finishes"], answer: 1 },
        { text: "They ____ on the project since Monday.", options: ["have been working", "worked", "are work"], answer: 0 },
        { text: "There are ____ applications available online.", options: ["much", "a little", "a lot of"], answer: 2 },
        { text: "By 2030, scientists ____ more advanced computers.", options: ["will develop", "will have developed", "developed"], answer: 1 }
      ]
    }
  },
  8: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      // В DOCX часть таблицы обрезана — оставлены только видимые слова (4-5).
      // Добавьте слова 1-3 вручную по оригиналу. Ниже — заглушки для демонстрации.
      words: [
        { word: "broadband", options: ["A. The amount of work a person or system must deal with.", "B. Able to be changed to suit different needs.", "C. A high-speed internet connection.", "D. The amount of work a person or system must deal with.", "E. Able to be changed to suit different needs."], answer: "C" },
        { word: "workload", options: ["A. The amount of work a person or system must deal with.", "B. Able to be changed to suit different needs.", "C. A high-speed internet connection.", "D. The amount of work a person or system must deal with.", "E. Able to be changed to suit different needs."], answer: "A" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "He ____ for two hours before he found the error.", options: ["had been working", "has worked", "works"], answer: 0 },
        { text: "How long ____ you ____ English?", options: ["have / been studying", "did / studying", "are / study"], answer: 0 },
        { text: "This laptop is ____ powerful than the previous model.", options: ["more", "most", "the most"], answer: 0 },
        { text: "The new system isn't ____ reliable as the old one.", options: ["more", "as", "than"], answer: 1 },
        { text: "Let's update the software, ____?", options: ["will we", "shall we", "do we"], answer: 1 }
      ]
    }
  },
  9: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      words: [
        { word: "detect", options: ["A. A signal sent to test whether a network connection responds.", "B. To increase or improve something.", "C. To discover or notice something.", "D. Computer systems that learn patterns from data.", "E. To change something to suit a particular need."], answer: "C" },
        { word: "machine learning", options: ["A. A signal sent to test whether a network connection responds.", "B. To increase or improve something.", "C. To discover or notice something.", "D. Computer systems that learn patterns from data.", "E. To change something to suit a particular need."], answer: "D" },
        { word: "customize", options: ["A. A signal sent to test whether a network connection responds.", "B. To increase or improve something.", "C. To discover or notice something.", "D. Computer systems that learn patterns from data.", "E. To change something to suit a particular need."], answer: "E" },
        { word: "ping", options: ["A. A signal sent to test whether a network connection responds.", "B. To increase or improve something.", "C. To discover or notice something.", "D. Computer systems that learn patterns from data.", "E. To change something to suit a particular need."], answer: "A" },
        { word: "boost", options: ["A. A signal sent to test whether a network connection responds.", "B. To increase or improve something.", "C. To discover or notice something.", "D. Computer systems that learn patterns from data.", "E. To change something to suit a particular need."], answer: "B" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "The company ____ a new product next month.", options: ["launches", "is launching", "launched yesterday"], answer: 1 },
        { text: "I'll send you the document as soon as I ____ it.", options: ["will receive", "receive", "received"], answer: 1 },
        { text: "At 10 a.m. tomorrow, we ____ a meeting.", options: ["will be having", "have", "had"], answer: 0 },
        { text: "By Friday, she ____ the project.", options: ["will finish", "will have finished", "finishes"], answer: 1 },
        { text: "The team ____ the software for six months by December.", options: ["will have been developing", "develops", "is developing"], answer: 0 }
      ]
    }
  },
  10: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      words: [
        { word: "sequence", options: ["A. A request for information from a database or search system.", "B. Very difficult to deal with because there is too much.", "C. A set of events or actions in a particular order.", "D. To estimate something as greater than it really is.", "E. The ability of systems or devices to work together."], answer: "C" },
        { word: "overestimate", options: ["A. A request for information from a database or search system.", "B. Very difficult to deal with because there is too much.", "C. A set of events or actions in a particular order.", "D. To estimate something as greater than it really is.", "E. The ability of systems or devices to work together."], answer: "D" },
        { word: "compatibility", options: ["A. A request for information from a database or search system.", "B. Very difficult to deal with because there is too much.", "C. A set of events or actions in a particular order.", "D. To estimate something as greater than it really is.", "E. The ability of systems or devices to work together."], answer: "E" },
        { word: "configure", options: ["A. A request for information from a database or search system.", "B. Very difficult to deal with because there is too much.", "C. A set of events or actions in a particular order.", "D. To estimate something as greater than it really is.", "E. The ability of systems or devices to work together."], answer: "A" },
        { word: "overwhelming", options: ["A. A request for information from a database or search system.", "B. Very difficult to deal with because there is too much.", "C. A set of events or actions in a particular order.", "D. To estimate something as greater than it really is.", "E. The ability of systems or devices to work together."], answer: "B" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "She ____ in this company for five years.", options: ["has worked", "works yesterday", "is work"], answer: 0 },
        { text: "When I called him, he ____ a new application.", options: ["developed", "was developing", "develops"], answer: 1 },
        { text: "They ____ use floppy disks in the past.", options: ["used to", "use to", "are used to"], answer: 0 },
        { text: "I am getting used to ____ remotely.", options: ["work", "working", "worked"], answer: 1 },
        { text: "The technician ____ the computer last week.", options: ["has repaired", "repairs", "repaired"], answer: 2 }
      ]
    }
  },
  11: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      // В DOCX первая строка таблицы обрезана (слово 1 отсутствует). Добавьте вручную.
      words: [
        { word: "rules-based", options: ["A. Requiring little effort; easy to use or do.", "B. Operating according to a fixed set of rules.", "C. The ease with which content can be shared.", "D. Requiring little effort; easy to use or do.", "E. A request for information from a database or search system."], answer: "B" },
        { word: "query", options: ["A. Requiring little effort; easy to use or do.", "B. Operating according to a fixed set of rules.", "C. The ease with which content can be shared.", "D. Requiring little effort; easy to use or do.", "E. A request for information from a database or search system."], answer: "E" },
        { word: "urban", options: ["A. Requiring little effort; easy to use or do.", "B. Operating according to a fixed set of rules.", "C. The ease with which content can be shared.", "D. Requiring little effort; easy to use or do.", "E. A request for information from a database or search system."], answer: "D" },
        { word: "shareability", options: ["A. Requiring little effort; easy to use or do.", "B. Operating according to a fixed set of rules.", "C. The ease with which content can be shared.", "D. Requiring little effort; easy to use or do.", "E. A request for information from a database or search system."], answer: "C" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "The system ____ automatically every night.", options: ["is backed up", "backs up by technicians", "backing up"], answer: 0 },
        { text: "The documents ____ by the manager yesterday.", options: ["signed", "were signed", "are signing"], answer: 1 },
        { text: "The new application ____ at the moment.", options: ["is being tested", "has tested", "tests"], answer: 0 },
        { text: "We had our computer ____.", options: ["repair", "repaired", "repairing"], answer: 1 },
        { text: "The CEO is said ____ the proposal.", options: ["to approve", "to have approved", "approving"], answer: 1 }
      ]
    }
  },
  12: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      words: [
        { word: "hardwire", options: ["A. Large, heavy, and difficult to move.", "B. An informal term for a programmer doing routine coding tasks.", "C. To connect a device directly using a physical cable.", "D. Advanced and complex; showing a high level of skill.", "E. To develop or change gradually over time."], answer: "C" },
        { word: "sophisticated", options: ["A. Large, heavy, and difficult to move.", "B. An informal term for a programmer doing routine coding tasks.", "C. To connect a device directly using a physical cable.", "D. Advanced and complex; showing a high level of skill.", "E. To develop or change gradually over time."], answer: "D" },
        { word: "evolve", options: ["A. Large, heavy, and difficult to move.", "B. An informal term for a programmer doing routine coding tasks.", "C. To connect a device directly using a physical cable.", "D. Advanced and complex; showing a high level of skill.", "E. To develop or change gradually over time."], answer: "E" },
        { word: "code monkey", options: ["A. Large, heavy, and difficult to move.", "B. An informal term for a programmer doing routine coding tasks.", "C. To connect a device directly using a physical cable.", "D. Advanced and complex; showing a high level of skill.", "E. To develop or change gradually over time."], answer: "B" },
        { word: "bulky", options: ["A. Large, heavy, and difficult to move.", "B. An informal term for a programmer doing routine coding tasks.", "C. To connect a device directly using a physical cable.", "D. Advanced and complex; showing a high level of skill.", "E. To develop or change gradually over time."], answer: "A" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "There are ____ applications available online.", options: ["a little", "much", "several"], answer: 2 },
        { text: "We have ____ useful applications on this computer.", options: ["too", "enough", "such"], answer: 1 },
        { text: "The connection is ____ slow to download the file.", options: ["too", "enough", "such"], answer: 0 },
        { text: "It was ____ an interesting presentation that everyone listened carefully.", options: ["so", "such", "too"], answer: 1 },
        { text: "The computer isn't powerful ____ to run this program.", options: ["too", "enough", "such"], answer: 1 }
      ]
    }
  },
  13: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      words: [
        { word: "empower", options: ["A. To have or hold something inside.", "B. Able to adapt to many different functions or uses.", "C. To give someone the confidence or ability to do something.", "D. Trying hard to be more successful than others.", "E. To transfer data from the internet to a device."], answer: "C" },
        { word: "versatile", options: ["A. To have or hold something inside.", "B. Able to adapt to many different functions or uses.", "C. To give someone the confidence or ability to do something.", "D. Trying hard to be more successful than others.", "E. To transfer data from the internet to a device."], answer: "B" },
        { word: "contain", options: ["A. To have or hold something inside.", "B. Able to adapt to many different functions or uses.", "C. To give someone the confidence or ability to do something.", "D. Trying hard to be more successful than others.", "E. To transfer data from the internet to a device."], answer: "A" },
        { word: "download", options: ["A. To have or hold something inside.", "B. Able to adapt to many different functions or uses.", "C. To give someone the confidence or ability to do something.", "D. Trying hard to be more successful than others.", "E. To transfer data from the internet to a device."], answer: "E" },
        { word: "competitive", options: ["A. To have or hold something inside.", "B. Able to adapt to many different functions or uses.", "C. To give someone the confidence or ability to do something.", "D. Trying hard to be more successful than others.", "E. To transfer data from the internet to a device."], answer: "D" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "____ did you invite to the meeting?", options: ["Who", "Whom", "Who did"], answer: 1 },
        { text: "Nobody called yesterday, ____?", options: ["did they", "didn't they", "did he"], answer: 0 },
        { text: "She doesn't use this application, ____?", options: ["does she", "doesn't she", "is she"], answer: 0 },
        { text: "Could you explain why the computer ____?", options: ["stopped", "did it stop", "does stop"], answer: 0 },
        { text: "Do you know how much this laptop ____?", options: ["does cost", "costs", "is it cost"], answer: 1 }
      ]
    }
  },
  14: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      // В DOCX обрезаны слова 1-2. Добавьте вручную.
      words: [
        { word: "enable", options: ["A. To happen or take place.", "B. To make something possible.", "C. To happen or take place.", "D. A useful or valuable thing, person, or quality.", "E. Coming from outside a particular system or organization."], answer: "B" },
        { word: "upload", options: ["A. To happen or take place.", "B. To make something possible.", "C. To happen or take place.", "D. A useful or valuable thing, person, or quality.", "E. Coming from outside a particular system or organization."], answer: "C" },
        { word: "external", options: ["A. To happen or take place.", "B. To make something possible.", "C. To happen or take place.", "D. A useful or valuable thing, person, or quality.", "E. Coming from outside a particular system or organization."], answer: "E" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "By the time we arrived, the meeting ____.", options: ["had started", "has started", "starts"], answer: 0 },
        { text: "They ____ the network when the power failed.", options: ["were checking", "checked", "check"], answer: 0 },
        { text: "I ____ never ____ such an advanced device.", options: ["did / see", "have / seen", "am / seeing"], answer: 1 },
        { text: "By next month, we ____ here for ten years.", options: ["will work", "will have been working", "are working"], answer: 1 },
        { text: "The train ____ at 8 p.m. tomorrow.", options: ["leaves", "will leaving", "leave"], answer: 0 }
      ]
    }
  },
  15: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      words: [
        { word: "inconvenience", options: ["A. To carry out or perform an instruction or task.", "B. An explanation that makes something clear.", "C. Unacceptable or improper behavior.", "D. Something that causes difficulty or trouble.", "E. Able to understand and respond to the situation or user's needs."], answer: "D" },
        { word: "clarification", options: ["A. To carry out or perform an instruction or task.", "B. An explanation that makes something clear.", "C. Unacceptable or improper behavior.", "D. Something that causes difficulty or trouble.", "E. Able to understand and respond to the situation or user's needs."], answer: "B" },
        { word: "execute", options: ["A. To carry out or perform an instruction or task.", "B. An explanation that makes something clear.", "C. Unacceptable or improper behavior.", "D. Something that causes difficulty or trouble.", "E. Able to understand and respond to the situation or user's needs."], answer: "A" },
        { word: "context-aware", options: ["A. To carry out or perform an instruction or task.", "B. An explanation that makes something clear.", "C. Unacceptable or improper behavior.", "D. Something that causes difficulty or trouble.", "E. Able to understand and respond to the situation or user's needs."], answer: "E" },
        { word: "misconduct", options: ["A. To carry out or perform an instruction or task.", "B. An explanation that makes something clear.", "C. Unacceptable or improper behavior.", "D. Something that causes difficulty or trouble.", "E. Able to understand and respond to the situation or user's needs."], answer: "C" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "This device is ____ reliable than the old one.", options: ["more", "most", "the most"], answer: 0 },
        { text: "This is ____ complicated task in the entire project.", options: ["more", "the most", "most"], answer: 1 },
        { text: "The more you practise, ____ you become.", options: ["the better", "better", "the best"], answer: 0 },
        { text: "The new system is twice ____ fast as the old one.", options: ["than", "as", "more"], answer: 1 },
        { text: "This software is not ____ expensive as the previous version.", options: ["more", "as", "than"], answer: 1 }
      ]
    }
  },
  16: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      words: [
        { word: "sacrifice", options: ["A. A person who uses deception to trick others, often online.", "B. To give up something important to gain something else.", "C. A path or way taken by data or traffic.", "D. Able to be trusted or depended on.", "E. To recognize or understand a difference."], answer: "B" },
        { word: "discern", options: ["A. A person who uses deception to trick others, often online.", "B. To give up something important to gain something else.", "C. A path or way taken by data or traffic.", "D. Able to be trusted or depended on.", "E. To recognize or understand a difference."], answer: "E" },
        { word: "reliable", options: ["A. A person who uses deception to trick others, often online.", "B. To give up something important to gain something else.", "C. A path or way taken by data or traffic.", "D. Able to be trusted or depended on.", "E. To recognize or understand a difference."], answer: "D" },
        { word: "route", options: ["A. A person who uses deception to trick others, often online.", "B. To give up something important to gain something else.", "C. A path or way taken by data or traffic.", "D. Able to be trusted or depended on.", "E. To recognize or understand a difference."], answer: "C" },
        { word: "scammer", options: ["A. A person who uses deception to trick others, often online.", "B. To give up something important to gain something else.", "C. A path or way taken by data or traffic.", "D. Able to be trusted or depended on.", "E. To recognize or understand a difference."], answer: "A" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "If the system ____ working, contact technical support.", options: ["will stop", "stops", "stopped"], answer: 1 },
        { text: "When the technician ____, we will start the test.", options: ["arrives", "will arrive", "arrived"], answer: 0 },
        { text: "I think computers ____ become more powerful.", options: ["are", "will", "have"], answer: 1 },
        { text: "At this time next week, we ____ our new software.", options: ["will be testing", "test", "tested"], answer: 0 },
        { text: "By the end of the year, they ____ the new system.", options: ["will install", "will have installed", "install"], answer: 1 }
      ]
    }
  },
  17: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      // В DOCX обрезано слово 1. Добавьте вручную.
      words: [
        { word: "sustainable", options: ["A. Able to continue for a long time without harming the environment.", "B. To promote or encourage something strongly.", "C. Able to continue for a long time without harming the environment.", "D. A manipulated video or image making someone appear to say or do something.", "E. To find and solve problems with equipment or software."], answer: "A" },
        { word: "deepfake", options: ["A. Able to continue for a long time without harming the environment.", "B. To promote or encourage something strongly.", "C. Able to continue for a long time without harming the environment.", "D. A manipulated video or image making someone appear to say or do something.", "E. To find and solve problems with equipment or software."], answer: "D" },
        { word: "troubleshoot", options: ["A. Able to continue for a long time without harming the environment.", "B. To promote or encourage something strongly.", "C. Able to continue for a long time without harming the environment.", "D. A manipulated video or image making someone appear to say or do something.", "E. To find and solve problems with equipment or software."], answer: "E" },
        { word: "push", options: ["A. Able to continue for a long time without harming the environment.", "B. To promote or encourage something strongly.", "C. Able to continue for a long time without harming the environment.", "D. A manipulated video or image making someone appear to say or do something.", "E. To find and solve problems with equipment or software."], answer: "B" },
        { word: "suspend", options: ["A. Able to continue for a long time without harming the environment.", "B. To promote or encourage something strongly.", "C. Able to continue for a long time without harming the environment.", "D. A manipulated video or image making someone appear to say or do something.", "E. To find and solve problems with equipment or software."], answer: "C" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "The documents ____ before the meeting started.", options: ["had been prepared", "have prepared", "were preparing"], answer: 0 },
        { text: "The new software ____ next week.", options: ["will release", "will be released", "releases yesterday"], answer: 1 },
        { text: "The computer ____ right now.", options: ["is repaired", "is being repaired", "has repair"], answer: 1 },
        { text: "We need to have the printer ____.", options: ["checking", "checked", "check"], answer: 1 },
        { text: "The company is believed ____ new security measures.", options: ["to introduce", "to have introduced", "introducing"], answer: 1 }
      ]
    }
  },
  18: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      words: [
        { word: "simplify", options: ["A. Unnecessary because it is repeated or no longer needed.", "B. A failure to notice or properly supervise something.", "C. The act of pretending to be another person.", "D. To make something less complicated.", "E. An alphabetical list or measure used to locate information."], answer: "D" },
        { word: "impersonation", options: ["A. Unnecessary because it is repeated or no longer needed.", "B. A failure to notice or properly supervise something.", "C. The act of pretending to be another person.", "D. To make something less complicated.", "E. An alphabetical list or measure used to locate information."], answer: "C" },
        { word: "redundant", options: ["A. Unnecessary because it is repeated or no longer needed.", "B. A failure to notice or properly supervise something.", "C. The act of pretending to be another person.", "D. To make something less complicated.", "E. An alphabetical list or measure used to locate information."], answer: "A" },
        { word: "index", options: ["A. Unnecessary because it is repeated or no longer needed.", "B. A failure to notice or properly supervise something.", "C. The act of pretending to be another person.", "D. To make something less complicated.", "E. An alphabetical list or measure used to locate information."], answer: "E" },
        { word: "oversight", options: ["A. Unnecessary because it is repeated or no longer needed.", "B. A failure to notice or properly supervise something.", "C. The act of pretending to be another person.", "D. To make something less complicated.", "E. An alphabetical list or measure used to locate information."], answer: "B" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "He ____ to work in an IT company, but now he works in finance.", options: ["use", "used", "was used"], answer: 1 },
        { text: "We ____ this application since 2020.", options: ["have used", "used", "are using yesterday"], answer: 0 },
        { text: "She ____ the software when I called her.", options: ["installed", "was installing", "installs"], answer: 1 },
        { text: "They ____ the network for several hours before it finally worked.", options: ["had been repairing", "have repaired", "repair"], answer: 0 },
        { text: "How long ____ you ____ this computer?", options: ["have / owned", "are / owning", "did / owning"], answer: 0 }
      ]
    }
  },
  19: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      words: [
        { word: "violate", options: ["A. The speed at which something moves or happens.", "B. A fake document, signature, or work made to look genuine.", "C. The use of deception to obtain money or an advantage.", "D. To fail to obey a law, rule, or agreement.", "E. Smoothly, without difficulty or interruption."], answer: "D" },
        { word: "fraud", options: ["A. The speed at which something moves or happens.", "B. A fake document, signature, or work made to look genuine.", "C. The use of deception to obtain money or an advantage.", "D. To fail to obey a law, rule, or agreement.", "E. Smoothly, without difficulty or interruption."], answer: "C" },
        { word: "seamlessly", options: ["A. The speed at which something moves or happens.", "B. A fake document, signature, or work made to look genuine.", "C. The use of deception to obtain money or an advantage.", "D. To fail to obey a law, rule, or agreement.", "E. Smoothly, without difficulty or interruption."], answer: "E" },
        { word: "velocity", options: ["A. The speed at which something moves or happens.", "B. A fake document, signature, or work made to look genuine.", "C. The use of deception to obtain money or an advantage.", "D. To fail to obey a law, rule, or agreement.", "E. Smoothly, without difficulty or interruption."], answer: "A" },
        { word: "forgery", options: ["A. The speed at which something moves or happens.", "B. A fake document, signature, or work made to look genuine.", "C. The use of deception to obtain money or an advantage.", "D. To fail to obey a law, rule, or agreement.", "E. Smoothly, without difficulty or interruption."], answer: "B" }
      ]
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: [
        { text: "The files ____ automatically every night.", options: ["are saved", "save by technicians", "saving"], answer: 0 },
        { text: "The application ____ by the developers last year.", options: ["was created", "created", "has creating"], answer: 0 },
        { text: "All the data ____ already been transferred.", options: ["has", "have", "are"], answer: 1 },
        { text: "The system ____ when the technician arrived.", options: ["was being updated", "has updated", "updates"], answer: 0 },
        { text: "She had her laptop ____ yesterday.", options: ["repair", "repaired", "repairing"], answer: 1 }
      ]
    }
  },
  20: {
    task1: {
      title: "Task 1. Vocabulary",
      instruction: "Match the words (1–5) with their definitions (A–E).",
      // ⚠️ В загруженном DOCX вариант 20 обрезан — данных нет вообще.
      // Добавьте слова/определения вручную по оригиналу.
      words: []
    },
    task2: {
      title: "Task 2. Grammar",
      instruction: "Choose the correct answer.",
      questions: []
    }
  }
};