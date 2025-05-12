
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CaseItemProps {
  name: string;
  image: string;
  price: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  onClick?: () => void;
}

const rarityColors = {
  common: 'from-gray-400 to-gray-600',
  rare: 'from-blue-400 to-blue-600',
  epic: 'from-purple-400 to-purple-600',
  legendary: 'from-[#F97316] to-yellow-600',
};

const CaseItem: React.FC<CaseItemProps> = ({ name, image, price, rarity, onClick }) => {
  return (
    <Card className="overflow-hidden bg-[#262A36] border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#9b87f5]/20 cursor-pointer">
      <div className="relative">
        <div className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-50",
          rarityColors[rarity]
        )} />
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-contain relative z-10 p-4"
        />
        <div className={cn(
          "absolute top-0 right-0 m-2 px-2 py-1 rounded text-xs font-bold text-white",
          rarity === 'common' ? 'bg-gray-500' :
          rarity === 'rare' ? 'bg-blue-500' :
          rarity === 'epic' ? 'bg-purple-500' :
          'bg-[#F97316]'
        )}>
          {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
        </div>
      </div>
      <div className="p-4 bg-[#1A1F2C]">
        <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-[#9b87f5] font-bold">{price} ₽</p>
          <Button 
            size="sm"
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
            onClick={onClick}
          >
            Открыть
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CaseItem;
