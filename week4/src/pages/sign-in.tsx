import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import Input from '@/components/Input'
import Button from '@/components/button'
import Navigation from '@/components/navigation'
import supabase from '@/libs/supabase'

type SignInForm = {
  email: string
  password: string
}

export default function SingIn() {
  const navigate = useNavigate()
  // 폼 상태관리
  // 구조 분해 할당
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignInForm>({ mode: 'onChange' })

  const onSubmit = async (formData: SignInForm) => {
    if (isSubmitting) return

    const { error, data } = await supabase.auth.signInWithPassword(formData)

    if (error) {
      toast.error(
        `로그인 오류가 발생하였습니다! [${error.status}:${error.name}:${error.message}]`
      )
    } else {
      if (data.user) {
        const { username } = data.user.user_metadata
        toast.success(`${username}님! 로그인 되었습니다.`, {
          action: {
            label: '프로필 페이지로 이동',
            onClick: () => {
              navigate('/profile')
              reset()
            },
          },
        })
      }
    }
  }

  return (
    <>
      <Navigation />
      <section className="p-4 flex flex-col gap-3 justify-center">
        <h2 className="font-bold text-2xl text-center mb-2">로그인</h2>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Input
            label="이메일"
            autoComplete="off"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'signin-email-error' : undefined}
            {...register('email', {
              required: '이메일 주소를 입력하세요.',
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: '올바른 이메일 형식이 아닙니다.',
              },
            })}
            className={
              errors.email
                ? 'border-red-500 ring-red-300'
                : 'border-gray-300 focus:rimg-blue-300'
            }
          />
          {errors.email && (
            <div role="alert" className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </div>
          )}
          <Input
            label="패스워드"
            autoComplete="off"
            aria-invalid={!!errors.password}
            aria-describedby={
              errors.password ? 'signin-password-error' : undefined
            }
            {...register('password', {
              required: '패스워드를 입력하세요.',
              minLength: {
                value: 6,
                message: '6자 이상 입력하세요',
              },
            })}
            className={
              errors.password
                ? 'border-red-500 ring-red-300'
                : 'border-gray-300 focus:ring-blue-300'
            }
          />
          {errors.password && (
            <div role="alert" className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </div>
          )}
          <div className="flex gap-4 justify-center mt-4">
            <Button
              type="submit"
              sign={isSubmitting ? '로그인 중...' : '로그인'}
              aria-disabled={isSubmitting}
            />
            <Button type="button" sign="로그인 취소" />
          </div>
        </form>
      </section>
    </>
  )
}
