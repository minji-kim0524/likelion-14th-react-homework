import Navigation, { type Pages } from '@/components/navigation'
import Router from '@/routes/Router'
import SignUP from './sign-up'

export default function DashBoard() {
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
