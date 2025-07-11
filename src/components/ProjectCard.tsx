import '../styles/ProjectCard.css'
interface ProjectCardProps {
    projectName: string
    projectUrl: string
    projectDescription: string
    tags: string[]
    projectIcon: string
}
export default function ProjectCard({ projectName, projectUrl, projectDescription, projectIcon, tags }: ProjectCardProps) {
    return (
        <div className="project-card">
            <div className="project-image">{projectIcon}</div>
            <div className="project-content">
                <h3 className="project-title">
                    <a
                        href={projectUrl}
                        target="_blank"
                    >
                        {projectName + " 🔗"}
                    </a>
                </h3>
                <p className="project-desc">
                    {projectDescription}
                </p>
                <div className="project-tags">
                    {tags.map(tag => (
                        <span className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}