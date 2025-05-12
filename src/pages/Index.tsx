
import React, { useState } from "react";
import Header from "@/components/Header";
import CaseItem from "@/components/CaseItem";
import CaseOpenAnimation from "@/components/CaseOpenAnimation";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface RewardItem {
  name: string;
  image: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  value: number;
}

const cases = [
  {
    id: 1,
    name: "Саха Классик",
    image:
      "https://images.unsplash.com/photo-1664575198308-3959904fa430?q=80&w=2940&auto=format&fit=crop",
    price: 299,
    rarity: "common" as const,
  },
  {
    id: 2,
    name: "Саха Премиум",
    image:
      "https://images.unsplash.com/photo-1627130035159-5c1eda572dce?q=80&w=2662&auto=format&fit=crop",
    price: 699,
    rarity: "rare" as const,
  },
  {
    id: 3,
    name: "Олонхо Элит",
    image:
      "https://images.unsplash.com/photo-1633793675529-14784ce82176?q=80&w=2864&auto=format&fit=crop",
    price: 1499,
    rarity: "epic" as const,
  },
  {
    id: 4,
    name: "Уруй-Айхал Ультра",
    image:
      "https://images.unsplash.com/photo-1640006509229-f173bde8a877?q=80&w=2865&auto=format&fit=crop",
    price: 2999,
    rarity: "legendary" as const,
  },
];

const activeBattles = [
  {
    id: 1,
    name: "Битва Чысхаана",
    participants: 2,
    currentUsers: 1,
    totalCases: 4,
    prizePool: 1200,
  },
  {
    id: 2,
    name: "Турнир Боотуров",
    participants: 4,
    currentUsers: 2,
    totalCases: 8,
    prizePool: 3500,
  },
  {
    id: 3,
    name: "Тумсуу Мастер",
    participants: 3,
    currentUsers: 0,
    totalCases: 6,
    prizePool: 2400,
  },
];

const possibleRewards: RewardItem[] = [
  {
    name: "Хомус традиционный",
    image:
      "https://images.unsplash.com/photo-1593078165899-c7d2ac0d6aea?q=80&w=2787&auto=format&fit=crop",
    rarity: "common",
    value: 150,
  },
  {
    name: "Чороон мини",
    image:
      "https://images.unsplash.com/photo-1578998987066-88847474f09f?q=80&w=2832&auto=format&fit=crop",
    rarity: "common",
    value: 250,
  },
  {
    name: "Шапка-уранхай",
    image:
      "https://images.unsplash.com/photo-1652964624386-a21bcc9abd83?q=80&w=2832&auto=format&fit=crop",
    rarity: "rare",
    value: 700,
  },
  {
    name: "Кытыйа резная",
    image:
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2940&auto=format&fit=crop",
    rarity: "rare",
    value: 1200,
  },
  {
    name: "Ысыах комплект",
    image:
      "https://images.unsplash.com/photo-1590658268037-1dfb1bee43b4?q=80&w=2832&auto=format&fit=crop",
    rarity: "epic",
    value: 2000,
  },
  {
    name: "Золотой Сэргэ",
    image:
      "https://images.unsplash.com/photo-1616588589676-62b3bd4108f6?q=80&w=2902&auto=format&fit=crop",
    rarity: "legendary",
    value: 5000,
  },
];

const Index = () => {
  const [isOpeningCase, setIsOpeningCase] = useState(false);
  const [selectedReward, setSelectedReward] = useState<RewardItem | null>(null);

  const handleOpenCase = (
    caseRarity: "common" | "rare" | "epic" | "legendary",
  ) => {
    // Фильтруем возможные награды по редкости и ниже
    const possibleRarities = ["common", "rare", "epic", "legendary"];
    const rarityIndex = possibleRarities.indexOf(caseRarity);
    const eligibleRewards = possibleRewards.filter(
      (reward) => possibleRarities.indexOf(reward.rarity) <= rarityIndex,
    );

    // Выбираем случайную награду
    const randomReward =
      eligibleRewards[Math.floor(Math.random() * eligibleRewards.length)];
    setSelectedReward(randomReward);
    setIsOpeningCase(true);
  };

  return (
    <div className="min-h-screen bg-[#0e1016] text-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-[#F97316]">CASE-BATTLE</span> - 
            <span className="text-[#9b87f5]"> сразись за лучшие призы!</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Участвуйте в битвах за кейсы, открывайте их и выигрывайте ценные призы.
            Создайте свою битву или присоединитесь к существующей!
          </p>
        </section>

        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#F97316]">Активные битвы</h2>
            <Button className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 text-white">
              <Icon name="Plus" className="mr-2 h-4 w-4" />
              Создать битву
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeBattles.map((battle) => (
              <div key={battle.id} className="bg-[#1A1F2C] border border-[#333] rounded-lg overflow-hidden">
                <div className="bg-[#262A36] p-4">
                  <h3 className="text-xl font-bold text-white">{battle.name}</h3>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-400">Участники:</span>
                    <span className="text-[#F97316] font-bold">{battle.currentUsers}/{battle.participants}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-gray-400">Кейсы:</span>
                    <span className="text-white">{battle.totalCases}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-gray-400">Призовой фонд:</span>
                    <span className="text-[#9b87f5] font-bold">{battle.prizePool} ₽</span>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <Icon name="Users" className="text-gray-400 mr-2" />
                    <span className="text-gray-400">{battle.currentUsers}/{battle.participants}</span>
                  </div>
                  <Button 
                    className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
                    disabled={battle.currentUsers === battle.participants}
                  >
                    {battle.currentUsers === battle.participants ? "Полная" : "Присоединиться"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#F97316] mb-6">Доступные кейсы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cases.map((caseItem) => (
              <CaseItem
                key={caseItem.id}
                name={caseItem.name}
                image={caseItem.image}
                price={caseItem.price}
                rarity={caseItem.rarity}
                onClick={() => handleOpenCase(caseItem.rarity)}
              />
            ))}
          </div>
        </section>

        <section className="mt-16 p-6 bg-[#1A1F2C] rounded-lg border border-[#333] text-center">
          <h2 className="text-2xl font-bold mb-4">Что такое CASE-BATTLE?</h2>
          <p className="text-gray-400 mb-6">
            CASE-BATTLE - это захватывающий сервис, где вы можете сражаться с другими игроками за лучшие призы. 
            Создайте свою битву, пригласите друзей и откройте кейсы - победитель получает все!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 text-white">
              <Icon name="Info" className="mr-2 h-4 w-4" />
              Подробнее
            </Button>
            <Button variant="outline" className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10">
              <Icon name="BookOpen" className="mr-2 h-4 w-4" />
              Правила
            </Button>
          </div>
        </section>
      </main>

      <CaseOpenAnimation
        open={isOpeningCase}
        onClose={() => setIsOpeningCase(false)}
        reward={selectedReward}
      />

      <footer className="bg-[#1A1F2C] border-t border-[#333] p-6 text-center text-gray-400 mt-16">
        <p>© 2025 САХАЛАР УРУЙ АЙХАЛ | CASE-BATTLE. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;
