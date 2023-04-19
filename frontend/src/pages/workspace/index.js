import { useReducer } from 'react';
import styled from 'styled-components';
import currentWorkspaceReducer from 'hooks/workspace/CurrentWorkspaceReducer';
import workspaceItemsReducer from 'hooks/workspace/WorkspaceItemsReducer';
import WorkspaceSnb from 'pages/workspace/snb';
import AccordionSnb from 'pages/workspace/snb/AccordionSnb';
import WorkspaceSnbItems from 'pages/workspace/snb/WorkspaceSnbItems';
import WrokspaceSnbTitle from 'pages/workspace/snb/WrokspaceSnbTitle';
import WorksapceContent from 'pages/workspace/contents';
import WorspaceName from 'pages/workspace/contents/WorspaceName';
import Thumbnails from './contents/Thumbnails';
import DefaultThumbnail from './contents/DefaultThumbnail';

import { handleApiException } from 'exception/ApiException';
import useAxios from 'hooks/axios/UseAxios';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
`;

const Workspace = () => {
  const [{ response: workspaces, isLoading, isError }, refetch] = useAxios('/v1/workspaces', 'get', handleApiException);
  console.log('isLoading:' + isLoading);
  console.log('isError:' + isError);
  console.log(workspaces);

  // const camelCaseWorkspaces = workspaces.map(
  //   ({
  //     workspace_id: workspaceId,
  //     workspace_name: workspaceName,
  //     workspace_order: order,
  //     deletable,
  //     create_date: createDate,
  //     update_date: updateDate,
  //     create_by: createBy,
  //     update_by: updateBy,
  //   }) => {
  //     return {
  //       workspaceId,
  //       workspaceName,
  //       order,
  //       deletable,
  //       createDate,
  //       updateDate,
  //       createBy,
  //       updateBy,
  //     };
  //   },
  // );
  // const [workspaceItems, workspaceItemsDispatch] = useReducer(workspaceItemsReducer, camelCaseWorkspaces);
  // const [currentWorksapce, currentWorkspaceDispatch] = useReducer(currentWorkspaceReducer, camelCaseWorkspaces[0]);

  // const workspaceSnbProps = {
  //   workspaceItems,
  //   workspaceItemsDispatch,
  //   currentWorksapce,
  //   currentWorkspaceDispatch,
  //   isLoading,
  // };
  return (
    <Container>
      {/* <WorkspaceSnb>
        <WrokspaceSnbTitle {...workspaceSnbProps} />
        <WorkspaceSnbItems {...workspaceSnbProps} />
        <AccordionSnb />
      </WorkspaceSnb>
      <WorksapceContent>
        <WorspaceName {...workspaceSnbProps} />
        <Thumbnails>
          <DefaultThumbnail />
        </Thumbnails>
      </WorksapceContent> */}
    </Container>
  );
};

export default Workspace;
