import Image from "next/image";
export interface IProjectList {
    pojectName: string;
    about: string;
    githubLink?: string;
    desc: React.ReactNode;
  }
  // let activeProject:IProjectList;
  export let projects = new Map<string, IProjectList>();
  projects.set("LearningAnatomy", {
    pojectName: "Learning Anatomy",
    about: "This is my final project in University",
    githubLink : "https://github.com/ARosyidG/Learning-Anatomy",
    desc: (
      <div>
        <p className="text-justify">
          This project aims to simulate skeletal anatomy learning at Mataram University. The application developed from this project is based on Virtual Reality.
        </p>
        <Image src="/Project/TA.png" alt="TA" width={1000} height={100}></Image>
        <p className="text-justify">
        All 3D assets in this project is created by me except The bone and VR Controller model. The bone model used in this project is the pelvic bone model obtained from Z-Anatomy. This highly detailed model provides an accurate representation of human anatomy, which is essential for effective learning. The application’s content features modified transformations of the bone model, allowing students to explore and observe the pelvic bone from all angles. This interactive experience enhances their understanding of the structure and function of the bone, making learning more engaging and immersive. Additionally, the application includes quizzes designed to assess students&apos; ability to recognize and identify different parts of the pelvic bone. These quizzes not only reinforce their knowledge but also provide immediate feedback, helping students track their progress and understanding of skeletal anatomy. Through this innovative approach, the application aims to improve the educational experience for students at Mataram University.
        </p>
        <p className="text-justify">
        In its development, I used the XRI Package provided by Unity. This package was utilized solely to obtain input from the Oculus Quest 2, and I did not use the Grab Interactable component that it offers. The limitations of this component hindered the realization of the design requested by the university. As a result, I recreated the functionalities for grabbing, rotating, and scaling to align with the university&apos;s desired design.
        </p>
      </div>
    ),
  });
  projects.set("LearningAnatomyV2", {
    pojectName: "Learning Anatomy V2",
    about: "Coming Soon",
    desc: (
      <div>
        <h1>
          I Can&apos;t Reveal it Now because of legal reason.
        </h1>
      </div>
    ),
  });
  projects.set("PanjatPinang", {
    pojectName: "Panjat Pinang",
    about: "Game to Celebrate Indonesian Independence Day",
    desc: (
      <div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque
          error accusantium aliquid illo quas ad, illum rem dolor id sed
          consequuntur voluptatibus officiis, voluptatem voluptate qui. Minus,
          molestias fugiat.
        </h1>
      </div>
    ),
  });
  projects.set("ship", {
    pojectName: "Project Ship",
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
  projects.set("GroupTaskSync", {
    pojectName: "Group Task Sync",
    about: "App to synchronize task list.",
    desc: (
      <div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque
          error accusantium aliquid illo quas ad, illum rem dolor id sed
          consequuntur voluptatibus officiis, voluptatem voluptate qui. Minus,
          molestias fugiat.
        </h1>
      </div>
    ),
  });
  projects.set("yair", {
    pojectName: "Yair",
    about: "Organization e-signature and e-letter app.",
    desc: (
      <div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque
          error accusantium aliquid illo quas ad, illum rem dolor id sed
          consequuntur voluptatibus officiis, voluptatem voluptate qui. Minus,
          molestias fugiat.
        </h1>
      </div>
    ),
  });