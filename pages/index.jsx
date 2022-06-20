import styled from "@emotion/styled";
import TodoControls from "../components/TodoControls";
import Parent from "../components/Parent";

const App = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 32px;
`;

const Home = () => {
  return (
    <App>
      <Parent id={"App"}>
        <TodoControls />
        <Parent id={1}>
          <Parent id={2}>
            <Parent id={"A"}></Parent>
            <Parent id={"B"}></Parent>
            <Parent id={"C"}>
              <Parent id={"a"}></Parent>
            </Parent>
          </Parent>
          <Parent id={3}>
            <Parent id={"A"}></Parent>
          </Parent>
        </Parent>
      </Parent>
    </App>
  );
};

export default Home;
