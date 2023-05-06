import Msg from "./Msg";

const Person = ({ name, image, phoneNo }) => {
  return (
    <>
      <img src={image} alt={"photo of " + name} />
      <Msg name={name} />
      <p>
        {name}'s number: {phoneNo}
      </p>
      <br />
    </>
  );
};

export default Person;
