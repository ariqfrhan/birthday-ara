import React from "react";
import Paper from "./components/Paper";

const PaperContainer: React.FC = () => {
  return (
    <div className={"container"}>
      <Paper className={"image font-sans font-semibold text-center text-black"}>
        <img src="/ara7.jpeg" className="w-64" alt="Love" />
        <p>
          Mang boleh bucin didepan <br /> para maba?
        </p>
      </Paper>

      <Paper className={"image font-sans font-semibold text-center text-black"}>
        <img src="/ara8.jpeg" className="w-64" alt="Cute" />
        <p>Gas gallery date lagi?</p>
      </Paper>

      <Paper className={"image font-sans font-semibold text-center text-black"}>
        <p>How can be</p>
        <p>someone so cute ❤️</p>
        <img src="/ara5.jpeg" className="h-64" alt="Cute" />
      </Paper>

      <Paper className={"image text-black"}>
        <p className="p1">My Favorite</p>
        <p className="p2">Person 😍</p>
        <img src="/ara10.jpeg" className="h-64" alt="Cute" />
      </Paper>

      <Paper>
        <p className="p1 text-black">Geser pake mouse yaa</p>
      </Paper>
    </div>
  );
};

export default PaperContainer;
