import styled from "styled-components";
import Comment from "../components/Comment";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const CommentPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Button txt="게시글 작성하기" onBtnClick={() => navigate("/write")} />
      <CommentWrapper>
        <Comment />
      </CommentWrapper>
    </Wrapper>
  );
};

export default CommentPage;

const Wrapper = styled.div`
  margin-top: 1.25rem;
`;
const CommentWrapper = styled.div`
  margin-top: 3.125rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;
