import type { Project } from "@/types"
import { Chip } from "@nextui-org/chip";
import Link from "next/link";

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="shadow-md rounded-lg p-6 m-2">
            <Link href={project.href}>
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            </Link>
            <p className="mb-2 font-light">{project.description}</p>
            <div className="flex gap-2">
                <Chip>{project.role}</Chip>
                <Chip >{project.years.join(', ')}</Chip>
            </div>
        </div>
    )
}

const ListProjects = () => {
    const projects: Project[] = [
        {
            title: 'Nectify',
            description: 'Simple realtime chat website implementation.',
            href: 'https://github.com/zydnrbrn/nectify',
            role: 'Creator',
            years: ['2022'],
        },
        {
            title: 'Village Administration App',
            description: 'Open Source Village (Desa) Management Apps for managing Resident, and Letters. This is monolith app React.js inside Laravel using Inertia.js.',
            href: 'https://github.com/zydnrbrn/administrasi-desa',
            role: 'Creator',
            years: ['2022'],
        },
        {
            title: 'Spring Microservices',
            description: 'Example implementation of Java Spring Boot Microservices with Apache Kafka.',
            href: 'https://github.com/zydnrbrn/spring-microservices',
            role: 'Creator',
            years: ['2022'],
        },
    ]

    return (
        <div className="py-2 flex flex-col gap-2">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    )
}

export default ListProjects;