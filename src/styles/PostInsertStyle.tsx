import styled from 'styled-components';

export const PostInsertDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 30px;
  hr {
    margin: 0 auto;
    border: 0;
    height: 1px;
    background-color: #686868;
    margin-bottom: 14px;
  }
`;
export const PostBtnDiv = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
  .reset_btn {
    color: gray;
  }
  .submit_btn {
    padding-left: 6px;
    padding-right: 6px;
    :hover {
      background-color: #d4d4d4;
    }
  }
`;

export const SelectBox = styled.select`
  width: 100px;
  height: 32px;
  border: 0;
  outline: none;
`;
export const NameInputDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin-bottom: 10px;
`;

export const NameInput = styled.input`
  border: none;
  border-bottom: 1px solid #f3f3f3;
  height: 32px;
  background-color: #ffffff;
  outline: none;
`;

export const ContentInput = styled.textarea`
  border: 1px solid #f3f3f3;
  height: 50px;
  background-color: #ffffff;
  outline: none;
  width: 100%;
`;
