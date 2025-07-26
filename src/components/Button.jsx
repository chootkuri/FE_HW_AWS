import styled from "styled-components";

const Button = ({ txt, onBtnClick, fontSize }) => {
  return (
    <ButtonContainer onClick={onBtnClick} fontSize={fontSize}>
      {txt || "버튼"}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  padding: 0.9375rem 2.5rem;
  background-color: var(--text-black);
  border-radius: 1.875rem;
  border: none;
  color: white;
  font-weight: 700;
  /* cursor: pointer; */
  font-size: ${(props) => props.fontSize || "1.25rem"};
  &:hover {
    background-color: var(--main-orange);
  }
`;
