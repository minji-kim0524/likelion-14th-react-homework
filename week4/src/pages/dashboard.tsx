import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import supabase, { type Profile } from '@/libs/supabase'
import SignUP from './sign-up'

export default function DashBoard() {
  const [user, setUser] = useState<Partial<Profile> | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
    }
    fetchUser()
  })

  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session)

    if (event === 'INITIAL_SESSION') {
      toast('메인 페이지입니다.')
    }
  })
  // const [page, setPage] = useState('signin')

  // const pageRef = useRef()

  function AuthCallBack() {
    const navigate = useNavigate()

    useEffect(() => {
      const handleCallback = async () => {
        const { data, error } = await supabase.auth.exchangeCodeForSession(
          window.location.href
        )

        if (error) {
          console.error('인증실패:', error.message)
          return
        }

        console.log('인증 성공:', data.session)

        navigate('/signin')
      }

      handleCallback()
    }, [navigate])

    return <p>이메일 인증 처리중...</p>
  }

  useEffect(() => {
    // [실습] 최초 마운트 시, Supabase에서 현재 사용자 정보 가져오기
    supabase.auth.getUser().then(async ({ error, data }) => {
      if (error) {
        toast.error(`사용자 검색 오류 발생! ${error.message}`)
      } else {
        const { error: userProfileError, data: userProfile } = await supabase
          .from('profiles')
          .select('username,email,bio')
          .eq('id', data.user.id)
          .single()

        if (userProfileError) {
          toast.error(
            `프로필 데이터 가져오기 오류 발생! ${userProfileError.message}`
          )
        } else {
          setUser(userProfile)
        }
      }
    })
  }, [])

  return (
    <div className="p-2 flex flex-col gap-3">
      <header>
        <h1 className="text-2xl font-bold text-center">
          Supabase를 이용한 4주차 과제
        </h1>
      </header>
      <SignUP />
    </div>
  )
}
