import { Search, Phone, Heart, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button';

export const Header = () => {

  return (
    <header className="border-b container mx-auto px-4">
      <div className="flex justify-end">
        <Button variant="ghost" size="icon">
          <Search className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Phone className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Heart className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
}