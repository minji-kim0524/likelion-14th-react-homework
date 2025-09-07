import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import Input from '@/components/Input'
import Button from '@/components/button'
import Navigation from '@/components/navigation'
import supabase from '@/libs/supabase'

type SignUpForm = {
  name: string
  email: string
  password: string
  confirmPassword: string
  bio?: string
}

export default function SignUP() {
  // 폼 상태관리
  // 구조 분해 할당
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpForm>({ mode: 'onChange' })

  const onSubmit = async (formData: SignUpForm) => {
    if (isSubmitting) return

    const { error, data } = await supabase.auth.signUp({
      // 필수
      email: formData.email,
      password: formData.password,
      // 선택
      options: {
        data: {
          username: formData.name,
          bio: formData.bio,
        },
      },
    })

    if (error) {
      toast.error(
        `인증에 실패하였습니다. [${error.status}:${error.name}:${error.message}]`
      )
    } else {
      if (data.user) {
        const { error } = await supabase.from('profiles').insert({
          id: data.user.id,
          username: data.user.user_metadata.username,
          email: data.user.user_metadata.email,
          bio: data.user.user_metadata.bio,
          created_at: new Date().toISOString(),
        })

        if (error) {
          toast.error(
            `프로필 추가 오류가 발생하였습니다. [${error.code}:${error.name}:${error.message}]`
          )
        } else {
          toast.success('회원가입에 성공하였습니다!')
          reset()
        }
      }
    }
  }

  const password = watch('password')

  return (
    <>
      <Navigation />
      <section className="p-4 flex flex-col gap-3 justify-center">
        <h2 className="font-bold text-2xl text-center mb-2">회원가입</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="이름"
            autoComplete="off"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'signup-name-error' : undefined}
            {...register('name', { required: '이름을 입력하세요' })}
            className={
              errors.name
                ? 'border-red-500 ring-red-300'
                : 'border-gray-300 focus:ring-blue-300'
            }
          />
          {errors.name && (
            <div
              role="alert"
              id="signup-name-error"
              className="text-red-500 text-sm mt-1"
            >
              {errors.name.message}
            </div>
          )}
          <Input
            label="이메일"
            autoComplete="off"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'signup-email-error' : undefined}
            {...register('email', {
              required: '이메일을 입력하세요.',
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: '올바른 이메일 형식이 아닙니다.',
              },
            })}
          />
          {errors.email && (
            <div id="signup-email-error" className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </div>
          )}
          <Input
            label="패스워드"
            autoComplete="off"
            aria-invalid={!!errors.password}
            aria-describedby={
              errors.password ? 'signup-password-error' : undefined
            }
            {...register('password', {
              required: '패스워드를 입력하세요.',
              minLength: {
                value: 6,
                message: '6자 이상 입력하세요.',
              },
              validate: (value: string) => {
                if (!/[a-z]/.test(value))
                  return '영문 소문자가 하나 이상 포함되어야 합니다.'
                if (!/[A-Z]/.test(value))
                  return '영문 대문자가 하나 이상 포함되어야 합니다.'
                if (!/[0-9]/.test(value))
                  return '숫자가 하나 이상 포함되어야 합니다.'
              },
            })}
            className={
              errors.password
                ? 'border-red-500 ring-red-300'
                : 'border-gray-300 focus:ring-blue-300'
            }
          />
          {errors.password && (
            <div
              id="signup-password-error"
              className="text-red-500 text-sm mt-1"
              role="alert"
            >
              {errors.password.message}
            </div>
          )}
          <Input
            label="패스워드 확인"
            autoComplete="off"
            aria-invalid={!!errors.confirmPassword}
            aria-describedby={
              errors.confirmPassword
                ? 'signup-confirmPassword-error'
                : undefined
            }
            {...register('confirmPassword', {
              required: '패스워드 확인을 입력하세요',
              validate: (v) => v === password || '패스워드가 일치하지 않습니다',
            })}
            className={
              errors.confirmPassword
                ? 'border-red-500 ring-red-300'
                : 'border-gray-300 focus:ring-blue-300'
            }
          />
          {errors.confirmPassword && (
            <div
              id="signup-confirmPassword-error"
              className="text-red-500 text-sm mt-1"
              role="alert"
            >
              {errors.confirmPassword.message}
            </div>
          )}
          <div className="flex gap-4 justify-center mt-4">
            <Button
              type="submit"
              aria-disabled={isSubmitting}
              sign={isSubmitting ? '가입 진행중...' : '가입하기'}
              className="bg-amber-100"
            />
            <Button type="button" sign="취소(돌아가기)" />
          </div>
        </form>
      </section>
    </>
  )
}
