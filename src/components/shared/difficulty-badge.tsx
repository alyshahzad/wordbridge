import { Badge } from "@/components/ui/badge";
import type { Difficulty } from "@/lib/types";

const labels: Record<Difficulty, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return <Badge variant={difficulty}>{labels[difficulty]}</Badge>;
}
