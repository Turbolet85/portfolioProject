import aboutImg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className={'bg-white py-20'} id="about">
      <div className={'align-element grid items-center gap-16 md:grid-cols-2'}>
        <img src={aboutImg} alt="about" className={'h-64 w-full'} />
        <article>
          <SectionTitle text={'code and coffee'} />
          <p className={'mt-8 leading-loose text-slate-600'}>
            My name is Anton Soldatov, i am switching to a new field and studying
            programming for web development. I started with the essentials of web layout
            using HTML, CSS, and continued with JavaScript for creating web content. At
            the moment, I am learning how to build front-end interfaces with React and
            develop back-end systems using Node.js and TypeScript. I am focused on this
            new direction and actively seeking opportunities in the field.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
