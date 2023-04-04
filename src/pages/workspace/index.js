import currentWorkspaceReducer from "hooks/workspace/CurrentWorkspaceReducer";
import { currentWorkspaceInit } from "hooks/workspace/CurrentWorkspaceReducer";
import workspaceItemsReducer from "hooks/workspace/WorkspaceItemsReducer";
import { workspaceItemsInit } from "hooks/workspace/WorkspaceItemsReducer";
import WorkspaceSnb from "pages/workspace/snb";
import WorksapceContent from "pages/workspace/WorspaceContent";
import { useReducer } from "react";
import styled from "styled-components";
import AccordionSnb from "./snb/AccordionSnb";
import WorkspaceSnbItems from "./snb/WorkspaceSnbItems";
import WrokspaceSnbTitle from "./snb/WrokspaceSnbTitle";
import WorspaceNameArea from "./WorspaceNameArea";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
`;
const WorkspaceSnbContainer = styled.div`
  height: calc(100vh - 54px);
  width: 17vw;
  min-width: 210px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
`;
const WorkspaceContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 0fr auto;
`;

const Workspace = () => {
  const [workspaceItems, workspaceItemsDispatch] = useReducer(
    workspaceItemsReducer,
    workspaceItemsInit
  );
  const [currentWorksapce, currentWorkspaceDispatch] = useReducer(
    currentWorkspaceReducer,
    currentWorkspaceInit
  );
  return (
    <Container>
      <WorkspaceSnb>
        <WorkspaceSnbContainer>
          <WrokspaceSnbTitle
            workspaceItems={workspaceItems}
            workspaceItemsDispatch={workspaceItemsDispatch}
            currentWorksapce={currentWorksapce}
            currentWorkspaceDispatch={currentWorkspaceDispatch}
          />
          <WorkspaceSnbItems
            workspaceItems={workspaceItems}
            currentWorksapce={currentWorksapce}
            currentWorkspaceDispatch={currentWorkspaceDispatch}
          />
          <AccordionSnb />
        </WorkspaceSnbContainer>
      </WorkspaceSnb>
      <WorksapceContent>
        <WorkspaceContentContainer>
          <WorspaceNameArea
            workspaceItems={workspaceItems}
            workspaceItemsDispatch={workspaceItemsDispatch}
            currentWorksapce={currentWorksapce}
            currentWorkspaceDispatch={currentWorkspaceDispatch}
          />
          <h1>content area!</h1>
        </WorkspaceContentContainer>
      </WorksapceContent>
    </Container>
  );
};

export default Workspace;
