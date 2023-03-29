import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "../components/Navbar";

it ('check if the Navbar section renders properly', ()=>{
    const tree = render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(tree).toMatchSnapshot();
});
