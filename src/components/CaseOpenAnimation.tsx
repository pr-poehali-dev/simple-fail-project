import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface RewardItem {
  name: string;
  image: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  value: number;
}

interface CaseOpenAnimationProps {
  open: boolean;
  onClose: () => void;
  reward: RewardItem | null;
}

const rarityColors = {
  common: "text-gray-400 border-gray-400",
  rare: "text-blue-400 border-blue-400",
  epic: "text-purple-400 border-purple-400",
  legendary: "text-[#F97316] border-[#F97316]",
};

const CaseOpenAnimation: React.FC<CaseOpenAnimationProps> = ({
  open,
  onClose,
  reward,
}) => {
  const [animationStage, setAnimationStage] = useState<
    "opening" | "result" | "completed"
  >("opening");
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (open) {
      setAnimationStage("opening");
      const timer = setTimeout(() => {
        setAnimationStage("result");
        if (
          reward &&
          (reward.rarity === "epic" || reward.rarity === "legendary")
        ) {
          setShowConfetti(true);
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [open, reward]);

  return (
    <Dialog
      open={open}
      onOpenChange={() => animationStage === "completed" && onClose()}
    >
      <DialogContent className="bg-[#1A1F2C] border-[#333] text-white max-w-2xl">
        {animationStage === "opening" && (
          <div className="flex flex-col items-center py-16">
            <div className="animate-spin text-[#9b87f5] mb-6">
              <Icon name="Package" size={64} />
            </div>
            <h2 className="text-2xl font-bold animate-pulse">
              Открываем кейс...
            </h2>
            <p className="text-[#9b87f5] mt-4 text-center">
              Симпл проебал, но у вас еще есть шанс выиграть!
            </p>
          </div>
        )}

        {animationStage === "result" && reward && (
          <div className="flex flex-col items-center py-8">
            {showConfetti && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-fall"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `-${Math.random() * 10}%`,
                      animationDuration: `${Math.random() * 3 + 2}s`,
                      animationDelay: `${Math.random() * 2}s`,
                      backgroundColor: ["#9b87f5", "#F97316", "#ffffff"][
                        Math.floor(Math.random() * 3)
                      ],
                      width: `${Math.random() * 8 + 5}px`,
                      height: `${Math.random() * 8 + 5}px`,
                      borderRadius: "50%",
                    }}
                  />
                ))}
              </div>
            )}

            <h2 className="text-3xl font-bold mb-8">Ваш выигрыш!</h2>

            <div
              className={`border-2 rounded-lg p-6 ${rarityColors[reward.rarity]} animate-bounce-in mb-6`}
            >
              <img
                src={reward.image}
                alt={reward.name}
                className="w-64 h-64 object-contain"
              />
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{reward.name}</h3>
              <p
                className={`text-xl ${rarityColors[reward.rarity].split(" ")[0]}`}
              >
                {reward.value} ₽
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10"
                onClick={() => setAnimationStage("completed")}
              >
                Продать
              </Button>
              <Button
                className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
                onClick={() => setAnimationStage("completed")}
              >
                Забрать
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CaseOpenAnimation;
