'use strict';

jest.mock('fs');

describe('app test', () => {
    it('works?', () => {
      expect(true).toBeTruthy();
    })

    it('can read a file', () => {
      expect(true).toBeTruthy();
    })

    it('can save to file', () => {
      expect(true).toBeTruthy();
    })

    it('uppercase works', () => {
      expect(true).toBeTruthy();
    })

})

// Testing
// Write tests around all of your units
// File Read, File Save, Uppercase
// Mock the fs module methods so that your tests don’t use actual files
// Test event handlers (not events themselves)
// Use spies to help testing your logger methods (assert that console.log was called right)