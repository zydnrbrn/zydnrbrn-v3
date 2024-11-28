import { imageConfig } from "@/config/image";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import Socials from "@/components/socials";
import { ListPosts } from "@/components/posts";
import ListProjects from "@/components/projects";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center pt-[200px] pb-[300px]">
        <div className="ring-inset ring-black dark:ring-graymac dark:bg-graymac/50 bg-graymac ring-4 rounded-full w-[300px] h-[300px] flex justify-center items-center">
          <Image
            loading="eager"
            className="w-[200px] h-[250px]"
            src={imageConfig.smile}
            alt="Haloooo"
          />
        </div>
        <div className="welcome-greet py-5 text-center">
          <h1 className={"text-current pb-4 font-bold text-[40px]"}>
            Zidan Khulul Sajid
          </h1>
          <div className="text-lg font-light">
            <p>
              Is a <b>Self-Taugh Software Engineer</b>, Familiar with
              <b>Typescript, Rust and PHP</b>. <br /> Also Familiar with the{" "}
              <b>Laravel and Next.js Framework</b>.
            </p>
          </div>
        </div>
        <Socials />
      </div>
      <div className="skilset flex flex-col rounded-[20px] my-[95px] w-full">
        <h1 className="text-current pb-4 font-bold text-[30px] flex-grow">
          My Projects
        </h1>
        <Divider className="text-black mb-5" />
        <ListProjects />
      </div>
      <div className="skilset flex flex-col rounded-[20px] my-[95px] w-full">
        <h1 className="text-current pb-4 font-bold text-[30px] flex-grow">
          Recent Post
        </h1>
        <Divider className="text-black mb-5" />
        <ListPosts />
      </div>
    </>
  );
}
