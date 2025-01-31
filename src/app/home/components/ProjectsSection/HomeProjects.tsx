import { CardBackground } from '@/components/cards/CardBackground'
import { CardWrapper } from '@/components/cards/CardWrapper'
import React from 'react'
import { ProjectBackground } from './ProjectBackground'
import { CardContent } from '@/components/cards/CardContent'
import { projectsCard } from './projectsCard'
import { Card } from '@/components/cards/Card'
import { ProjectContent } from './ProjectContent'

export const HomeProjects = () => {
  return (
    <CardWrapper numberOfPages={projectsCard.length}>
      <CardBackground>
        <ProjectBackground />
      </CardBackground>
      <CardContent>
        {projectsCard.map((project, i) => (
          <Card page={i} key={project.title}>
            <ProjectContent project={project} />
          </Card>
        ))}
      </CardContent>
    </CardWrapper>
  );
}