import { toast } from 'sonner'
import Button from '@/components/button'
import Navigation from '@/components/navigation'

export default function Notice() {
  return (
    <>
      <Navigation />
      <section className="p-4 flex flex-col">
        <h2 className="font-bold text-2xl text-center mb-2">게시판</h2>
        <div className="flex flex-col gap-3">
          <div className="mx-auto flex justify-start">
            <p className="font-medium">게시글 작성 내용</p>
          </div>
          <div className="inline-flex flex-nowrap">
            <label htmlFor="/" className="sr-only">
              제목
            </label>
            <input
              type="text"
              placeholder="제목을 입력해주세요"
              className="border rounded px-3 py-2 max-w-4xl w-full mx-auto"
            />
          </div>
          <div>
            <label htmlFor="/" className="sr-only">
              내용
            </label>
            <textarea
              placeholder="내용을 입력해주세요"
              className="block border rounded px-3 py-2 max-w-4xl w-full mx-auto"
            />
          </div>
        </div>
        <div className="flex gap-4 justify-center mt-4">
          <Button
            type="submit"
            sign="등록하기"
            onClick={() => toast.success('등록이 완료되었습니다!')}
          />
          <Button type="button" sign="작성취소" />
        </div>
      </section>
    </>
  )
}
