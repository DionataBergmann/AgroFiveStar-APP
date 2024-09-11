import { Task, TaskStatus, useUpdateOneTaskMutation } from "../../../../generated/graphql"; 

export default function useUpdateOneTask() {
  const [updateTaskMutation, { loading: loadingUpdateTask, error }] = useUpdateOneTaskMutation({
    context: {
      enableErrorMessages: true,
    },
  });

  async function updateTask(id: string, inputData: Task) {
    try {
      const { data } = await updateTaskMutation({
        variables: {
          input: {
            id,
            update: inputData,
          },
        },
        refetchQueries: ['tasks'],
        awaitRefetchQueries: true,
      });
      
      return { data };
    } catch (e) {
      console.error("Error during task updating mutation:", e);
      throw e;
    }
  }

  async function updateTaskStatus(id: string, status: TaskStatus) {
   
    try {
      const { data } = await updateTaskMutation({
        variables: {
          input: {
            id,
            update: {
              status: status,
            }
          },
        },
        refetchQueries: ['tasks'],
        awaitRefetchQueries: true,
      });
      
      return { data };
    } catch (e) {
      console.error("Error during task updating mutation:", e);
      throw e;
    }
  }

  return { updateTask, updateTaskStatus, loadingUpdateTask, error };
}
