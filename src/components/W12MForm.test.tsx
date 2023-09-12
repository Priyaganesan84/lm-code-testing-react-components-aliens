import { findAllByText, render,screen,fireEvent } from '@testing-library/react';
import W12MForm from './W12MForm';

test('renders form element', () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	const { container } = render(<W12MForm />);

	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// for example, the firstChild of our container should be our form element
	expect(container.firstChild).toHaveClass('w12MForm');
	
});



it('displays initial input field values', () => {
	render(<W12MForm />);
	// Assert that the input fields display their initial values
	expect(screen.getByLabelText(/Species Name/i)).toHaveValue('Humans');
	expect(screen.getByLabelText(/Planet Name/i)).toHaveValue('Earth');
	expect(screen.getByLabelText(/Number of beings/i)).toHaveValue('2');
	expect(screen.getByLabelText(/What is 2 \+ 2/i)).toHaveValue('4');
	expect(screen.getByLabelText(/Reason for sparing/i)).toHaveValue('Reason..');
	// Add similar assertions for other input fields
  });
  
  
  
  
  
  
 
 