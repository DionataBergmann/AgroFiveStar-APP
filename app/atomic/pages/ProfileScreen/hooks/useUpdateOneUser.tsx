import { useEffect, useState } from "react";
import { User, useUpdateOneUserMutation } from "../../../../generated/graphql";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from 'react-native-toast-message';

export default function useUpdateOneUser() {
  const [updateUserMutation, { loading: loadingUpdateUser, error }] = useUpdateOneUserMutation({
    context: {
      enableErrorMessages: true,
    },
    onCompleted: (data) => {
      AsyncStorage.setItem('userName', data?.updateOneUser?.name);
      AsyncStorage.setItem('userEmail', data?.updateOneUser?.email);
      Toast.show({
        type: 'success',
        text1: 'Usuário atualizado',
        topOffset: 10,
        visibilityTime: 3000,
      });
    },
    onError: (err) =>{
      Toast.show({
        type: 'error',
        text1: 'Erro ao atualizar usuário',
        topOffset: 10,
        visibilityTime: 3000,
      });
    }
  });
  const [userId, setUserId] = useState<string>()

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        setUserId(userId)

      } catch (error) {
        console.error('Failed to load user data:', error);
      }
    };

    getUserData();
  }, []);

  async function updateUser(inputData: User) {
    try {
      const { data } = await updateUserMutation({
        variables: {
          input: {
            id: userId,
            update: inputData,
          },
        },
        refetchQueries: ['users'],
        awaitRefetchQueries: true,
      });

      return { data };
    } catch (e) {
      console.error("Error during user updating mutation:", e);
      throw e;
    }
  }

  return { updateUser, loadingUpdateUser, error };
}
