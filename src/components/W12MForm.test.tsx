import {  render,screen } from '@testing-library/react';
import W12MForm from './W12MForm';

test('renders form element', () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	const { container } = render(<W12MForm />);

	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// for example, the firstChild of our container should be our form element
	expect(container.firstChild).toHaveClass('w12MForm');
	
});
//test form itself rendered correctly
test('renders the form', () => {
	render(<W12MForm />);
	const formElement = screen.getByRole('form');
	expect(formElement).toBeInTheDocument();
  });

  //test to check input fields rendered by using getByLabelText
test('renders input fields', () => {
	render(<W12MForm />);
	const speciesNameInput = screen.getByLabelText('Species Name');
	const planetNameInput = screen.getByLabelText('Planet Name');
	const numOfBeingsInput = screen.getByLabelText('Number of beings');
	const sumAnswerInput = screen.getByLabelText('What is 2 + 2');
	const reasonForSparingInput = screen.getByLabelText('Reason for sparing');
  
	expect(speciesNameInput).toBeInTheDocument();
	expect(planetNameInput).toBeInTheDocument();
	expect(numOfBeingsInput).toBeInTheDocument();
	expect(sumAnswerInput).toBeInTheDocument();
	expect(reasonForSparingInput).toBeInTheDocument();
  });

  //test to check input fields rendered with initial value
it('displays initial input field values', () => {
	render(<W12MForm />);
	// Assert that the input fields display their initial values
	expect(screen.getByLabelText(/Species Name/i)).toHaveValue('Humans');
	expect(screen.getByLabelText(/Planet Name/i)).toHaveValue('Earth');
	expect(screen.getByLabelText(/Number of beings/i)).toHaveValue('2');
	expect(screen.getByLabelText(/What is 2 \+ 2/i)).toHaveValue('4');
	expect(screen.getByLabelText(/Reason for sparing/i)).toHaveValue('Reason..');
  });
  
  
  
  
  
  
 
 