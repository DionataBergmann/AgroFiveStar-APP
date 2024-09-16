import '@react-native-async-storage/async-storage/jest/async-storage-mock';
import React from 'react';
import App from '../App';
import { render, waitFor } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
}));

it('renders correctly', async () => {
  AsyncStorage.getItem.mockResolvedValueOnce('mocked-token');

  await waitFor(() => {
    render(<App />);
  });
});
