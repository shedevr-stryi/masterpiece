import { Link } from 'react-router'
import { Grid3X3, Star, Gift } from 'lucide-react'

export const CategoriesNav = () => {

  return (
    <div className="py-8">
      <div className="grid grid-cols-3 gap-4 text-center">
        <Link 
          to="/categories"
          className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg"
        >
          <Grid3X3 className="h-8 w-8 text-[#A15C75] mb-2" />
          <span className="text-sm font-medium">Категорії</span>
        </Link>
        
        <Link 
          to="/new"
          className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg"
        >
          <Star className="h-8 w-8 text-[#A15C75] mb-2" />
          <span className="text-sm font-medium">Новинки</span>
        </Link>
        
        <Link 
          to="/promotions" 
          className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg"
        >
          <Gift className="h-8 w-8 text-[#A15C75] mb-2" />
          <span className="text-sm font-medium">Акції</span>
        </Link>
      </div>
    </div>
  );
}