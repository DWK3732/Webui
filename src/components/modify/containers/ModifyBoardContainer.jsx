import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import modify from "/assets/images/modify.png";
import ModifySysModal from '@components/modify/ModifySysModal';


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 80px;
  font-size: 50px;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 30px;
`;

const SystemInfoBar = styled.div`
  box-sizing: border-box;
  border: 1px solid #DAE0E7;
  border-radius: 5px;
  width: 100%;
  background-color: #F3F6F9;
  text-align: left;
  padding: 10px 20px;
  font-size: 16px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

const Form = styled.form`
  display: grid;
  grid-gap: 0px;

  label {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  input {
    padding: 10px;
    width: 100%;
  }
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 0px;
  }
`;


const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  background-color: #ffffffa0;
  border: none;
  padding: 15px;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  position: relative;

  & + & {
    margin-left: 10px;
  }

  span {
    margin-bottom: 10px;
  }

  input {
    border: 1px solid #DAE0E7;
    border-radius: 5px;
    outline: none;
    font-size: 16px;
    padding: 10px 20px;
    width: 85%;
    margin-right: 10px;
    &::placeholder {
      color: #DAE0E7;
    }
    &:disabled {
      background-color: #DAE0E7;
      &::placeholder {
        color: #7B91A7;
      }
    }
  }

  input:last-child {
    margin-right: 0;
  }

  p {
    position: absolute;
    right: 20px;
    bottom: 0px;
    font-size: 12px;
    margin: 0;
  }


`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding: 10px 30px;

  .group-button {
    padding: 10px 30px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    width: 130px;
    height: 40px;

    &:first-child {
      background-color: #C7D0DD;
      color: white;
    }

    &:last-child {
      background-color: #003a75;
      color: white;
    }
  }
`;

const RequiredSpan = styled.span`
  &::after {
    content: " *";
    color: #007fff;
  }
`;

const ModifyBoardContainer = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    const handleCancel = () => {
      navigate(-1);
    }
    const [formData, setFormData] = useState({
      systemName:"",//시스템명
      departmentName:"",//시스템 담당자
      department:"",//시스템 담당 부서
      companyName:"",//업체명
      developerName:"",//담당자
      contactNum:"",//담당자 연락처
      password:"",//비밀번호
      passwordCheck:""//비밀번호 확인
    });
    const handleInputChage = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleContactChange = (partIndex, value) => {
        const parts = formData.contactNum.split('-');
        parts[partIndex] = value;

        const newContactNumber = parts.filter(Boolean).join('-');
        setFormData({ ...formData, contactNum: newContactNumber });
    };
    const [userIdPlaceholder, setUserIdPlaceholder] = useState("Loading...");

    useEffect(() => {
      const fetchUserIdPlaceholder = async () => {
      try{ 
        const response = await fetch("/api/user/id");
        if(!response.ok){
          throw new Error("Network Error");
        }
        const data = await response.json();
        setUserIdPlaceholder(data.placeholder);
      } catch (error) {
        console.error("fetch에 실패하였습니다", error);
        setUserIdPlaceholder("Error loading placeholder");
      }
    };
    fetchUserIdPlaceholder();
  }, []);
  return (
    <PageContainer>
      <Title>정보 수정</Title>
      <Container>
        <SystemInfoBar><Icon src={modify} alt="modify.png"/>시스템 정보</SystemInfoBar>
        <Form>
          <FormRow>
            <InputContainer>
              <RequiredSpan>시스템명</RequiredSpan>
              <input type="text" name="systemName" placeholder="시스템명" onChange={handleInputChage} />
            </InputContainer>
            <InputContainer>
              <RequiredSpan>시스템 담당자</RequiredSpan>
              <input type="text" name="depertmentName" placeholder="시스템 담당자" onChange={handleInputChage} />
            </InputContainer>
            <InputContainer>
              <RequiredSpan>시스템 담당부서</RequiredSpan>
              <input type="text" name="depertment" placeholder="시스템 담당부서" onChange={handleInputChage} />
            </InputContainer>
          </FormRow>
          <FormRow>
              <InputContainer>
                  <span>업체명</span>
                  <input type="text" name="companyName" placeholder="업체명" onChange={handleInputChage}/>
              </InputContainer>
              <InputContainer>
                  <RequiredSpan>담당자</RequiredSpan>
                  <input type="text" name="developerName" placeholder="담당자" onChange={handleInputChage} />
              </InputContainer>
              <InputContainer>
                  <RequiredSpan>담당자 연락처</RequiredSpan>
                  <InputRow>
                      <input type="text" placeholder="담당자 연락처" onChange={(e) => handleContactChange(0, e.target.value)} />
                      <input type="text" placeholder="0000" onChange={(e) => handleContactChange(1, e.target.value)} />
                      <input type="text" placeholder="0000" onChange={(e) => handleContactChange(2, e.target.value)} />
                  </InputRow>
                  
              </InputContainer>
          </FormRow>
          <FormRow>
              <InputContainer>
                  <RequiredSpan>아이디</RequiredSpan>
                  <input type="text" placeholder={userIdPlaceholder} disabled/>
                  <p>아이디는 수정이 불가능합니다.</p>
              </InputContainer>
              <InputContainer>
                  <RequiredSpan>비밀번호</RequiredSpan>
                  <input type="text" name="password" placeholder="비밀번호" onChange={handleInputChage} />
              </InputContainer>
              <InputContainer>
              </InputContainer>
          </FormRow>
          <FormRow>
              <InputContainer>    
              </InputContainer>
              <InputContainer>
                  <RequiredSpan>비밀번호 확인</RequiredSpan>
                  <input type="text" name="passwordCheck" placeholder="비밀번호 확인" onChange={handleInputChage} />
              </InputContainer>
              <InputContainer>
              </InputContainer>
          </FormRow>
        </Form>
        <ButtonGroup>
          <button className="group-button" onClick={handleCancel}>취소</button>
          <button className="group-button" onClick={() => setModalOpen(true)}>수정하기</button>
        {isModalOpen && <ModifySysModal closeModal={() => setModalOpen(false)} formData={formData} />}
        </ButtonGroup>
      </Container>
    </PageContainer>
  );
};

export default ModifyBoardContainer;
