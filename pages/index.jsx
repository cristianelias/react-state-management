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
      <Parent id={"🐈"}>
        <Parent id={"🦄"}>
          <Parent id={"🦊"}>
            <Parent id={"🐸"}></Parent>
            <Parent id={"🐥"}></Parent>
            <Parent id={"🐝"}></Parent>
          </Parent>

          <Parent id={"🐻"}>
            <Parent id={"🦁"}></Parent>
            <Parent id={"🐨"}>
              <Parent id={"🐰"}></Parent>
              <Parent id={"🐶"}></Parent>
              <Parent id={"🐷"}></Parent>
            </Parent>
          </Parent>

          <Parent id={"🐦"}>
            <TodoControls />
            <Parent id={"🐢"}></Parent>
            <Parent id={"🦆"}>
              <Parent id={"🐗"}></Parent>
              <Parent id={"🐒"}></Parent>
              <Parent id={"🐙"}></Parent>
            </Parent>
          </Parent>
        </Parent>
      </Parent>
    </App>
  );
};

export default Home;
