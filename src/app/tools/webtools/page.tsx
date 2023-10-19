import ToolsCard from '@/components/ToolsCard'

const OthersToFollow = () => {
  return (
    <main className="container max-w-[1264px] mx-auto items-centerjustify-between px-14 py-10">
      <div className="flex flex-col py-2 px-6 ">
        <div className="flex flex-row relative pt-9 px-6">
          <p className="text-s font-mono font-light">A curated list of great webtools</p>
        </div>
        <div className="grid grid-row w-full pt-4">

          <ToolsCard item={1} />
          <ToolsCard item={2} />
          <ToolsCard item={3} />
        </div>
      </div>
    </main>
  )
}
export default OthersToFollow