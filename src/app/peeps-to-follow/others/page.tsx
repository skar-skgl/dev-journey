import Follow from '@/components/Follow'

const OthersToFollow = () => {
  return (
    <main className="container max-w-[1264px] mx-auto items-centerjustify-between px-14 py-10">
      <div className="flex flex-col py-2 px-6 ">
        <div className="flex flex-row relative pt-9 px-6">
          <p className="text-s font-mono font-light">A curated list of great all sort of developers</p>
        </div>
        <div className="grid grid-row w-full pt-9">

          <Follow id={'UCsBjURrPoezykLs9EqgamOA'} />
          <Follow id={'UC2Xd-TjJByJyK2w1zNwY0zQ'} />
          <Follow id={'UCaSCt8s_4nfkRglWCvNSDrg'} />
          <Follow id={'UCmXmlB4-HJytD7wek0Uo97A'} />
          <Follow id={'UC29ju8bIPH5as8OGnQzwJyA'} />
          <Follow id={'UCSbdMXOI_3HGiFviLZO6kNA'} />

        </div>
      </div>
    </main>
  )
}
export default OthersToFollow