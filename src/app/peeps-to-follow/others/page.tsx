import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const OthersToFollow = () => 
{
  return (
    <main className="container max-w-[1264px] mx-auto items-centerjustify-between px-14 py-24">
      <div className="flex py-2 px-6 ">
        <div className='flex flex-col'>
          <h1 className="text-2xl font-mono py-3 font-light">Others to follow</h1>

          <p className="text-s font-mono font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed. Tempus urna et pharetra pharetra massa massa ultricies. Eget nullam non nisi est. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Praesent tristique magna sit amet purus gravida quis blandit turpis. Ac auctor augue mauris augue neque gravida in. Commodo quis imperdiet massa tincidunt. Platea dictumst vestibulum rhoncus est. Sociis natoque penatibus et magnis dis parturient. Nunc sed augue lacus viverra vitae congue eu consequat ac. Sem et tortor consequat id porta nibh venenatis cras.</p>
        </div>
      </div>
    </main>
  )
}
export default OthersToFollow