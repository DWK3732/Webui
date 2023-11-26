import React, { useState } from "react";
import styled from "styled-components";
import AdminSearchContainer from '@components/admin/containers/AdminSearchContainer';
import TabMenuStandard from "./tabmenu/TabMenuStandard";
import TabMenuConstructionContainer from "./tabmenu/TabMenuConstruction";
import TabMenuDiagnostic from "./tabmenu/TabMenuDiagnostic ";
import FileUploadTypeAModal from "@components/modals/FileUploadTypeAModal";
import FileUploadTypeBModal from "@components/modals/FileUploadTypeBModal";
import FileUploadTypeCModal from "@components/modals/FileUploadTypeCModal";

const Container = styled.div`
  display: flex;
  justify-content: center;
  div {
    width: 100%;
    max-width: 1000px;
    h3 {
        margin-bottom: 30px;
    }
  }
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    gap: 4rem;
  }
  li {
    border: 2px solid black;
    padding: 7px 35px;
    border-bottom: none;
    cursor: pointer;
  }
  .focused {
    border: 2px solid #4DBDE5;
    border-bottom: none;
  }
  button {
      padding: 5px 10px;
      color: white;
      background-color: #007FFF;
      border: 1px solid #007FFF;
      border-radius: 10px;
      font-size: medium;
      cursor: pointer;
      float: right;
    }
`;


export default function SystemTabMenuContainer() {
    const menu = ['표준 정의서', '구축 정의서', '진단 보고서'];
    const [tab, setTab] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };

  return (
    <Container>
      <div>
        <h3>경상북도 지도기반 통계정보시스템</h3>
        <ul>
          {menu.map((e, i) => (
            <li
              key={i}
              className={i === tab ? "focused" : null}
              onClick={() => {
                setTab(i);
              }}
            >
              {e}
            </li>
          ))}
        </ul>

        <AdminSearchContainer></AdminSearchContainer>
        
        <button onClick={openModal}>게시글 등록</button>

        {isModalOpen && (
          <>
            {tab === 0 && <FileUploadTypeAModal closeModal={() => setIsModalOpen(false)} />}
            {tab === 1 && <FileUploadTypeBModal closeModal={() => setIsModalOpen(false)} />}
            {tab === 2 && <FileUploadTypeCModal closeModal={() => setIsModalOpen(false)} />}
          </>
        )}
        {tab === 0 ? (
          <TabMenuStandard></TabMenuStandard>
        ) : tab === 1 ? (
          <TabMenuConstructionContainer></TabMenuConstructionContainer>
        ) : (
          <TabMenuDiagnostic></TabMenuDiagnostic>
        )}
      </div>
    </Container>
  );
}

