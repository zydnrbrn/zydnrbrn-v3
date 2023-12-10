import { imageConfig } from "@/config/image";
import { skillIcon } from "@/config/icons";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center pt-[200px] pb-[300px]">
        <div className="ring-inset ring-black dark:ring-graymac dark:bg-graymac/50 bg-graymac ring-4 rounded-full w-[300px] h-[300px] flex justify-center items-center">
          <Image loading="eager" className="w-[200px] h-[250px]" src={imageConfig.smile} alt="Haloooo" />
        </div>
        <div className="welcome-greet py-5 text-center">
          <h1 className={'text-current pb-4 font-bold text-[40px]'}>Zidan Khulul Sajid</h1>
          <div className="text-lg">
            <p>Software Developer based on Bandung, Indonesia.</p>
            <p>Specializing on building website, backend development, and everything in beetwen.</p>
          </div>
        </div>
        <Button radius="full" className="text-lg mt-5 bg-gradient-to-b from-black to-graymac text-white shadow-lg">Get in touch</Button>
      </div>
      <div className="skilset flex md:flex-row flex-col rounded-[20px] my-[95px] w-full">
        <div className="p-4 text-lg justify-center items-center md:w-1/2">
          <h1 className="text-current pb-4 font-bold text-[30px] flex-grow">Aboutttt ...</h1>
          <Divider className="text-black mb-5" />
          <p className="text-current">Halo, Im Zidan Khulul Sajid, Software Developer from Bandung, Indonesia. I&#39;ve been in the world of software development for more than 2 years, My goal is create good, maintainable, and user-friendly software too.</p>
          <p className="text-current">I&#39;m familiar to working with a tech stack:</p>
          <div className="stack pt-5 flex flex-wrap gap-4">
            {skillIcon.map((icon) => (
              <Chip
                key={icon.label}
                startContent={<Image src={icon.icon} alt={icon.label} width={20} height={20} />}
                className="bg-black text-white dark:bg-white dark:text-black"
              >
                {icon.label}
              </Chip>
            ))}
          </div>
        </div>
        <Image className="py-10 justify-center items-center" src={imageConfig.greet} alt="Greeeettt" />
      </div>
      <div className="project flex md:flex-row flex-col rounded-[20px] my-[95px] w-full">
        <div className="p-4 text-lg justify-center items-center md:w-1/2">
          <h1 className="text-current pb-4 font-bold text-[30px] flex-grow">
            Some Projects I&#39;v build ...
          </h1>
          <Divider className="text-black mb-5" />
          <p className="text-current">Halo, Im Zidan Khulul Sajid, Software Developer from Bandung, Indonesia. I&#39;ve been in the world of software development for more than 2 years, My goal is create good, maintainable, and user-friendly software too.</p>
          <p className="text-current">I&#39;m familiar to working with a tech stack:</p>
          <div className="stack pt-5 flex flex-wrap gap-4">
            {skillIcon.map((icon) => (
              <Chip
                key={icon.label}
                startContent={<Image src={icon.icon} alt={icon.label} width={20} height={20} />}
                className="bg-black text-white dark:bg-white dark:text-black"
              >
                {icon.label}
              </Chip>
            ))}
          </div>
        </div>
        <Image className="py-10 justify-center items-center" src={imageConfig.greet} alt="Greeeettt" />
      </div>
    </>
  );
}