import {render, screen} from '@testing-library/react'
import Header from '../Header'



it('test for header test', ()=>{
    render(<Header title='hello world'/>)

   const element = screen.getByText("hello world")

    expect(element).toBeInTheDocument()
})