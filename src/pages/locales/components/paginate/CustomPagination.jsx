import { ChevronRight, ChevronLeft } from 'lucide-react';

import {
   Pagination,
   PaginationContent,
   PaginationItem,
   PaginationLink,
} from "@/components/ui/pagination"
import PropTypes from 'prop-types';
import { useParamQuery } from '@/hooks/useParams';

export function CustomPagination({ localesQuery }) {
   const { params, setParams } = useParamQuery()

   return (
      <div className="w-fit mx-auto">
         <Pagination>
            <PaginationContent>
               <PaginationItem>
                  {
                     localesQuery.isLoading
                        ? <></>
                        : <button
                           className='bg-white text-black disabled:opacity-35'
                           disabled={
                              !((Number(params.get('page')) || localesQuery.data.page) > 1)
                           }
                        >
                           <ChevronLeft size={28} />
                        </button>
                  }
               </PaginationItem>

               <PaginationItem>
                  {
                     localesQuery.isLoading
                        ? <PaginationLink >...</PaginationLink>
                        : [localesQuery.data.page_total].map((page) => (

                           <PaginationLink key={page}
                              // href="#"
                              className="w-6 h-7 cursor-pointer"
                              isActive={params.get('page') == page }

                              onClick={() => setParams('page', page )}
                           >
                              {page}
                           </PaginationLink>
                        ))
                  }

               </PaginationItem>

               <PaginationItem>
                  {
                     localesQuery.isLoading
                        ? <PaginationLink >...</PaginationLink>
                        : <button
                           className='bg-white text-black disabled:opacity-35'
                           disabled={
                              !((Number(params.get('page')) || localesQuery.data.page) < localesQuery.data.page_total)
                           }
                        >
                           <ChevronRight size={28} />
                        </button>
                  }
               </PaginationItem>
            </PaginationContent>
         </Pagination>
      </div>
   )
}

CustomPagination.propTypes = {
   localesQuery: PropTypes.object
}