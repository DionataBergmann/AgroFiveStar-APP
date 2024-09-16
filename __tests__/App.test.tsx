import '@react-native-async-storage/async-storage/jest/async-storage-mock';
import React from 'react';
import App from '../App';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

describe('App', () => {
  it('renders login screen when there is no token', async () => {
    AsyncStorage.getItem.mockResolvedValueOnce(null);

    const { getByText } = render(<App />);

    await waitFor(() => {
      expect(getByText('Login')).toBeTruthy();
    });
  });

  it('renders the home screen when a token is present', async () => {
    AsyncStorage.getItem.mockResolvedValueOnce('mocked-token');
  
    const { getByTestId } = render(<App />);
  
    await waitFor(() => {
      expect(getByTestId('home-screen')).toBeTruthy();
    });
  });
  

  it('shows a loading indicator while fetching token', () => {
    AsyncStorage.getItem.mockImplementation(() => new Promise(() => {}));

    const { getByTestId } = render(<App />);

    expect(getByTestId('loading-indicator')).toBeTruthy();
  });
});
