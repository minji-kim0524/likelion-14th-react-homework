import Input from '@/components/Input'
import Button from '@/components/button'

export default function SingIn() {
  return (
    <section className="p-2 flex flex-col gap-3">
      <h2 className="font-bold text-2xl text-center mb-2">로그인</h2>
      <Input label="이메일" />
      <Input label="패스워드" />
      <div className="flex gap-4 justify-center">
        <Button type="submit" sign="로그인" />
        <Button type="button" sign="로그인 취소" />
      </div>
    </section>
  )
}
