import logoImage from './assets/react-core-concepts.png';
import componentImage from './assets/components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function Courses(props){
  return (
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>

    </li>
  );
}

function Header() {

  const description=reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={logoImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Make Your Craft</h2>
          <ul>
            <Courses image={componentImage} 
            title="React" 
            description="A course for Frontend" price="10000"/>

            <Courses image={componentImage} 
            title="Node.js" 
            description="A course for Backend" price="15000"/>

            <Courses image={componentImage} 
            title="Python" 
            description="A course for Data Science" price="20000"/>
          </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;
