import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useForm, Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { theme } from '../../../common/theme';

const CreateTaskForm = ({ onSubmit, onCancel, initialData }) => {
  const { control, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      title: initialData?.title || '',
      description: initialData?.description || '',
      date: initialData?.date ? new Date(initialData.date) : new Date(),  
    },
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    if (initialData) {
      setValue('title', initialData?.title || '');
      setValue('description', initialData?.description || '');
      setValue('date', initialData?.date ? new Date(initialData.date) : new Date());
    }
  }, [initialData, setValue]);

  const onSubmitForm = (data) => {
    onSubmit(data);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nome da tarefa</Text>
        <Controller
          control={control}
          rules={{ required: 'O nome da tarefa é obrigatório' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.title && styles.inputError]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Nome da tarefa"
            />
          )}
          name="title"
        />
        {errors.title && <Text style={styles.errorText}>{errors.title.message}</Text>}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Descrição</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Descrição da tarefa"
              multiline
            />
          )}
          name="description"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Data</Text>
        <Controller
          control={control}
          name="date"
          render={({ field: { onChange, value } }) => (
            <>
              <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
                <Text style={styles.datePickerText}>{format(value, 'dd/MM/yyyy')}</Text>
                <Ionicons name="calendar-outline" size={20} color="#666" />
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={value instanceof Date ? value : new Date()} 
                  mode="date"
                  display="default"
                  onChange={(event, date) => {
                    setShowDatePicker(false);
                    if (date) {
                      date.setHours(0, 0, 0, 0); 
                      onChange(date);
                    }
                  }}
                />
              )}
            </>
          )}
        />
      </View>

      <View style={styles.formActions}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmitForm)}>
          <Text style={styles.submitButtonText}>FINALIZAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.cancelButtonText}>CANCELAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white'
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  datePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  datePickerText: {
    fontSize: 16,
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButton: {
    backgroundColor: theme.colors.hippieGreen,
    padding: 15,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.hippieGreen,
  },
  cancelButtonText: {
    color: theme.colors.hippieGreen,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateTaskForm;
