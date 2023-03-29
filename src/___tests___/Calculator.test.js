import React from "react";
import renderer from 'react-test-renderer';
import Calculator from "../components/Calculator";

it ('check if the calculator renders properly', ()=>{
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
});
