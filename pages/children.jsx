import MainContainer from "../components/styled/MainContainer";
import Kangaroo from "../components/children/Kangaroo";
import BabyKangaroo from "../components/children/BabyKangaroo";
import { useCallback, useState } from "react";
import useCounter from "../components/hooks/useCounter";
import CounterContainer from "../components/styled/CounterContainer";
import Button from "../components/styled/Button";
import CounterValue from "../components/styled/CounterValue";
import Container from "../components/styled/Container";
import RenderToast from "../components/RenderToast";

const Children = () => {
  const { counter, increaseCounter, decreaseCounter } = useCounter();
  const [babies, setBabies] = useState(["Lola", "Luna", "Lúlu"]);
  const [motherName, setMotherName] = useState("Lali");

  const adoptABaby = (newBabyName) => setBabies([...babies, newBabyName]);
  const changeName = (name) => setMotherName(name);

  return (
    <MainContainer>
      <RenderToast />
      <Container>
        <CounterContainer>
          <Button onClick={increaseCounter}>⬆️</Button>
          <CounterValue>{counter}</CounterValue>
          <Button onClick={decreaseCounter}>⬇️</Button>
        </CounterContainer>

        <Kangaroo
          adoptABaby={adoptABaby}
          name={motherName}
          changeName={changeName}
        >
          {babies.map((name) => (
            <BabyKangaroo key={name} name={name} />
          ))}
        </Kangaroo>
      </Container>
    </MainContainer>
  );
};

export default Children;
