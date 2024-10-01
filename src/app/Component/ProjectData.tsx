export interface IProjectList {
    pojectName: string;
    about: string;
    desc: React.ReactNode;
  }
  // let activeProject:IProjectList;
  export let projects = new Map<string, IProjectList>();
  projects.set("projectOne", {
    pojectName: "Project One",
    about: "This Project Is for Exam",
    desc: (
      <div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quasi numquam illum ipsa optio repellat soluta, voluptates excepturi
          sunt ratione quas, delectus praesentium reiciendis possimus placeat.
          Molestias at accusamus voluptate.
        </h1>
      </div>
    ),
  });
  projects.set("projectTwo", {
    pojectName: "Project Two",
    about: "This Project Is For My Final Project",
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
  projects.set("projectThree", {
    pojectName: "Project three",
    about: "This Project Is For This Web",
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
  projects.set("projectFour", {
    pojectName: "Project Four",
    about: "This Project Is For This Testing",
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
  projects.set("projectFive", {
    pojectName: "Project Five",
    about: "This Project Is For This Testing 2",
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