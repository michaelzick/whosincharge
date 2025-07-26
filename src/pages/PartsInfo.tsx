import { parts } from "@/data/parts";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

export const PartsInfo = () => {
  useScrollToTop();
  return (
    <div
      className="min-h-screen bg-background"
      style={{ paddingTop: "calc(var(--nav-height) + 0.5rem)" }}
    >
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Parts Information
          </h1>
          <p className="text-muted-foreground">
            Learn more about each part in the Internal Family Systems model.
          </p>
        </div>

        <div className="space-y-12">
          {parts.map((part) => (
            <div
              key={part.id}
              className="glass-card rounded-xl p-6 backdrop-blur-md border border-border/20"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Card Image */}
                <div className="flex-shrink-0 w-full lg:w-80">
                  <div className="relative rounded-xl overflow-hidden aspect-[2/3] bg-card border border-border/30 shadow-lg">
                    <img
                      src={part.img}
                      alt={part.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Description Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">
                      {part.cat === "manager" && "🛡️"}
                      {part.cat === "firefighter" && "🚨"}
                      {part.cat === "exile" && "💔"}
                    </span>
                    <h2 className="text-2xl font-bold text-foreground">
                      {part.label}
                    </h2>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                      {part.cat.charAt(0).toUpperCase() + part.cat.slice(1)}
                    </span>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    {part.description.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-foreground/90 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
