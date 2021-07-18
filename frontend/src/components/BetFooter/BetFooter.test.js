import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';
import { render, screen } from '@testing-library/react'

describe ('Footer', ()=>{
    it('renders correctly - snapshot', () => {
        const tree = renderer
          .create(<Footer><button>Bet Now</button></Footer>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

    test('renders bet now button', () => {
        render(<Footer><button>Bet Now</button></Footer>)
        expect(screen.getByText('Bet Now'))
    })
})