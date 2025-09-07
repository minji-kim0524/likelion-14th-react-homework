import Button from '@/components/button'
import Navigation from '@/components/navigation'

export default function Profile() {
  return (
    <>
      <Navigation />
      <section className="p-4">
        <h2 className="font-bold text-2xl text-center mb-2">
          사용자 프로필 정보
        </h2>
        <div className="flex gap-30 justify-center items-center mb-10 mt-4">
          <img
            src="/profile_image_minji.png"
            alt="프로필 사진"
            width="200"
            height="200"
            className="border rounded-full pb-4.5"
          />
          <div className="flex flex-col gap-6">
            <p>이름</p>
            <p>이메일</p>
            <p>작성한 게시물</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center mt-4">
          <Button sign="정보수정" />
          <Button sign="로그아웃" />
        </div>
      </section>
    </>
  )
}
