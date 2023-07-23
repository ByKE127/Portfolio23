import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Kevin Edwards",
          "a web developer",
          "a graphic designer",
          "a freelancer",      
        ]}
      />
    </h1>
  );
};
export default AnimationText;
