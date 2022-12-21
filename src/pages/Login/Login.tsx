import React, { FC } from 'react'
import { Grid, Typography, Button, FormControl, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import { LoginTypes } from '../../types'
import { loginValidationSchema } from '../../schemas'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '60px',
  },
  regButton: {
    padding: '6px 8px',
    backgroundColor: theme.palette.mainColor,
    color: theme.palette.common.white,
    borderRadius: '56px',
    fontSize: '20px',
  },
  header: {
    color: theme.palette.common.white,
    fontWeight: 700,
  },
  loginField:{
    '& input':{
      '&::placeholder':{
        textAlign:'center'
      }
    }
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

  return <div className={classes.root}>
    <Grid container justifyContent='flex-end'>
      <Button className={classes.regButton}>
        Регистрация
      </Button>
    </Grid>
    <Grid container direction='column' justifyContent='center' alignItems='center'>
      <Typography component='h3' variant='h3' className={classes.header}>
        Вход
      </Typography>

      <FormControl>
        <Typography component='h3' variant='h3' className={classes.header}>
          Введите e-mail
        </Typography>
        <TextField
          className={classes.loginField}
          placeholder='ivanov15@mail.ru'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Typography component='h3' variant='h3' className={classes.header}>
          Введите пароль
        </Typography>
        <TextField
          type='password'
          className={classes.loginField}
          placeholder='**********'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </FormControl>
    </Grid>
  </div>
}