import React from "react";
import ReactIcon from "../assets/techImages/react.png";
import AWSIcon from "../assets/techImages/aws.png";
import ExpressIcon from "../assets/techImages/express.png";
import FirebaseIcon from "../assets/techImages/firebase.png";
import MongoIcon from "../assets/techImages/mongoDB.png";
import MysqlIcon from "../assets/techImages/mysql.png";
import NextIcon from "../assets/techImages/next.png";
import NodeIcon from "../assets/techImages/node.png";
import PassportIcon from "../assets/techImages/passport.png";
import PostgresIcon from "../assets/techImages/postgres.png";
import TypeScriptIcon from "../assets/techImages/typeScript.png";

const Techs = () => {
  const techs = [
    { src: TypeScriptIcon, name: "TypeScript" },
    { src: ReactIcon, name: "React" },
    { src: ExpressIcon, name: "Express" },
    { src: MongoIcon, name: "MongoDB" },
    { src: NextIcon, name: "Next.js" },
    { src: NodeIcon, name: "Node.js" },
    { src: MysqlIcon, name: "MySQL" },
    { src: FirebaseIcon, name: "Firebase" },
    { src: PostgresIcon, name: "PostgreSQL" },
    { src: AWSIcon, name: "AWS" },
    { src: PassportIcon, name: "Passport" },
  ];

  return (
    <div className="py-10 px-4">
      <div className="font-bold text-5xl text-center text-blue-700 mb-6">
        Tech Stack
      </div>
      <div className="text-center font-semibold text-xl text-gray-700 my-10">
        We provide a customized suite of solutions to precisely meet your
        business objectives.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center ">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className=" w-40 flex flex-col items-center justify-center p-6 border border-gray-300 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl "
          >
            <img src={tech.src} alt={tech.name} className="w-auto h-16 mb-3" />
            <div className="font-semibold text-blue-600">{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techs;
