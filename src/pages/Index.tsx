import React, { useState } from "react";
import Header from "@/components/Header";
import CaseItem from "@/components/CaseItem";
import CaseOpenAnimation from "@/components/CaseOpenAnimation";
import { Button } from "@/components/ui/button";

interface RewardItem {
  name: string;
  image: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  value: number;
}

const cases = [
  {
    id: 1,
    name: "Симпл Классик",
    image:
      "https://images.unsplash.com/photo-1664575198308-3959904fa430?q=80&w=2940&auto=format&fit=crop",
    price: 299,
    rarity: "common" as const,
  },
  {
    id: 2,
    name: "Симпл Премиум",
    image:
      "https://images.unsplash.com/photo-1627130035159-5c1eda572dce?q=80&w=2662&auto=format&fit=crop",
    price: 699,
    rarity: "rare" as const,
  },
  {
    id: 3,
    name: "Симпл Элит",
    image:
      "https://images.unsplash.com/photo-1633793675529-14784ce82176?q=80&w=2864&auto=format&fit=crop",
    price: 1499,
    rarity: "epic" as const,
  },
  {
    id: 4,
    name: "Симпл Ультра",
    image:
      "https://images.unsplash.com/photo-1640006509229-f173bde8a877?q=80&w=2865&auto=format&fit=crop",
    price: 2999,
    rarity: "legendary" as const,
  },
];

const possibleRewards: RewardItem[] = [
  {
    name: "Носки симпла",
    image:
      "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?q=80&w=2912&auto=format&fit=crop",
    rarity: "common",
    value: 150,
  },
  {
    name: "Шапка фаната",
    image:
      "https://images.unsplash.com/photo-1578998987066-88847474f09f?q=80&w=2832&auto=format&fit=crop",
    rarity: "common",
    value: 250,
  },
  {
    name: "Игровая мышь",
    image:
      "https://images.unsplash.com/photo-1652964624386-a21bcc9abd83?q=80&w=2832&auto=format&fit=crop",
    rarity: "rare",
    value: 700,
  },
  {
    name: "Игровая клавиатура",
    image:
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2940&auto=format&fit=crop",
    rarity: "rare",
    value: 1200,
  },
  {
    name: "Игровые наушники",
    image:
      "https://images.unsplash.com/photo-1590658268037-1dfb1bee43b4?q=80&w=2832&auto=format&fit=crop",
    rarity: "epic",
    value: 2000,
  },
  {
    name: "Игровой монитор",
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
            <span className="text-[#9b87f5]">Открывай</span> кейсы,{" "}
            <span className="text-[#F97316]">выигрывай</span> призы
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Симпл проебал, но у тебя есть шанс выиграть крутые призы! Открывай
            кейсы и испытай свою удачу прямо сейчас.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </section>

        <section className="mt-16 p-6 bg-[#1A1F2C] rounded-lg border border-[#333] text-center">
          <h2 className="text-2xl font-bold mb-4">Что такое CASE OPENER?</h2>
          <p className="text-gray-400 mb-4">
            CASE OPENER - это сервис, где вы можете открывать виртуальные кейсы
            и получать реальные призы. Симпл проебал шанс создать такой сервис,
            но мы его создали для вас!
          </p>
          <Button className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 text-white">
            Узнать больше
          </Button>
        </section>
      </main>

      <CaseOpenAnimation
        open={isOpeningCase}
        onClose={() => setIsOpeningCase(false)}
        reward={selectedReward}
      />

      <footer className="bg-[#1A1F2C] border-t border-[#333] p-6 text-center text-gray-400 mt-16">
        <p>© 2025 CASE OPENER. Симпл проебал, но мы нет.</p>
      </footer>
    </div>
  );
};

export default Index;
