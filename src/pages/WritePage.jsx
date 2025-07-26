import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const baseURL = import.meta.env.VITE_API_BASE_URL;

const WritePage = () => {
  const navigate = useNavigate();
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const postComment = () => {
    axios
      .post(`${baseURL}/entries/`, {
        author: author,
        comment: comment,
      })
      .then((response) => {
        console.log(response);
        alert("게시글 작성이 완료되었습니다.");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("게시글 작성에 실패했습니다.");
      });
  };

  return (
    <Wrapper>
      <FormGroup>
        <InputLabel>이름</InputLabel>
        <StyledInput
          placeholder="이름을 입력해주세요."
          value={author}
          onChange={onChangeAuthor}
        />
      </FormGroup>
      <FormGroup>
        <InputLabel>내용</InputLabel>
        <StyledTxtarea
          placeholder="게시글 내용을 입력해주세요."
          value={comment}
          onChange={onChangeComment}
        />
      </FormGroup>
      <BtnWrapper>
        <Button txt={"작성하기"} onBtnClick={postComment} />
      </BtnWrapper>
    </Wrapper>
  );
};

export default WritePage;

const Wrapper = styled.div`
  margin-top: 3.125rem;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const InputLabel = styled.div`
  color: var(--text-black);
  font-size: 1.875rem;
  font-weight: 700;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: white;
  padding: 0.625rem 1.875rem;
  border-radius: 0.9375rem;
  width: 18.75rem;
  height: 3.125rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-black);
  &::placeholder {
    color: #acacac;
    font-weight: 700;
  }
`;

const StyledTxtarea = styled.textarea`
  border: none;
  outline: none;
  width: 100%;
  height: 12.5rem;
  background-color: white;
  padding: 1.875rem;
  border-radius: 0.9375rem;
  font-size: 1.125rem;
  font-weight: 700;
  resize: none;
  color: var(--text-black);
  &::placeholder {
    color: #acacac;
    font-weight: 700;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
