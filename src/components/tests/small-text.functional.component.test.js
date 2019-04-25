import TestRenderer from 'react-test-renderer';
import SmallText from './../partials/small-text.functional.component';
import React, { Component } from 'react';
import expect, { createSpy, spyOn, isSpy } from 'expect'
import storageService from './../services/storage.service.js';

const test1 = () => {
  const testRenderer = TestRenderer.create( <SmallText text="jajaja" align="right"/>);
  const testInstance = testRenderer.root;
  console.log(testInstance)

  // expect(testInstance.findByType(SubComponent).props.foo).toBe('bar');
  let a = expect(testInstance.props.text).toEqual('jajaja');
  console.log(a)

  try {
    let b = expect(testInstance.props.text).toEqual('jajajaj');
  console.log(b)
  } catch (e) {
    console.log(e.message)
  }

  const storage = new storageService()
  storage.setDashboard('2', 'some data')
  try {
    console.log(storage.getDashboard('2'))

    storage.getDashboard('2').then(res => {
      console.log(res)
      expect(res).toEqual('some data');
      // expect(res).toEqual('some data1');
    })
  
  } catch (e) {
    console.log(e.message)
  }


  
}

export default test1

