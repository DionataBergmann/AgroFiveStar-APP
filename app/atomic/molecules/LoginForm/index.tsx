import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import Button from '../../atoms/Button';
import { theme } from '../../../common/theme';
import { useFormContext, Controller } from 'react-hook-form';

export type LoginFormProps = {
  onSubmit: (data: Record<string, unknown>) => void;
  loading: boolean;
};

const LoginForm = ({ onSubmit, loading }: LoginFormProps) => {
  const { control, handleSubmit, formState: { errors } } = useFormContext();

  return (
    <View>
      <Controller
        name="email"
        control={control}
        rules={{
          required: 'Email é obrigatório',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Endereço de Email inválido',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
          </>
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: 'Senha é obrigatória' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
          </>
        )}
      />
      <Text style={styles.text}>Esqueceu sua senha?</Text>
      <Button title="Login" onPress={handleSubmit(onSubmit)} style={[styles.button, loading  && styles.buttonLoading]} disabled={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: 300,
    borderColor: theme.colors.hippieGreen,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
  },
  text: {
    textAlign: 'right',
    color: theme.colors.hippieGreen,
    marginTop: 10,
  },
  button: {
    padding: 10,
    marginTop: 20,
    backgroundColor: theme.colors.hippieGreen,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
  buttonLoading: {
    opacity: 0.5,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default LoginForm;
