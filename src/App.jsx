import React from "react";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  CustomerReviews,
  Subscribe,
  SpecialOffers,
  Footer,
} from "./Sections/index";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <main className="relative">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b overflow-hidden">
          <Hero />
        </section>
        <section className="padding overflow-hidden">
          <PopularProducts />
        </section>
        <section className="padding overflow-hidden">
          <SuperQuality />
        </section>
        <section className="padding-x py-10 overflow-hidden">
          <Services />
        </section>
        <section className="padding overflow-hidden">
          <SpecialOffers />
        </section>
        <section className="padding bg-pale-blue overflow-hidden">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full overflow-hidden">
          <Subscribe />
        </section>
        <section className="padding-x padding-t bg-black pb-8 overflow-hidden">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
