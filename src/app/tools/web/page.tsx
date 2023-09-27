import ToolsCard from '@/components/ToolsCard'

const OthersToFollow = () => {
  return (
    <main className="container max-w-[1264px] mx-auto items-centerjustify-between px-14 py-24">
      <div className="flex flex-col py-2 px-6 ">
      <h1 className="text-2xl font-mono py-3 w-fit border-b-2 border-neutral-200 font-light">Web tools</h1>
        <div className="grid grid-row w-full pt-9">

          <ToolsCard item={1} />
          <ToolsCard item={2} />
          <ToolsCard item={3} />
        </div>
      </div>
    </main>
  )
}
export default OthersToFollow