
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-[#1A1F2C] border-b border-[#333] p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="text-2xl font-bold text-white flex items-center">
          <span className="text-[#9b87f5]">CASE</span>
          <span className="text-[#F97316] ml-1">OPENER</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10"
        >
          <Icon name="Package" className="mr-2 h-4 w-4" />
          Мои кейсы
        </Button>
        <Button 
          className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 text-white"
        >
          <Icon name="Plus" className="mr-2 h-4 w-4" />
          Пополнить
        </Button>
      </div>
    </header>
  );
};

export default Header;
