import React from 'react';
import { NavLink } from "react-router-dom";
import sections, { ISection } from "../constants/sections";
import "./Sidebar.css";

interface IProps {
  currentSection: ISection,
  setSection: Function
};

export function Sidebar({setSection, currentSection}: IProps) {
  return (
  <div className="sidebar">
    <ul>
      {sections.map((section: ISection) => {
        return (
        <li key={section.path}>
          <NavLink
            to={section.path}
            activeClassName="active"
          >
            { section.name }
          </NavLink >
        </li>)
      })}
    </ul>
  </div>
  );
};