import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

function App() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title onClick={() => navigate("/")}>승채 사자의 TMI 게시판 🦁</Title>
      <Outlet />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 5rem 6.25rem;
  width: 100%;
  min-height: 100dvh;
  background-color: var(--bg-grey);
`;

const Title = styled.div`
  color: var(--text-black);
  font-size: 3.125rem;
  font-weight: bolder;
  cursor: pointer;
`;
