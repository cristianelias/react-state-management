import TodoControls from "../components/TodoControls";
import Parent from "../components/Parent";
import MainContainer from "../components/styled/MainContainer";
import Counter from "../components/Counter";
import CounterContainer from "../components/styled/CounterContainer";
import Button from "../components/styled/Button";
import CounterValue from "../components/styled/CounterValue";
import useCounter from "../components/hooks/useCounter";

const Home = () => {
  return (
    <MainContainer>
      <Parent id={"🐈"}>
        <Parent id={"🦄"}>
          <Parent id={"🦊"}></Parent>
          <Parent id={"🐥"}>
            <Parent id={"🐰"}></Parent>
            <Parent id={"🐶"}></Parent>
            <Parent id={"🐝"}>
              <Counter />
            </Parent>
          </Parent>

          <Parent id={"🐦"}>
            <TodoControls />
            <Parent id={"🐢"}></Parent>
          </Parent>
        </Parent>
      </Parent>
    </MainContainer>
  );
};

export default Home;
