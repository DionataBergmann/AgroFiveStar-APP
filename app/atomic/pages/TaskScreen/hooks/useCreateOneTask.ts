import { CreateTaskInput, Task, TaskStatus, useCreateOneTaskMutation } from "../../../../generated/graphql"; 

export default function useCreateOneTask() {
  const [createTaskMutation, { loading: loadingCreateTask, error }] = useCreateOneTaskMutation({
    context: {
      enableErrorMessages: true,
    },
  });

  async function createTask(inputData: CreateTaskInput, userId?: string) {
    try {
      const { data } = await createTaskMutation({
        variables: {
          input: { 
            task : 
            { 
              title: inputData.title, 
              description: inputData.description, 
              date: inputData.date.toISOString().split('T')[0], 
              userId, 
              status: TaskStatus.Pending
            }}
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
