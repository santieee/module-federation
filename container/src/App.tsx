import React, {useState, Suspense} from 'react';
import { Sidebar } from "./components/Sidebar";
import sections from "./constants/sections";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";

interface IUserState {
  name: string;
  id: number | null;
}

function App() {
  const user: IUserState = {
    name: "SomeName",
    id: Math.floor(Math.random() * 100),
  }
  const [currentSection, setSection] = useState(sections[0]);
  return (
    <div className="container-app">
      <BrowserRouter>
        <Sidebar
          currentSection={currentSection}
          setSection={setSection}
        />
        <Switch>
          {sections.map(section => (
            <Route
              key={section.path}
              path={section.path}
            >
              <Suspense fallback={<div>Loading...</div>} >
                <section.component {...{
                  user
                }}/>
              </Suspense>
            </Route>
          ))}
          <Route>
            <Redirect to={sections[0].path} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
