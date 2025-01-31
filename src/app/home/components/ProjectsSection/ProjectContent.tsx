import React from 'react'
import { ProjectsCardProps } from './projectsCard';
import { ProjectContainer } from './ProjectContainer';
import { ProjectLeft } from './ProjectLeft';
import { ProjectRight } from './ProjectRight';
import Image from 'next/image';

interface ProjectContentProps {
  project: ProjectsCardProps;
  progress?: number;
}

export const ProjectContent = ({ project, progress = 0 }: ProjectContentProps) => {

  const { title, description, image } = project;

  return (
    <ProjectContainer>
      <ProjectLeft progress={progress}>
        <div 
          className='text-background dark:text-background text-2xl font-medium md:text-3xl xl:text-4xl'
        >
          {description}
        </div>
        <span
          className='text-background dark:text-background text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl'
        >
          {title}
        </span>
      </ProjectLeft>
      <ProjectRight progress={progress}>
        <div
          className='drop-shadow-2xl sm:mt-10 md:mt-24'
        >
          <Image src={image.src} alt={title} width={image.width} height={image.height} />
        </div>
      </ProjectRight>
    </ProjectContainer>
  )
}
