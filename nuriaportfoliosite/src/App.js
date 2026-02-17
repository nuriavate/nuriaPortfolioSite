import { Route, Router, Routes } from "react-router-dom";
import Grid12 from "./components/grid12";
import Header from "./components/header";
import Hero from "./components/hero";
import ProjectList from "./components/projectList";

/*
function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cv" element={<Cv />} />
      <Route path="uxuidesign" element={<UxUidesign />} />
      <Route path="videogamesxr" element={<VideogamesXR />} />
      <Route path="other" element={<Other />} />
      <Route path="/detail/:id" element={<DetailScreen />} />
    </Routes>
  )
}*/

function App() {
  return (
   /* <Router>*/
      <div>
        <Hero></Hero>
        <ProjectList></ProjectList>
          <div className="w-full h-full bg-black flex items-center justify-center">
        
     
        <Grid12>
          <h1 className="text-6xl font-extrabold text-red-500 underline">      TAILWIND FUNCIONA
          </h1>
        </Grid12>
      </div>
      </div>
    
  /*  </Router>*/

  );
}

export default App;
