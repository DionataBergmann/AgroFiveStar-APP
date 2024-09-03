import { useDeleteOneTaskMutation } from "../../../../generated/graphql"; 

export default function useDeleteOneTask() {
  const [deleteTaskMutation, { loading: loadingDeleteTask, error }] = useDeleteOneTaskMutation({
    context: {
      enableErrorMessages: true,
    },
  });

  async function deleteTask(id: string) {
    try {
      const { data } = await deleteTaskMutation({
        variables: {
          input: {
            id,
          },
        },
        refetchQueries: ['tasks'],
        awaitRefetchQueries: true,
      });
      
      return { data };
    } catch (e) {
      console.error("Error during task deleting mutation:", e);
      throw e;
    }
  }

  return { deleteTask, loadingDeleteTask, error };
}
