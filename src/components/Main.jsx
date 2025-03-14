import avatar from "../assets/images/banner.jpg"
const Main = ()=> {

  return (
    <main>
     <div className="project">
      <h1>Bonjour je suis JOHN DOE</h1>
      <h2>Développeur web full stack</h2>
      <article>
        <img className="feature" src="banner" alt="ordinateur" />
      </article>
     </div>
   <div className="left">
    <section className="about">
      <hr />
      <article>
        <h2>à propos de moi</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur explicabo facilis accusamus velit quidem laboriosam labore autem eaque distinctio, blanditiis iure
           excepturi laborum nostrum ad deleniti ullam cumque, sapiente unde?
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Rem saepe cumque sunt doloremque autem quidem eius laudantium? 
           Eaque possimus perferendis cumque consequuntur, quas voluptatibus perspiciatis, maiores suscipit, laboriosam cum modi?
           </p>
      </article>
    </section>
   </div>
   <div className="skills section">
    <h2>Compétences</h2>
    <hr />
    <div className="skills-list">
      <div className="skills-item">
      <span>HTML</span>
        <div className="full">
          <div className="percent-first"></div> 
          <div className="skills-item">
           <span>CSS</span>
        <div className="full">
          <div className="percent-first"></div> 
        </div>
        <div className="skills-item">
           <span>CSS</span>
        <div className="full">
          <div className="percent-first"></div> 
        </div>
        </div>
        <div className="skills-item">
           <span>CSS</span>
        <div className="full">
          <div className="percent-first"></div> 
        </div>
        </div>
        <div className="skills-item">
           <span>CSS</span>
        <div className="full">
          <div className="percent-first"></div> 
        </div>
        </div>
        </div>
      </div>
   
    </div>
   </div>
   </div>
   </main>
  )
}
export default Main 