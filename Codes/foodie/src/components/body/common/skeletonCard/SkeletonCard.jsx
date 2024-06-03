import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = ({ count }) => {
  return (
    <div>
        <Skeleton count={count} containerClassName="flex flex-wrap gap-y-12 justify-between p-8" className='h-[240px] w-[170px] sm:w-[190px] md:h-[250px] lg:w-[350px] xl:w-[380px] rounded-[16px]' />
    </div>
  )
}

export default SkeletonCard;