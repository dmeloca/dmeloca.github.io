/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Bookshelf Management",
    description:
      "Bookshelf Manager is a simple Python script to manage your PDF book collection. It organizes books based on metadata embedded in the file names and allows you to search, list, and open books directly from the command line.",
    url: "https://github.com/dmeloca/library",
  },
  {
    title: "Takemaru",
    description:
      "This code is an 'approximation' of a stenographer based on the python programming language, it has a cesar-mode cipher, and a tool to hide (and extract) messages in an image.",
    url: "https://github.com/dmeloca/Takemaru",
  },
  {
    title: "Yet another todo list",
    description: "This is a simple command-line to-do list application written in Python.",
    url: "https://github.com/dmeloca/to-do_list",
  },
  {
    title: "Investigation",
    description:
      "This repository serves as a unique platform dedicated to hosting investigations into topics relevant to the classes I've undertaken in my degree program. If you're interested in exploring these subjects further, feel free to peruse the content. Feedback is greatly appreciated as it helps me enhance my skills.",
    url: "https://dmeloca.github.io/Investigation",
  },
];

import image from "/src/images/black.png";

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{}}>
      <img className="background" src={image} alt="" />
      <h2 style={{ textAlign: "center", color: "white" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px", color: "white" }}>{project.title}</h3>
              </a>
              <p className="small" style={{ color: "white" }}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
