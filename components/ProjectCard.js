import Image from "next/image";

export default function ProjectCard({ projectName = "Default Project Name", projectURL = "", projectImage = "", projectDateOfLaunch = "", projectStatus = "", children }) {
	return (
		<div className="project-card">
			<div className="project-card__image">
				<div className="image-container">
					<Image src={`/assets/projects/${projectImage}`} alt={`${projectName} logo`} width={100} height={100} />
				</div>
			</div>

			<h3 className="project-card__name">{projectName}</h3>
			<div className="project-card__description">{children}</div>
			<p className="project-card__date-of-launch">
				<strong>Date of launch:</strong> {projectDateOfLaunch}
			</p>
			<p className="project-card__status">
				<strong>Status:</strong> {projectStatus}
			</p>
			{projectURL ? (
				<a href={projectURL} target="_blank" rel="noreferrer" className="project-card__url">
					View {projectName}
				</a>
			) : (
				""
			)}
		</div>
	);
}
