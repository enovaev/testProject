import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { setForm } from '../state/actions/actions';
import ava from '../assets/avatar.jpg'
// Types
import { AppState } from '../state/reducers/rootReducer';
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));


const UserForm: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const form = useSelector((state: AppState) => state.form);
  const [localForm, setLocalForm] = useState({ ...form });

  const changeLocal = (value: string, prop: string): void => {
    setLocalForm({ ...localForm, [prop]: value });
  }

  return (
    <Container>
      <TopContent>
        <Avatar alt="My photo" src={ava} className={classes.large} />
        <FormGroup>
          <TextField
            label="Имя"
            value={localForm.name}
            onChange={({ target }) => changeLocal(target.value, 'name')}
          />
          <TextField
            label="Фамилия"
            value={localForm.surname}
            onChange={({ target }) => changeLocal(target.value, 'surname')}
          />
        </FormGroup>
        <FormGroup>
          <TextField
            label="Возраст"
            value={localForm.age}
            type="number"
            onChange={({ target }) => changeLocal(target.value, 'age')}
          />
          <FormControl>
            <InputLabel id="select-label">Образование</InputLabel>
            <Select
              labelId="select-label"
              value={localForm.education}
              onChange={({ target }) => changeLocal(target.value as string, 'education')}
            >
              <MenuItem value={'Высшее'}>Высшее</MenuItem>
              <MenuItem value={'Среднее'}>Среднее</MenuItem>
              <MenuItem value={'Нет'}>Нет</MenuItem>
            </Select>
          </FormControl>
        </FormGroup>
      </TopContent>
      <BottomContent>
        <TextField
          label="Вольное описание"
          multiline
          fullWidth
          rows={4}
          value={localForm.about}
          onChange={({ target }) => changeLocal(target.value, 'about')}
        />
      </BottomContent>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(setForm(localForm))}
      >
        Сохранить
      </Button>
    </Container>
  );
};

const Container = styled.div`
`;
const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BottomContent = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default UserForm;