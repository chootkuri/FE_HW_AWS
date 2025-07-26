import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const baseURL = import.meta.env.VITE_API_BASE_URL;

const EditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const getDetail = (id) => {
    axios
      .get(`${baseURL}/entries/${id}/`)
      .then((response) => {
        console.log(response);
        setAuthor(response.data.author);
        setComment(response.data.comment);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDetail(id);
  }, [id]);

  const editComment = () => {
    axios
      .put(`${baseURL}/entries/${id}/`, {
        author: author,
        comment: comment,
      })
      .then((response) => {
        console.log(response);
        alert("게시글 수정 완료!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("게시글 수정 실패!");
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
        <Button txt="수정하기" onBtnClick={editComment} />
      </BtnWrapper>
    </Wrapper>
  );
};

export default EditPage;

const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputLabel = styled.div`
  color: var(--text-black);
  font-size: 30px;
  font-weight: 700;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: white;
  padding: 10px 30px;
  border-radius: 15px;
  width: 300px;
  height: 50px;
  font-size: 18px;
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
  height: 200px;
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  font-size: 18px;
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
