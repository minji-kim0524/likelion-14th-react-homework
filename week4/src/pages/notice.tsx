import { toast } from 'sonner'
import Input from '@/components/Input'
import Button from '@/components/button'

export default function Notice() {
  type Pages = 'signin' | 'signup' | 'prpfile' | 'notice'

  return (
    <section className="p-2 flex flex-col gap-3">
      <h2 className="font-bold text-2xl text-center mb-2">게시판</h2>
      <div>
        <label htmlFor="/" className="mr-2">
          제목
        </label>
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          className="border rounded px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="/" className="block mb-2">
          내용
        </label>
        <textarea
          placeholder="내용을 입력해주세요"
          className="border rounded px-3 py-2 max-w-4xl w-full h-fit"
        />
      </div>
      <div className="flex gap-4 justify-center">
        <Button
          type="submit"
          sign="등록하기"
          onClick={() => toast.success('등록이 완료되었습니다!')}
        />
        <Button type="button" sign="작성취소" />
      </div>
    </section>
  )
}
