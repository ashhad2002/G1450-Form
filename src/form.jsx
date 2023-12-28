import React, { useState } from 'react';
import styled from 'styled-components';
import SignatureCanvas from 'react-signature-canvas';
import axios from 'axios';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto; /* Enable scrolling when the content overflows */
  margin: 0;
  padding: 1em;
`;

const Card = styled.div`
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  margin-right: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const RadioLabel = styled.label`
  font-size: 14px;
  margin-right: 10px;
`;

const RadioInput = styled.input`
  margin-right: 5px;
`;

const FormGroupRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SignatureContainer = styled.div`
  margin-top: 20px;
`;

const ClearButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
`;

const SaveButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const G1450Form = () => {
  const [formData, setFormData] = useState({
    givenName: '',
    streetName: '',
    city: '',
    state: '',
    zipCode: '',
    creditCardName: '',
    creditCardNumber: '',
    creditCardExpiry: '',
    creditCardHolderEmail: '',
    authorizedPaymentAmount: '',
    cardType: '', 
    aptSteFlr: '',
    aptSteFlrNumber: '',
    phoneNumber: '',
    signature: null,
  });

  const sigCanvas = React.useRef({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSignatureClear = () => {
    sigCanvas.current.clear();
  };

  const handleSignatureSave = () => {
    setFormData({
      ...formData,
      signature: sigCanvas.current.toDataURL(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await axios.post('http://localhost:8080/form-data', formData);
      if (response.status === 200) {
        console.log('Form data submitted successfully');
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error during form data submission:', error);
    }
  };

    return (
        <FormContainer>
        <Card>
            <Title>Form G-1450 Intake</Title>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="givenName">Given Name:</Label>
                <Input
                type="text"
                id="givenName"
                name="givenName"
                value={formData.givenName}
                onChange={handleInputChange}
                required
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="creditCardName">Cardholder Name:</Label>
                <Input
                type="text"
                id="creditCardName"
                name="creditCardName"
                value={formData.creditCardName}
                onChange={handleInputChange}
                required
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="creditCardNumber">Card Number:</Label>
                <Input
                type="text"
                id="creditCardNumber"
                name="creditCardNumber"
                value={formData.creditCardNumber}
                onChange={handleInputChange}
                required
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="creditCardExpiry">Expiry Date (mm/yyyy):</Label>
                <Input
                type="text"
                id="creditCardExpiry"
                name="creditCardExpiry"
                value={formData.creditCardExpiry}
                onChange={handleInputChange}
                required
                />
            </FormGroup>
            <FormGroup>
            <Label>Accepted Card Type:</Label>
            <RadioGroup>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  id="amex"
                  name="cardType"
                  value="amex"
                  checked={formData.cardType === 'amex'}
                  onChange={handleInputChange}
                />
                AMEX
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  id="discover"
                  name="cardType"
                  value="discover"
                  checked={formData.cardType === 'discover'}
                  onChange={handleInputChange}
                />
                Discover
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  id="visa"
                  name="cardType"
                  value="visa"
                  checked={formData.cardType === 'visa'}
                  onChange={handleInputChange}
                />
                Visa
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  id="mastercard"
                  name="cardType"
                  value="mastercard"
                  checked={formData.cardType === 'mastercard'}
                  onChange={handleInputChange}
                />
                MasterCard
              </RadioLabel>
            </RadioGroup>
          </FormGroup>
            <FormGroup>
                <Label htmlFor="creditCardHolderEmail">Cardholder Email:</Label>
                <Input
                type="email"
                id="creditCardHolderEmail"
                name="creditCardHolderEmail"
                value={formData.creditCardHolderEmail}
                onChange={handleInputChange}
                required
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="authorizedPaymentAmount">Authorized Payment Amount ($):</Label>
                <Input
                type="number"
                min="0"
                id="authorizedPaymentAmount"
                name="authorizedPaymentAmount"
                value={formData.authorizedPaymentAmount}
                onChange={handleInputChange}
                required
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="streetName">Street Number and Name:</Label>
                <Input
                type="text"
                id="streetName"
                name="streetName"
                value={formData.streetName}
                onChange={handleInputChange}
                required
                />
            </FormGroup>
            <FormGroupRow>
            <RadioGroup>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  id="apt"
                  name="aptSteFlr"
                  value="apt"
                  checked={formData.aptSteFlr === 'apt'}
                  onChange={handleInputChange}
                />
                Apt
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  id="ste"
                  name="aptSteFlr"
                  value="ste"
                  checked={formData.aptSteFlr === 'ste'}
                  onChange={handleInputChange}
                />
                Ste
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  id="flr"
                  name="aptSteFlr"
                  value="flr"
                  checked={formData.aptSteFlr === 'flr'}
                  onChange={handleInputChange}
                />
                Flr
              </RadioLabel>
            </RadioGroup>
            <Label htmlFor="aptSteFlrNumber">Number:</Label>
            <Input
              class = "text-danger"
              type="number"
              min="0"
              id="aptSteFlrNumber"
              name="aptSteFlrNumber"
              value={formData.aptSteFlrNumber}
              onChange={handleInputChange}
              required
            />
          </FormGroupRow>
            <FormGroup>
                <Label htmlFor="city">City:</Label>
                <Input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="state">State:</Label>
                <Input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="zipCode">Zip Code:</Label>
                <Input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="phoneNumber">Phone Number:</Label>
                <Input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              <SignatureContainer>
                <Label>Drawn Signature:</Label>
                <SignatureCanvas
                  ref={sigCanvas}
                  penColor="black"
                  canvasProps={{ width: 400, height: 150, className: 'sigCanvas'}}
                />
                <ClearButton type="button" onClick={handleSignatureClear}>
                    Clear Signature
                  </ClearButton>
                  <SaveButton type="button" onClick={handleSignatureSave}>
                    Save Signature
                  </SaveButton>
              </SignatureContainer>
            {/* Button */}
            <Button type="submit" className="pt-2">Submit</Button>
            </Form>
        </Card>
        </FormContainer>
    );
    };

export default G1450Form;