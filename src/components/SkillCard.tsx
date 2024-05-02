import { ReactElement } from 'react';

interface ISkillCardProps {
  id: string;
  title: string;
  icon: ReactElement;
  text: string;
}

function SkillCard({ title, icon, text }: ISkillCardProps): ReactElement {
  return (
    <article>
      <span>{icon}</span>
      <h2 className={'mt-6 font-bold'}>{title}</h2>
      <p className={'mt-2 text-slate-500'}>{text}</p>
    </article>
  );
}

export default SkillCard;
