import React from "react";
import SectionAbout from './SectionAbout';

const MainSection = () => {
  return (
    <main>
      <section className="section-about row">
        <SectionAbout />
        <SectionAbout />
        <SectionAbout />
      </section>
    </main>
  );
};

export default MainSection;
