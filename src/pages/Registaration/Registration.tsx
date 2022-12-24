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
import { IRegistration } from '../../types'
import { loginValidationSchema } from '../../schemas'
import { useNavigate } from 'react-router-dom'

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
  },
  loginField: {
    marginBottom: 15,
    '& input': {
      '&::placeholder': {
        textAlign: 'center',
      },
    },
  },
  recoveryPassword: {
    color: theme.palette.mainColor,
    fontWeight: 200,
    fontSize: 24,
    marginBottom: 45,
    textDecoration: 'underline',
    textAlign: 'center',
  },
}))

export const Registration: FC = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  const initialValues: IRegistration = {
    email: '',
    password: '',
    password_copy: '',
  }

  const formik = useFormik({
    initialValues,
    validationSchema: loginValidationSchema,
    onSubmit: (values) => console.log(values),
  })

  const handleGoToLogin = (): void => {
    navigate('/login')
  }

  return (
    <div className={classes.root}>
      <Grid container justifyContent="flex-end">
        <Button
          className={classes.mainButton}
          onClick={handleGoToLogin}
        >
          Логин
        </Button>
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
          Регистрация
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
            className={classes.loginField}
            placeholder="**********"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <Typography
            component="h3"
            variant="h3"
            className={classes.title}
          >
            Повторите пароль
          </Typography>
          <TextField
            className={classes.loginField}
            placeholder="**********"
            type="password"
            name="password_copy"
            value={formik.values.password_copy}
            onChange={formik.handleChange}
          />
        </FormControl>
        <Button>Зарегистрироваться</Button>
      </Grid>
    </div>
  )
}
