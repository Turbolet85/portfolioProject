import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

import heroImg from '../assets/hero.svg';

const Hero = () => {
  return (
    <div className={'bg-emerald-100 py-24'}>
      <div className={'align-element grid items-center gap-8 md:grid-cols-2'}>
        <article>
          <h1 className={'text-7xl font-bold tracking-wider'}>I&apos;m Anton</h1>
          <p className={'mt-4 text-3xl capitalize tracking-wide text-slate-700'}>
            Front-End Developer
          </p>
          <p className={'mt-2 text-lg capitalize tracking-wide text-slate-700'}>
            turning ideas to interactive realities
          </p>
          <div className={'mt-4 flex gap-x-4'}>
            <a href="https://github.com/Turbolet85">
              <FaGithubSquare
                className={'h-8 w-8 text-slate-600 duration-300 hover:text-black'}
              />
            </a>{' '}
            <a href="https://www.linkedin.com/in/soldatov85/">
              <FaLinkedin
                className={'h-8 w-8 text-slate-600 duration-300 hover:text-black'}
              />
            </a>{' '}
            <a href="https://twitter.com/Turbolet">
              <FaTwitterSquare
                className={'h-8 w-8 text-slate-600 duration-300 hover:text-black'}
              />
            </a>
          </div>
        </article>
        <article className={'hidden md:block'}>
          <img src={heroImg} alt="hero" className={'h-80 lg:h-96 lg:h-auto lg:w-auto'} />
        </article>
      </div>
    </div>
  );
};

export default Hero;
