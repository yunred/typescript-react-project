import styled from 'styled-components';

export const PostComponentDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: white;

  .post_hr {
    margin: 0 auto;
    border: 0;
    height: 1px;
    background-color: #f5f5f5;
  }
`;

export const PostInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .post_category {
    color: gray;
    font-size: 12px;
  }
  .user_name {
    font-weight: 700;
  }
`;
export const PostText = styled.div`
  word-wrap: break-word;
  margin: 14px 0px;
`;
export const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
type activeType = {
  active: boolean;
};
export const BookMarkBtn = styled.button<activeType>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover {
    color: #969696;
  }
  :active {
    color: black;
  }
  color: ${props => {
    if (props.active) {
      return 'black';
    } else {
      return 'rgb(212,212,212)';
    }
  }};
`;

export const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  color: rgb(212, 212, 212);
  cursor: pointer;
  :hover {
    color: #969696;
  }
`;
