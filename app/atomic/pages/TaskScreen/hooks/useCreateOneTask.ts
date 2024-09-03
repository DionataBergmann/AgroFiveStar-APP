import { Task, useCreateOneTaskMutation } from "../../../../generated/graphql"; 

export default function useCreateOneTask() {
  const [createTaskMutation, { loading: loadingCreateTask, error }] = useCreateOneTaskMutation({
    context: {
      enableErrorMessages: true,
    },
  });

  async function createTask(inputData: any) {
    try {
      const { data } = await createTaskMutation({
        variables: {
          input: { task : inputData}
        },
        refetchQueries: ['tasks'],
        awaitRefetchQueries: true,
      });
      
      return { data };
    } catch (e) {
      console.error("Error during task creation mutation:", e);
      throw e;
    }
  }

  return { createTask, loadingCreateTask, error };
}
