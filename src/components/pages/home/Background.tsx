import { LightRays } from "@/components/ui/light-rays";

export default function Background() {
  return (
    <div className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-xl -z-10">
      <LightRays color="#e6e2d8"/>
    </div>
  );
}
