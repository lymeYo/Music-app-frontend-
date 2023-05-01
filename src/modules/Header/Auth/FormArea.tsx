import { FieldValues, useForm, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form'

import { LockedIcon, ProfileIcon } from '@/ui/Icons'
import { TauthType, TloginData, TregistrationData } from './constants'
import { setCookie } from 'nookies'

type InputProps = {
  type: 'username' | 'password'
  register: UseFormRegisterReturn<'username' | 'password'>
  isEmptyError: boolean
}
const Input = ({ type, register, isEmptyError }: InputProps) => (
  <div className='relative'>
    <input
      {...register}
      className={
        'w-full border-b border-slate-300 pl-7 pb-2 pr-3 ' +
        `${type == 'password' ? 'mt-12' : ''} ` +
        `${isEmptyError ? 'border-red-800' : 'border-slate-300'}`
      }
      placeholder={type == 'password' ? 'Password' : 'Username'}
      type='text'
    />
    {type == 'username' ? (
      <ProfileIcon extraClass='w-5 h-5 absolute bottom-3 text-slate-400' />
    ) : (
      <LockedIcon extraClass='w-5 h-5 absolute bottom-3 text-slate-400' />
    )}
  </div>
)

type FormDataProps = {
  type: TauthType
  changeType: (type: TauthType) => void
  submit: (data) => void
  errorMess?: string | undefined
}
const FormArea = ({ type, changeType, submit, errorMess }: FormDataProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const changeTypeHandler = () => {
    const newType: TauthType = type == 'login' ? 'registration' : 'login'
    changeType(newType)
  }

  return (
    <form className='w-full md:mr-5 md:w-1/2 lg:w-1/3' onSubmit={handleSubmit(submit)}>
      <div className='flex h-full w-full flex-col justify-center'>
        <Input
          type='username'
          isEmptyError={!!errors.username}
          register={register('username', { required: true })}
        />
        <Input
          type='password'
          isEmptyError={!!errors.password}
          register={register('password', { required: true })}
        />
        <span className='mt-7 cursor-pointer text-center text-slate-400 hover:text-slate-500'>
          Забыли пароль?
        </span>
        <div className='flex flex-1 items-center justify-center'>
          <button className='block w-full max-w-[300px] rounded-full bg-lMain py-3 text-white hover:bg-lMainLight'>
            {type == 'login' ? 'Войти' : 'Зарегестрироваться'}
          </button>
        </div>
        <button
          type='submit'
          className='mt-7 cursor-pointer text-center text-slate-400 hover:text-slate-500'
          onClick={changeTypeHandler}
        >
          {type == 'registration' ? 'Вход' : 'Регистрация'}
        </button>
        <span>{errorMess ?? null}</span>
      </div>
    </form>
  )
}

export default FormArea
