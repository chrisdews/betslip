import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';
import { render, screen } from '@testing-library/react'

xdescribe ('Header', ()=>{
    it('renders correctly - snapshot', () => {
        const tree = renderer
          .create(<Header><h1>Betslip</h1></Header>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

    test('renders Betslip title', () => {
        render(<Header><h1>Betslip</h1></Header>)
        expect(screen.getByText('Betslip'))
    })
})