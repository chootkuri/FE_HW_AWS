import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const baseURL = import.meta.env.VITE_API_BASE_URL;

const Comment = () => {
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);

  const getComment = () => {
    axios
      .get(`${baseURL}/entries/`)
      .then((response) => {
        console.log(response);
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getComment();
  }, []);

  return (
    <>
      {comments.map((comment) => (
        <CommentContainer
          key={comment.id}
          onClick={() => navigate(`/comment/${comment.id}`)}
        >
          <MetaInfo>
            <Author>{comment.author}</Author>
            <Time>{comment.timestamp}</Time>
          </MetaInfo>
          <CommentTxt>{comment.comment}</CommentTxt>
        </CommentContainer>
      ))}
    </>
  );
};

export default Comment;

const CommentContainer = styled.div`
  min-width: 100%;
  min-height: 6.25rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.15);
  border-radius: 1.25rem;
  background-color: white;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  color: var(--text-black);
  &:hover {
    cursor: pointer;
    color: var(--main-orange);
    box-shadow: 0 0 0.625rem rgba(238, 110, 67, 0.727);
    background-color: #fef5f0;
    > span {
      color: #ffcca8;
    }
  }
`;

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
`;

const Author = styled.div`
  font-size: 1.5625rem;
  font-weight: 700;
`;
const Time = styled.span`
  font-size: 0.9375rem;
  color: var(--text-grey);
  font-weight: 600;
`;
const CommentTxt = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  overflow: hidden; /* 박스에서 넘쳐난 텍스트 숨기기 */
  white-space: nowrap; /* 줄바꿈이 없어짐 */
  text-overflow: ellipsis; /* 말줄임 효과 (...) */
  word-break: break-all; /* 어절이 유지되지 않고 끊어져서 줄바꿈 됨 */
`;
