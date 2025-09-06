import Input from '@/components/Input'
import Button from '@/components/button'

export default function SignUP() {
  return (
    <section className="p-2 flex flex-col gap-3">
      <h2 className="font-bold text-2xl text-center mb-2">회원가입</h2>
      <Input label="이름" />
      <Input label="이메일" />
      <Input label="패스워드" />
      <Input label="패스워드 확인" />
      <div className="flex gap-4 justify-center">
        <Button type="submit" sign="가입하기" className="bg-amber-100" />
        <Button type="button" sign="취소(돌아가기)" />
      </div>
    </section>
  )
}
