import React, { FC } from 'react'
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import { LoginTypes } from '../../types'
import { loginValidationSchema } from '../../schemas'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '60px',
  },
  mainButton: {
    padding: '6px 8px',
    backgroundColor: theme.palette.mainColor,
    color: theme.palette.common.white,
    borderRadius: '56px',
    fontSize: '20px',
  },
  title: {
    color: theme.palette.mainColor,
    fontWeight: 700,
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 15,
  },
  header: {
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 48,
    marginBottom: 50,
    textTransform: 'uppercase',
  },
  loginField: {
    marginBottom: 15,
    '& input': {
      '&::placeholder': {
        textAlign: 'center',
      },
    },
  },
  recoveryPassword:{
    color: theme.palette.mainColor,
    fontWeight:200,
    fontSize:24,
    marginBottom: 45,
    textDecoration:'underline',
    textAlign: 'center'
  }
}))

export const Login: FC = () => {
  const classes = useStyles()

  const initialValues: LoginTypes = {
    email: '',
    password: '',
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginValidationSchema,
    onSubmit: (values) => console.log(values),
  })

  return (
    <div className={classes.root}>
      <Grid container justifyContent="flex-end">
        <Button className={classes.mainButton}>Регистрация</Button>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          component="h3"
          variant="h3"
          className={classes.header}
        >
          Вход
        </Typography>
        <FormControl>
          <Typography
            component="h3"
            variant="h3"
            className={classes.title}
          >
            Введите e-mail
          </Typography>
          <TextField
            className={classes.loginField}
            placeholder="ivanov15@mail.ru"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Typography
            component="h3"
            variant="h3"
            className={classes.title}
          >
            Введите пароль
          </Typography>
          <TextField
            type="password"
            className={classes.loginField}
            placeholder="**********"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <Typography className={classes.recoveryPassword}>Восстановить пароль</Typography>
        </FormControl>
        <Button>Войти</Button>
      </Grid>
    </div>
  )
}
