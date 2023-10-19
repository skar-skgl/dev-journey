import Follow from '@/components/Follow'
import StaticFollow from '@/components/GetData'

const UnityCsharpToFollow = () => {
  return (
    <main className="container max-w-[1264px] mx-auto items-centerjustify-between px-14 py-10">
      <div className='flex flex-col py-2 px-6'>
        <div className="flex flex-row relative pt-9 px-6">
          <p className="text-s font-mono font-light">A curated list of awesome game developers</p>
        </div>
        <div className="grid grid-row w-full pt-9">

          <Follow id={'UCmtyQOKKmrMVaKuRXz02jbQ'} />
          <Follow id={'UC7M-Wz4zK8oikt6ATcoTwBA'} />
          <Follow id={'UCEwhtpXrg5MmwlH04ANpL8A'} />
          <Follow id={'UCFK6NCbuCIVzA6Yj1G_ZqCg'} />
          <Follow id={'UCGQVeHxXnvjFlU-bnrVv-OA'} />
          <Follow id={'UCR35rzd4LLomtQout93gi0w'} />

        </div>
      </div>
    </main>
  )
}
export default UnityCsharpToFollow