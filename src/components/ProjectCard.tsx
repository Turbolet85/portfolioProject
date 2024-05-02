import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

interface IProjectCardProps {
  id: string;
  img: string;
  url: string;
  github: string;
  title: string;
  text: string;
}

const ProjectCard = ({ url, github, img, text, title }: IProjectCardProps) => {
  return (
    <article className={'rounded-lg bg-white shadow-md duration-300 hover:shadow-xl'}>
      <img className={'h-64 w-full rounded-t-lg object-cover'} src={img} alt={title} />
      <div className={'p-8 capitalize'}>
        <h2 className={'mt-1 text-xl font-medium tracking-wide'}>{title}</h2>
        <p className={'mt-4 leading-loose text-slate-700'}>{text}</p>
        <div className={'mt-3 flex gap-x-4'}>
          <a href={url}>
            <TbWorldWww
              className={'h-8 w-8 text-slate-500 duration-300 hover:text-black'}
            />
          </a>
          <a href={github}>
            <FaGithubSquare
              className={'h-8 w-8 text-slate-500 duration-300 hover:text-black'}
            />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
