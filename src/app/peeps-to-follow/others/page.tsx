import Follow from '@/components/Follow'

const OthersToFollow = () => {
  return (
    <main className="container max-w-[1264px] mx-auto items-centerjustify-between px-14 py-24">
      <div className="flex flex-col py-2 px-6 ">
      <h1 className="text-2xl font-mono py-3 w-fit border-b-2 border-neutral-200 font-light">Others to follow</h1>
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