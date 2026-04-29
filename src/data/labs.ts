export interface Lab {
  id: string
  name: string
  focus: string
  color: string
  logo: string
  image_id: string
  video_id: string
  description: string
  mission: string
  executives: {
    name: string
    role: string
    field: string
    image?: string
  }[]
  members: {
    name: string
    field: string
    year: string
  }[]
}



export const labs: Lab[] = [
  { 
    id: "prajna-kritrima", 
    name: "Prajna Kritrima Lab", 
    focus: "AI/ML, Deep Learning & Generative AI", 
    color: "#8B5CF6",
    logo: "https://res.cloudinary.com/djtemmctt/image/upload/v1771104005/singularity_new_logo_knedxr.png",
    image_id: "v1771107649/web_nxsjmf",
    video_id: "v1771108954/aiml_nth8ay", // Add Cloudinary video public ID here if available
    description: "Prajna Kritrima — Sanskrit for Artificial Intelligence (Prajna = wisdom, Kritrima = man-made) — is where brains meet bytes! As the AI, ML, and DL wing of the Singularity Student Research Lab, we tinker, train, and twist neural nets into life. From wild AI agents to deep learning experiments, it’s where curiosity codes intelligence!",
    mission:"To advance the field of artificial intelligence through innovative research in machine learning, deep learning, and generative AI. We aim to create intelligent systems that are not only powerful but also ethical, explainable, and beneficial to society. Our research spans from fundamental theoretical advances to practical applications that solve real-world problems.",
    executives: [
    {
      name: "Surya Teja Batchu",
      role: "Executive Lead",
      field: "Deep Learning & Neural Networks",
      image: "/team/krish.jpg"
    }
    ],
    members: [
    { name:"DNV Likhitha Chittineedi", field:"AIML", year:"3rd Year"},
    { name:"Arijit Das", field:"Reinforcement Learning", year:"2nd Year"},
    { name:"Batchu Surya Teja", field:"Federated Learning", year:"3rd Year"},
    { name:"A.V. Ram Sathvik", field:"Computer Vision", year:"3rd Year"},
    { name:"Lavjeet Kumar Rai", field:"Machine Learning", year:"1st Year"},
    { name:"Tarun Karma", field:"Computer Vision", year:"2nd Year"},
    { name:"P. Joshika", field:"Computer Vision", year:"3rd Year"},
    { name:"S. Pavan Kumar", field:"Computer Vision", year:"3rd Year"},
    { name:"Naga Kashya", field:"Data Analytics", year:"3rd Year"},
    ]
  },
  { 
    id: "aanu-tattva", 
    name: "Aanu Tattva Lab", 
    focus: "Quantum Computing & Quantum Machine Learning", 
    color: "#06B6D4",
    logo: "https://res.cloudinary.com/djtemmctt/image/upload/v1771104005/singularity_new_logo_knedxr.png",
    image_id: "v1771107649/web_nxsjmf",
    video_id: "v1771110349/anu_x3nf1r",
    description: "Aanu Tattva Lab, derived from Sanskrit where 'Aanu' means atom and 'Tattva' means principle or essence, is the Quantum Computing division of the Singularity Student Research Lab at SRM University AP. It's where physics meets computation — students explore qubits, entanglement, and quantum algorithms to decode the mysteries of the subatomic world. From theoretical foundations to quantum simulations, Aanu Tattva Lab is where the next wave of computational revolution begins.",
    mission:"To unlock the potential of quantum computing through groundbreaking research in quantum algorithms, quantum machine learning, and quantum error correction. We aim to develop practical quantum solutions that provide exponential speedups over classical computing for real-world problems in optimization, simulation, and artificial intelligence.",
    executives: [
    {
      name: "Jayanth Ramakrishnan",
      role: "Executive Lead & Founder",
      field: "Quantum Algorithms & ML",
      image: "https://res.cloudinary.com/djtemmctt/image/upload/v1773943803/jayanth_dtqvzg.jpg"
    }
    ],
    members: [
    { name:"B Md Fawaz", field:"Quantum Algorithms", year:"1st Year"},
    { name:"Jahnavi Alaham", field:"Quantum Machine Learning", year:"1st Year"},
    { name:"Kondreddy Yaswitha Reddy", field:"Quantum Computing", year:"2nd Year"},
    { name:"Rudrapaka Bhavitha", field:"Quantum Error Correction", year:"2nd Year"},
    ]
  },
  { 
    id: "chitra-darshan", 
    name: "Chitra Darshan Lab", 
    focus: "Game Development, AR, VR & Mixed Reality", 
    color: "#EC4899",
    logo: "https://res.cloudinary.com/djtemmctt/image/upload/v1771104005/singularity_new_logo_knedxr.png",
    image_id: "lab_chitra_darshan_v123",
    video_id: "v1771109806/game_ngq6ll",
    description: "Chitra Darshan Lab, meaning 'vision through imagery' in Sanskrit, is the AR, VR, MR, and Game Development division of the Singularity Student Research Lab at SRM University AP. It's where imagination meets immersion — students craft virtual worlds, interactive experiences, and mixed reality applications that blur the line between the real and the digital. From gamified learning to futuristic simulations, Chitra Darshan Lab is the canvas where creativity comes alive in 3D.",
    mission:"To revolutionize interactive entertainment and spatial computing through innovative game development, virtual reality, and augmented reality technologies. We create immersive experiences that engage, educate, and inspire users while advancing the state-of-the-art in real-time graphics, spatial computing, and human-computer interaction.",
    executives: [
    {
      name: "Abir Banerjee",
      role: "Executive Lead",
      field: "Game Development & XR",
      image: "https://res.cloudinary.com/djtemmctt/image/upload/v1773945051/Abir_n5bwbq.jpg"
    }
    ],
    members: [
    { name:"Pranav Sikka", field:"Procedural Generation", year:"1st Year"},
    ]
  },
  { 
    id: "varahamihira",
    name: "Varahamihira Lab", 
    focus: "Cloud Computing & Cybersecurity", 
    color: "#3B82F6",
    logo: "https://res.cloudinary.com/djtemmctt/image/upload/v1771104005/singularity_new_logo_knedxr.png",
    image_id: "lab_chitra_darshan_v123",
    video_id: "v1771110176/cloud_jyh7tx",
    description: "Varahamihira Lab, named after the brilliant astronomer and polymath, is the Cloud Computing and Cybersecurity division of the Singularity Student Research Lab at SRM University AP. It's where the cloud meets code and security meets strategy — students architect scalable cloud systems, fortify networks, and explore the art of digital defense. From deploying robust infrastructures to safeguarding cyberspace, Varahamihira Lab empowers minds to build and protect the future of tech.",
    mission:"To advance cloud computing and cybersecurity through innovative research in scalable infrastructure, threat detection, and digital defense systems. We aim to architect secure, efficient cloud solutions that protect critical systems and enable organizations to thrive in an increasingly connected world.",
    executives: [
    {
      name: "Poojan Patel",
      role: "Executive Lead",
      field: "Cloud Infrastructure",
      image: "https://res.cloudinary.com/djtemmctt/image/upload/v1761841362/Screenshot_from_2025-10-30_21-36-50_dbpkou.png"
    },
    {
      name: "Lokesh K",
      role: "Executive",
      field: "LoRa & Communicative Networks",
      image: "https://res.cloudinary.com/djtemmctt/image/upload/v1773943803/lokesh_ww5sa3.jpg"
    }
    ],
    members: [
    { name:"Anmol Sharma", field:"Cloud Systems", year:"1st Year"},
    ]
  },
  { 
    id: "bhaskaracharya",
    name: "Bhaskaracharya Lab", 
    focus: "Blockchain & Web3", 
    color: "#10B981",
    logo: "https://res.cloudinary.com/djtemmctt/image/upload/v1771104005/singularity_new_logo_knedxr.png",
    image_id: "lab_chitra_darshan_v123",
    video_id: "v1771109808/nav_gezae4",
    description: "Bhaskaracharya Lab, named after the legendary mathematician and astronomer, is the Web Development division of the Singularity Student Research Lab at SRM University AP. It's where design meets logic and creativity meets code — students craft stunning websites, dynamic web apps, and digital experiences that speak innovation. From front-end flair to back-end brilliance running by Web3 Emphasis, Bhaskaracharya Lab is the playground where ideas turn into interactive realities.",
    mission:"To advance the field of cybersecurity and blockchain technology through innovative research in threat detection, cryptographic systems, and decentralized applications. We develop secure, privacy-preserving solutions that protect digital assets and enable trustless interactions in the Web3 ecosystem, ensuring a safer and more decentralized future for all.",
    executives: [
    {
      name: "Parvendan R",
      role: "Executive Lead",
      field: "Web Technologies & Web3",
      image: "https://res.cloudinary.com/djtemmctt/image/upload/v1773943803/pary_reqdra.jpg"
    },
    {
      name: "Dave Meshak J",
      role: "Executive",
      field: "Blockchain & Web3 Technologies",
      image: "https://res.cloudinary.com/djtemmctt/image/upload/v1761841360/Screenshot_from_2025-10-30_21-28-41_utodxb.png"
    }
    ],
    members: [
    { name:"Atharv Mamidwar", field:"Cryptographic Protocols", year:"1st Year"},
    { name:"B Md Fawaz", field:"Smart Contracts", year:"2nd Year"},
    { name:"Balagam S S K Uma Devi", field:"Decentralized Finance", year:"2nd Year"},
    { name:"Ch Akhila", field:"Network Security", year:"3rd Year"},
    { name:"G.Bhanu Prakash Reddy", field:"Privacy-Preserving Tech", year:"2nd Year"},
    { name:"Gnanada Alavala", field:"Privacy-Preserving Tech", year:"2nd Year"},
    { name:"J.Abhilash", field:"Privacy-Preserving Tech", year:"2nd Year"},
    ]
  },
  { 
    id: "agastya",
    name: "Agastya Lab", 
    focus: "Robotics, IoT & Embedded Systems", 
    color: "#F97316",
    logo: "https://res.cloudinary.com/djtemmctt/image/upload/v1771104005/singularity_new_logo_knedxr.png",
    image_id: "lab_chitra_darshan_v123",
    video_id: "v1771114402/robo_e9htbm",
    description: "Agastya Lab, inspired by the ancient sage known for his wisdom and innovation, is the Drones, IoT, and LoRa division of the Singularity Student Research Lab at SRM University AP. It's where circuits take flight and ideas connect — students build smart systems, autonomous drones, and long-range IoT networks that bridge the physical and digital worlds. From sky to sensor, Agastya Lab turns imagination into intelligent motion.",
    mission:"To advance the field of robotics, IoT, and embedded systems through innovative research in autonomous systems, smart sensors, and intelligent automation. We develop practical solutions that enhance human capabilities, improve efficiency, and create sustainable smart environments that benefit society and industry.",
    executives: [
    {
      name: "Pradeep Chalamcharla",
      role: "Executive Lead",
      field: "Robotics & Autonomous Systems",
      image: "https://res.cloudinary.com/djtemmctt/image/upload/v1761842247/Screenshot_from_2025-10-30_22-07-06_dbiv0s.png"
    }
    ],
    members: [
    { name:"Agastya", field:"Robotics", year:"1st Year"},
    { name:"Ashwith", field:"Autonomous Systems", year:"2nd Year"},
    ] 
  },
  { 
    id: "navya-vigyan", 
    name: "Navya Vigyan Lab", 
    focus: "Interdisciplinary & Experimental Technology", 
    color: "#EF4444",
    logo: "https://res.cloudinary.com/djtemmctt/image/upload/v1771104005/singularity_new_logo_knedxr.png",
    image_id: "lab_chitra_darshan_v123",
    video_id: "v1771109807/Cyber_a7d0jd",
    description: "Navya Vigyan Lab, meaning 'Modern Science' in Sanskrit, is the Interdisciplinary and Management division of the Singularity Student Research Lab at SRM University AP. It's where innovation meets organization — students blend technology with strategy, exploring intersections of research, entrepreneurship, and leadership. From managing projects to driving interdisciplinary collaborations, Navya Vigyan Lab empowers visionaries to turn ideas into impactful realities.",
    mission:"To pioneer breakthrough innovations through interdisciplinary research and experimental technology development. We bring together diverse scientific disciplines to tackle complex global challenges, creating novel solutions that transcend traditional boundaries and open new possibilities for human advancement and technological progress.",
    executives: [],
    members: []
  }
];