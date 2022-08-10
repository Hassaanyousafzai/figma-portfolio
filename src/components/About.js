import React from "react";
import Footer from "./Footer";
// import NavBar from "./NavBar";

export default function About() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="container" style={{ textAlign: "left", padding: "80px" }}>
        <h1 style={{ paddingBottom: "30px" }}>About</h1>

        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          doloribus itaque ad magni. Quam iusto vitae, in similique ab
          perferendis voluptatibus perspiciatis facere iure consectetur cumque
          velit, blanditiis sit error.
        </p>

        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus
          atque ullam consequuntur quod incidunt exercitationem iste fugiat
          autem recusandae, saepe quas perferendis corrupti earum quaerat
          deleniti nobis laboriosam dolorum iusto sed unde velit commodi?
        </p>

        <p className="my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quasi
          consequatur aliquam laboriosam pariatur nisi eius esse similique cum
          beatae asperiores, ut maiores inventore accusamus rerum quos
          distinctio veritatis, officiis corrupti soluta. Autem fugit deserunt
          inventore. Numquam sunt atque a. Corporis dicta molestiae consequuntur
          dolorem, nihil sapiente recusandae? Sed alias nulla inventore quasi
          id. Ex iste nobis odit expedita error facere eos animi, hic, quaerat
          adipisci saepe nemo incidunt porro.
        </p>

        <p className="my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde iusto
          itaque eos eius. Non sed optio ipsa velit autem quae voluptate qui
          odio reprehenderit, provident doloremque assumenda sunt consequuntur
          quos deserunt suscipit eveniet. Exercitationem, aperiam mollitia
          officia impedit voluptatum laudantium!
        </p>

        <h4 style={{ marginTop: "60px", marginBottom: "30px" }}>Personal</h4>
        <p className="my-4">
          I have been a gamer my entire life, I play Fortnite, PUBG, COD
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          minus unde ex distinctio recusandae accusamus pariatur fugit quidem ea
          enim?
        </p>
        <p className="my-4">
          I play guitar and bass, I am learning to record my own songs
        </p>
        <p className="my-4">
          I collect video games and action figures, and love SciFi
        </p>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
