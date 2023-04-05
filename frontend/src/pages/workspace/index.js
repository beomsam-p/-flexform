import { useReducer } from "react";
import styled from "styled-components";
import currentWorkspaceReducer from "hooks/workspace/CurrentWorkspaceReducer";
import { currentWorkspaceInit } from "hooks/workspace/CurrentWorkspaceReducer";
import workspaceItemsReducer from "hooks/workspace/WorkspaceItemsReducer";
import { workspaceItemsInit } from "hooks/workspace/WorkspaceItemsReducer";
import WorkspaceSnb from "pages/workspace/snb";
import AccordionSnb from "pages/workspace/snb/AccordionSnb";
import WorkspaceSnbItems from "pages/workspace/snb/WorkspaceSnbItems";
import WrokspaceSnbTitle from "pages/workspace/snb/WrokspaceSnbTitle";
import WorksapceContent from "pages/workspace/contents";
import WorspaceName from "pages/workspace/contents/WorspaceName";
import Thumbnails from "./contents/Thumbnails";
import DefaultThumbnail from "./contents/DefaultThumbnail";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
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

  const workspaceSnbProps = {
    workspaceItems,
    workspaceItemsDispatch,
    currentWorksapce,
    currentWorkspaceDispatch,
  };

  return (
    <Container>
      <WorkspaceSnb>
        <WrokspaceSnbTitle {...workspaceSnbProps} />
        <WorkspaceSnbItems {...workspaceSnbProps} />
        <AccordionSnb />
      </WorkspaceSnb>
      <WorksapceContent>
        <WorspaceName {...workspaceSnbProps} />
        <Thumbnails>
          <DefaultThumbnail />
        </Thumbnails>
      </WorksapceContent>
    </Container>
  );
};

export default Workspace;
