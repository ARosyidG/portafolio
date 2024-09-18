import Image from "next/image";


function Detail(){
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni soluta architecto cumque atque. Voluptate esse quos eligendi asperiores odio mollitia quis cupiditate ducimus illo, adipisci labore assumenda unde quasi cumque.
    </div>
  );
}
function Lists(){
  return(
    <div>

    </div>
  );
}

function MainCard(){
  return(
    <div className="
        flex flex-col
        bg-slate-800
        shadow-md
        px-4
        sm:px-6
        md:px-8
        lg:px-10
        py-8
        rounded-3xl
        w-full
    ">
      <div className="grid invisible md:grid-cols-[70%_30%] gap-2 md:visible">
        <div className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt consequuntur quisquam molestiae ullam omnis dicta minima quae doloribus nam inventore, officia voluptatibus corporis, numquam sapiente aliquid eos saepe rerum maiores!</div>
        <div className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quidem consectetur accusamus blanditiis, explicabo quas. Neque qui, quas cupiditate fugit blanditiis et vitae, possimus eveniet quia distinctio odit rerum doloribus.</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-white bg-slate-900 px-6">
      <MainCard></MainCard>
    </main>
  );
}
