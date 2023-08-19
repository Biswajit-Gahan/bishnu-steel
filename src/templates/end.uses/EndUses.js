import React from "react";
import { EndUsesContainer } from "./end.uses.styles";
import localdb from "../../utils/localdb";
import PageTitle from "../../components/page.title/PageTitle";
import Gallery from "../../components/gallery/Gallery";
import MessageBox from "../../components/message.box/MessageBox";

const EndUses = () => {
  return (
    <EndUsesContainer>
      {/* ABOUT SECTION */}
      <section className="about-section">
        <PageTitle pageName="End Uses of Stainless Steels" />
      </section>

      {/* GALLERY OF WINDOW SECTION */}
      <section className="gallery-of-windows-section gallery-sections">
        <Gallery title="Windows" images={localdb.endUses.windows} />
      </section>

      {/* GALLERY OF DOORS SECTION */}
      <section className="gallery-of-doors-section gallery-sections">
        <Gallery title="Doors" images={localdb.endUses.doors} />
      </section>

      {/* GALLERY OF GATES SECTION */}
      <section className="gallery-of-gates-section gallery-sections">
        <Gallery title="Gates" images={localdb.endUses.gates} />
      </section>

      {/* GALLERY OF STAIRS SECTION */}
      <section className="gallery-of-stairs-section gallery-sections">
        <Gallery title="Railings" images={localdb.endUses.stairs} />
      </section>

      {/* GALLERY OF SWINGS SECTION */}
      <section className="gallery-of-swings-section gallery-sections">
        <Gallery title="Swings" images={localdb.endUses.swings} />
      </section>

      {/* GALLERY OF FURNITURES SECTION */}
      <section className="gallery-of-furnitures-section gallery-sections">
        <Gallery title="Furnitures" images={localdb.endUses.furnitures} />
      </section>

      {/* NEED HELP SECTION */}
      <section className="need-help-section">
        <MessageBox />
      </section>
    </EndUsesContainer>
  );
};

export default EndUses;