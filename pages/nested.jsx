import Cat from "../components/animals/Cat";
import MainContainer from "../components/styled/MainContainer";

const Nested = () => {
  return (
    <MainContainer>
      <Cat />
    </MainContainer>
  );
};

export default Nested;
