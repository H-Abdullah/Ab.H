export interface ProjectsCardProps {
  description: string;
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const projectsCard: ProjectsCardProps[] = [
  {
    description: 'I built',
    title: 'Wedding Planner Center',
    image: {
      src: '/static/images/example-1.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I maintained',
    title: 'Local Dialects Library',
    image: {
      src: '/static/images/example-2.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I built',
    title: 'Snake Game for Adults',
    image: {
      src: '/static/images/example-3.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I maintained',
    title: 'this web-portfolio',
    image: {
      src: '/static/images/example-4.webp',
      width: 600,
      height: 770,
    },
  },
];