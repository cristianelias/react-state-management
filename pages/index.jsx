import TodoControls from "../components/TodoControls";
import Parent from "../components/Parent";
import MainContainer from "../components/styled/MainContainer";
import Counter from "../components/Counter";

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
