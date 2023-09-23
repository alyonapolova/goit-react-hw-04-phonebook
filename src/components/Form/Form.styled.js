import { styled } from 'styled-components';

export const FormDiv = styled.div`
  text-align: center;
`;

export const Form = styled.form`
  margin: 0 auto;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  padding: 15px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const ContactsDiv = styled.div`
  margin: 0 auto;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  padding: 15px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const Button = styled.button`
  margin: 0 auto;
  background-image: linear-gradient(#42a1ec, #0070c9);
  border: 1px solid #0077cc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  direction: ltr;
  display: block;
  font-family: 'SF Pro Text', 'SF Pro Icons', 'AOS Icons', 'Helvetica Neue',
    Helvetica, Arial, sans-serif;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.022em;
  line-height: 1.47059;
  max-width: 150px;
  overflow: visible;
  padding: 4px 15px;
  text-align: center;
  vertical-align: baseline;

  &:hover,
  &:focus {
    background-image: linear-gradient(#51a9ee, #147bcd);
    border-color: #1482d0;
    text-decoration: none;
  }
`;

export const FilterInput = styled.input`
  margin-left: 10px;
`;

export const ListUl = styled.ul`
  list-style: none;
`;

export const ListLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ButtonLi = styled.button`
  background: #ff4742;
  border: 1px solid #ff4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, 'proxima nova', sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;

  &:hover,
  &:focus {
    background-color: initial;
    background-position: 0 0;
    color: #ff4742;
  }
`;
