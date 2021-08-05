import styles from './markdown-styles.module.css';

export default function SelfIntro() {
  return <section className={styles.markdown + " max-w-2xl pb-2 md:pb-0"}>
    <p>Hi There. My name is Yichen Wei.</p>
    <p>
      I am a junior in college pursuing a degree in computer science at {" "}
      <a href="https://tufts.edu">Tufts University</a>. 
      I am interested in computer science, front-end technologies, 
      cloud-computing technologies like serverless, and machine learning.
    </p>
    <p>
      I am now mostly focusing on front-end technologies.
      I work part-time at 
      {" "}<a href="https://duyundao.com">Duyun</a>, a Chinese startup 
      providing tax and startup consulting online. I built their website
      and an app that deals with tax reporting and displays finance info.
    </p>
    <p>
      I have been to many 
      {" "}<a href="https://devpost.com/waymao">hackathons</a>
      , and I love meeting new people and
      learning exciting technologies.
    </p>
    <p>
      I also care a lot about the society and the local community.
      I have been at Tuft's JumboCode club for two years, building
      apps for local non-profit organization 
      {" "}<a href="https://github.com/JumboCode/Documentary-Songwriters">Documentary Songwriters</a> and 
      {" "}<a href="https://github.com/JumboCode/MoreThanWords">MoreThanWords</a>.
    </p>
    <p>
      Outside of my work and study, I enjoy playing simulation video games like 
      {" "}<a href="https://www.minecraft.net/">Minecraft</a> and
      {" "}<a href="https://www.citiesskylines.com/">Cities Skylines</a>, 
      and rhythm games like 
      {" "}<a href="https://deemo.com/">Deemo</a> and 
      {" "}<a href="https://pjsekai.sega.jp/">Project Sekai</a>. I
      have a large boardgame collection.
      Other than this, I also enjoy 
      watching Anime, photography and traveling.
    </p>
    <p>
      I occationally write about thoughts on tech and on my life, where
      you can find under the 
      tech and life section.
    </p>
    <p>
      You can find my resume
      {" "}<a href="/assets/resume.pdf">here</a>.
    </p>

  </section>
}