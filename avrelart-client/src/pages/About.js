import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="pictures-and-quotes">
        <div className="picture-quote">
          <img src="about1.jpg" alt="Artist Picture 1" className="artist-picture" />
          <blockquote>
            Painting the world from the lavender fields of Provence, France and beyond...
          </blockquote>
        </div>
        <div className="picture-quote">
          <img src="about2.jpg" alt="Artist Picture 2" className="artist-picture" />
          <blockquote>
            ...to Avrel Art Studios in New York and Florida!
          </blockquote>
        </div>
      </section>
      <section className="artist-statement">
        <h2>Artist's Statement</h2>
        <p>
          Fueled by my exuberance for life and passion for painting, my art is a reflection of my personal life's journey and my honest reaction to the world around me.  I strive to create pieces that invite the viewer to take the journey with me.
        </p>
        <p>
          Primarily an impressionistic and abstract painter,  I love using both acrylic and oil paint, as well as mixed media on canvas and cradle wood panels.  I joyfully paint intuitively, basking in color, shape, texture, movement, brushstrokes and mark-making! Striving for versatility, I also enjoy creating narrative pieces in bold realism through expression of face and human form, often also incorporating my calligraphy as an art form. "Behind Closed Doors" is a series of paintings based on unusual doors from all over the world, an added direction in my art that focuses on assemblages.  I've also transformed my imagination into soulful paintings in my "Unprecedented Times" series, commentaries based on events over the past couple of years.
        </p>
        <p>
          I am gloriously grateful and appreciative that my intuitive feelings and animated style allow me to express my lifes experiences and many adventures through my art!
        </p>
      </section>
      <section className="artist-bio">
        <h2>Bio</h2>
        <p>
          Avrel Menkes developed an affinity and love for drawing and painting at a very young age. At 3 years old she greeted visitors to her home with, “Sit down. I draw you.” At 11 she was taught privately by renowned artist and Boston Museum School college professor, Sol Levenson, whom she credits as first inspiring her to paint landscapes through an artist's eye.
        </p>
        <p>
          Avrel obtained a BFA from the Hartford Art School of the University of Hartford on a full 4 year scholarship. In addition to a MA in painting, she studied post grad at the Santa Reparata International School of Art, Florence, Italy.  During her career, and representing New York, she was chosen by Robert Rauschenberg to study under him at the Lab School in Washington, DC.
        </p>
        <p>
          Avrel's many lifetime national awards and accolades include Disney Teacher of the Year, USA Today Teacher of the Year, and a Fulbright Scholarship presented jointly by the United States and Japanese governments. As a product of the Fulbright, the murals she created, in collaboration with an artist in Japan, are on display in The Presidential Library of The White House and Japanese Embassy in New York City.
        </p>
        <p>
          Painting full time in her studios in New York and Florida, after retiring from a 25 year art teaching career in Jericho New York Public Schools, Avrel is happily sharing and selling her art through continual museum and gallery exhibitions. Her paintings, mixed media art, photographs, and assemblages  are also featured in national and international art publications, as well as private collections in the United States, Japan, Italy and Canada.
        </p>
      </section>
    </div>
  );
};

export default About;
