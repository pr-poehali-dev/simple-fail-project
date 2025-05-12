
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-[#1A1F2C] border-b border-[#333] p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h1 className="text-3xl font-bold text-center md:text-left">
            <span className="text-[#F97316] tracking-wider">САХАЛАР УРУЙ АЙХАЛ</span>
          </h1>
          <div className="text-xl font-bold text-[#9b87f5] mt-1">CASE-BATTLE</div>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10"
          >
            <Icon name="SwordIcon" className="mr-2 h-4 w-4" fallback="Swords" />
            Мои битвы
          </Button>
          <Button 
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
          >
            <Icon name="Plus" className="mr-2 h-4 w-4" />
            Пополнить
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
