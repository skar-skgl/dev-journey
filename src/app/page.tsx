import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <main className="container max-w-[1264px] mx-auto items-centerjustify-between px-14 py-24">
      <div className="flex py-2 px-6 ">
        <div className='flex flex-col'>
          <h1 className="text-2xl font-mono py-3 font-light">Welcome to Byteclub!</h1>

          <p className="text-s font-mono font-light">I've poured my passion for development into this space, gathering a treasure trove of dev tools and inspirations that have personally guided my coding journey. And because community means everything in our ever-evolving tech world, I've also highlighted some brilliant developers on SOME that I truly admire and learn from daily. I created this site hoping it could be a catalyst for you, just as these resources have been for me. Whether you've been coding for decades, or you're just typing out your first line, I genuinely believe there's something here for you. So, dive in, explore, and let's grow together in this wonderful world of development.</p>
        </div>
      </div>
    </main>
  )
}
export default Home
