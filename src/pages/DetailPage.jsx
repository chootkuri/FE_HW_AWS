import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const baseURL = import.meta.env.VITE_API_BASE_URL;

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  const deleteComment = () => {
    axios
      .delete(`${baseURL}/entries/${id}/`)
      .then((response) => {
        console.log(response);
        alert("게시글 삭제가 완료!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("게시글 삭제 실패!");
      });
  };

  const getDetail = (id) => {
    axios
      .get(`${baseURL}/entries/${id}/`)
      .then((response) => {
        console.log(response);
        setDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDetail(id);
  }, [id]);

  useEffect(() => {
    getDetail(id);
  }, [id]);

  return (
    <Wrapper>
      <Button txt="게시글 작성하기" onBtnClick={() => navigate("/write")} />
      <DetailWrapper>
        <Author>{detail.author}</Author>
        <Time>{detail.timestamp}</Time>
        <Comment>{detail.comment}</Comment>
        <BtnWrapper>
          <Button
            txt="수정"
            fontSize="1.875rem"
            onBtnClick={() => navigate(`/edit/${id}`)}
          />
          <Button txt="삭제" fontSize="1.875rem" onBtnClick={deleteComment} />
        </BtnWrapper>
      </DetailWrapper>
    </Wrapper>
  );
};

export default DetailPage;

const Wrapper = styled.div`
  margin-top: 1.25rem;
  color: var(--text-black);
`;

const DetailWrapper = styled.div`
  /* width: calc(100% - 12.5rem); */
  height: fit-content;
  background-color: white;
  border-radius: 1.25rem;
  padding: 6.25rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.15);
  margin-top: 3.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Author = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
`;

const Time = styled.div`
  color: var(--text-grey);
  font-weight: 600;
  font-size: 1.25rem;
`;

const Comment = styled.div`
  font-size: 1.875rem;
  font-weight: 700;
  margin: 3.125rem 0;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;
