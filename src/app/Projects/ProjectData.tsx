import Image from "next/image";
export interface IProjectList {
    projectName: string;
    about: string;
    githubLink?: string;
    desc: React.ReactNode;
  }
  // let activeProject:IProjectList;
  export let projects = new Map<string, IProjectList>();
  projects.set("LearningAnatomy", {
    projectName: "Learning Anatomy",
    about: "This is my final project in University",
    githubLink : "https://github.com/ARosyidG/Learning-Anatomy",
    desc: (
      <div>
        <p className="text-justify">
          This project aims to simulate skeletal anatomy learning at Mataram University. The application developed from this project is based on Virtual Reality.
        </p>
        <Image className="px-4 py-1" src="/Project/TA.png" alt="TA" width={1000} height={100}></Image>
        <p className="text-justify">
        All 3D assets in this project is created by me except The bone and VR Controller model. The bone model used in this project is the pelvic bone model obtained from Z-Anatomy. This highly detailed model provides an accurate representation of human anatomy, which is essential for effective learning. The application’s content features modified transformations of the bone model, allowing students to explore and observe the pelvic bone from all angles. This interactive experience enhances their understanding of the structure and function of the bone, making learning more engaging and immersive. Additionally, the application includes quizzes designed to assess students&apos; ability to recognize and identify different parts of the pelvic bone. These quizzes not only reinforce their knowledge but also provide immediate feedback, helping students track their progress and understanding of skeletal anatomy. Through this innovative approach, the application aims to improve the educational experience for students at Mataram University.
        </p>
        <Image className="px-4 py-1" src="/Project/TA2.png" alt="TA" width={1000} height={100}></Image>
        <p className="text-justify">
        In its development, I used the XRI Package provided by Unity. This package was utilized solely to obtain input from the Oculus Quest 2, and I did not use the Grab Interactable component that it offers. The limitations of this component hindered the realization of the design requested by the university. As a result, I recreated the functionalities for grabbing, rotating, and scaling to align with the university&apos;s desired design.
        </p>
      </div>
    ),
  });
  
  projects.set("PanjatPinang", {
    projectName: "Panjat Pinang",
    about: "Game to Celebrate Indonesian Independence Day",
    githubLink:"https://github.com/ARosyidG/Panjat-Pinang",
    desc: (
      <div>
        <p className="text-justify">
          One of my Unity-based game inspired by Panjat Pinang, a traditional Indonesian activity celebrated during Indonesia&apos;s Independence Day. in the game participants climb a slippery pole and claim prizes. I developed this project to not only commemorate the national holiday but also to showcase the potential of integrating cultural heritage with interactive digital experiences.
        </p>
        <Image className="px-4 py-1" src="/Project/PanjatPinang.png" alt="TA" width={1000} height={100}></Image>
        <p className="text-justify">
          The game was built using the Unity game engine. The gameplay interface features a menu where players can set up the event. Users can input rewards, define the height of the pole (Tinggi Tiang), and manage participants (Peserta) through a UI. Players are listed dynamically, and the system ensures that all information is processed smoothly. The animated characters climbing the pole reflect the fun and teamwork typical of the real-life event.
        </p>

        <p className="text-justify">
          To manage the backend, I developed a REST API using Spring Boot, which connects the game to a relational database. The database stores player login info, participants names and the rewards they earned during the game.
        </p>
        <span>link for demo: </span>
        <a href="https://17an.ganausi.com" target="_blank">https://17an.ganausi.com</a>
        <p>
          <br />
          <br />
        </p>
      </div>
    ),
  });
 
  projects.set("yair", {
    projectName: "E-Letter",
    about: "Organization e-signature and e-letter app.",
    githubLink:"https://github.com/ARosyidG/yair",
    desc: (
      <div>
        <p>
          This project is designed to streamline the management of correspondence within an organization. Its primary goal is to enable members of the organization to create and sign documents from anywhere, ensuring that all processes related to correspondence can be handled swiftly and efficiently.
        </p>
        <p>
          The project is built using the Laravel framework
        </p>
        <Image className="px-4 py-1" src="/Project/EL1.png" alt="EL" width={1000} height={100}></Image>
        <Image className="px-4 py-1" src="/Project/EL2.png" alt="EL" width={1000} height={100}></Image>
        <Image className="px-4 py-1" src="/Project/EL3.png" alt="EL" width={1000} height={100}></Image>
        <span>link for demo: </span>
        <a href="https://yair.ganausi.com" target="_blank">https://yair.ganausi.com</a>
        <p>
          <br />
          <br />
        </p>
      </div>
    ),
  });
  projects.set("GroupTaskSync", {
    projectName: "Group Task Sync",
    about: "App to synchronize task list.",
    githubLink:"https://github.com/ARosyidG/Java.net-GroupTaskSync",
    desc: (
      <div>
        <h1>
          Just random project to learn java.net
          <Image className="px-4 py-1" src="/Project/JN.png" alt="JN" width={1000} height={100}></Image>
        </h1>
      </div>
    ),
  });
  projects.set("ship", {
    projectName: "Project Ship",
    about: "Coming soon-game i made with my friend",
    desc: (
      <div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque
          error accusantium aliquid illo quas ad, illum rem dolor id sed
          consequuntur voluptatibus officiis, voluptatem voluptate qui. Minus,
          molestias fugiat.
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          magnam pariatur minus cupiditate eos autem modi consequatur eius tenetur
          quis eveniet omnis laudantium enim voluptatem inventore id ipsa,
          quibusdam nam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro
          saepe, dolore tenetur laudantium dolorem doloremque, aliquam rerum atque
          rem adipisci eos illum iure corporis, magni est unde similique facilis?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
          consectetur asperiores commodi at odit corrupti? Quos exercitationem
          atque corporis quis, mollitia vel, blanditiis et facilis architecto
          officiis sed vitae ratione.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio itaque
          dolore illum, magni voluptates, nesciunt distinctio, saepe deleniti hic
          beatae a iure ratione incidunt similique? Eligendi ipsum exercitationem
          ex accusantium!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          dolorem ut fugiat tenetur aperiam libero mollitia corrupti. Tempora nemo
          veniam non quo quibusdam minima! Quis explicabo tenetur quaerat odit
          eligendi.
        </p>
      </div>
    ),
  });
  projects.set("LearningAnatomyV2", {
    projectName: "Learning Anatomy V2",
    about: "Coming Soon",
    desc: (
      <div>
        <h1>
          I Can&apos;t Reveal it Now because of legal reason.
        </h1>
      </div>
    ),
  });