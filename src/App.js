import "./App.css";
import Jobs from "./Jobs";
import Title from "./Title";

const App = () => {
  return (
    <>
      <header>
        <Title />
      </header>
      <main className="wrapper">
        <div className="container-jobs">
          <Jobs
            className="jobsRed jobs"
            title="Fulltime Sales Associate - Sydney Boutique"
            contractType="CDI"
            country="Australie"
            city="Sydney"
          />
          <Jobs
            className="jobsBlue jobs"
            title="Agent de securite - Pantin"
            contractType="CDI"
            country="France"
            city="Pantin"
          />
          <Jobs
            className="jobsGreen jobs"
            title="Responsable d'atelier"
            contractType="CDD"
            country="France"
            city="Paris"
          />
          <Jobs
            className="jobsPurple jobs"
            title="Chef de Projets"
            contractType="CDD"
            country="France"
            city="Paris"
          />
          <Jobs
            className="jobsPink jobs"
            title="Developpeur React.js"
            contractType="CDI"
            country="France"
            city="Paris"
          />
          <Jobs
            className="jobsBrown jobs"
            title="Sales Associate Stockholm"
            contractType="CDI"
            country="Suede"
            city="Stockholm"
          />
          <Jobs
            className="jobsBlack jobs"
            title="Vendeur/se - Crans Montana"
            contractType="CDI"
            country="Suisse"
            city="Crans-Montana"
          />
          <Jobs
            className="jobsYellow jobs"
            title="CRM & DATA Quality Analyst"
            contractType="CDI"
            country="USA"
            city="New York"
          />
          <Jobs
            className="jobsGray jobs"
            title="Infirmier (H/F)"
            contractType="CDI"
            country="France"
            city="Pantin"
          />
        </div>
      </main>
      <footer>
        <p>Made at le Reacteur By Thiru - 2022</p>
      </footer>
    </>
  );
};

export default App;
