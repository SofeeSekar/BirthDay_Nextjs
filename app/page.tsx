import MyComponent from '../MyComponent';
import ExampleComponent from '../MyComponent'; // Import the ExampleComponent
import CreateComponent from '../CreateCustomer'
import LoginComponeent from '../LoginPage'
const YourPageOrComponent = () => {
  return (
    <div>
      <h1>Your Create </h1>
      <CreateComponent /> {/* Render the ExampleComponent */}
      <LoginComponeent/>

    </div>
  );
};

export default YourPageOrComponent;