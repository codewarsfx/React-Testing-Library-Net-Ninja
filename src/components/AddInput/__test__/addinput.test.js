import {screen, render,fireEvent} from '@testing-library/react'
import AddInput from '../AddInput'

const setTodos = jest.fn()

describe('add input flow',()=>{

   it('is input element rendered',()=>{
     render (<AddInput todos={[]} setTodos={setTodos}/>)
    //test that add input element is rendered
    const addInputElement = screen.getByPlaceholderText(/add your task here.../i) 
     expect(addInputElement).toBeInTheDocument()})


    
    //test that input value changes when typing
    it('test that input value changes when typing',()=>{
        render (<AddInput todos={[]} setTodos={setTodos}/>)
       //test that add input element is rendered
       const addInputElement = screen.getByPlaceholderText(/add your task here.../i) 
       fireEvent.change(addInputElement,{
        target:{
            value:'go groccery shopping'
        }
       })
       expect(addInputElement.value).toBe('go groccery shopping')
    })
    //test that input value changes to empty when add button is clicked


    it('test that input becomes empty when add button is clicked',()=>{
        render (<AddInput todos={[]} setTodos={setTodos}/>)
       //test that add input element is rendered
       const addInputElement = screen.getByPlaceholderText(/add your task here.../i) 
       const addinputButton= screen.getByRole('button',{
        name:'Add'
       })
       fireEvent.change(addInputElement,{
        target:{
            value:'go groccery shopping'
        }
       })
       fireEvent.click(addinputButton)
       expect(addInputElement.value).toBe('')
    
    })

})