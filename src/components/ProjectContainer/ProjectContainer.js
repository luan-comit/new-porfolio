import uniqid from 'uniqid'
import { Slideshow, Code } from '@material-ui/icons'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.videoDemo && (
      <a
        href={project.videoDemo}
        aria-label='video demo'
        className='link link--icon'
        target='blank'
      >
        <Slideshow />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
        target='blank'
      >
        <LaunchIcon />
      </a>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
        target='blank'
      >
        <Code />
      </a>
    )}
  </div>
)

export default ProjectContainer
