import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top top",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power1.inOut",
    });
  });
  return (
    <section id="highlights">
      <h1>There's never been a better time to upgrade</h1>
      <h2>Here's what you get with new Macbook Pro</h2>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="laptop" />

            <p>Fly through demanding tasks up to 9.8x faster.</p>
          </div>
          <div>
            <img src="/sun.png" alt="laptop" />

            <p>
              A stunning <br /> Liquid Retina XDR <br /> display.
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI" />

            <p>
              Built for <span>Apple Intelligence</span>.
            </p>
          </div>
          <div>
            <img src="/battery.png" alt="Battery" />

            <p>
              Up to <span className="green-gradient">14 more hours</span>{" "}
              battery life. (Up to 24 hours total)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
