import { StyledInput, StyledTitle } from 'components/Filter/Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledTitle>Find contacts by name</StyledTitle>
      <StyledInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => {
          dispatch(setFilter(e.target.value));
        }}
      />
    </>
  );
};
