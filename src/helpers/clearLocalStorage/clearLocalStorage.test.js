import React from 'react';
import clearLocalStorage from './clearLocalStorage';

describe('clearLocalStorage tests', () => {
  it('should be a function', () => {
    expect(clearLocalStorage).toBeAFunction;
  });
});