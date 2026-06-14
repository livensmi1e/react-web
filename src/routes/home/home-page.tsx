import { Link } from "react-router";
import {
  ArrowRight,
  Database,
  Gauge,
  Server,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/shared/components/ui/button";

const checks = [
  ["go api", "net/http, sqlite, slog"],
  ["frontend", "react, vite, typed contracts"],
  ["deploy", "docker compose, caddy, https"],
  ["observe", "prometheus, grafana, loki, tempo"],
];

function HomePage() {
  return (
    <div className="space-y-20">
      <section className="border-b border-terminal-border pb-16">
        <div className="mb-4 text-sm tabular-nums text-terminal-dim">00</div>
        <h1 className="max-w-3xl text-3xl font-medium tracking-tight text-primary md:text-5xl">
          A small production-ish starter for ideas that should ship this
          weekend.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-terminal-muted md:text-base">
          Go backend, React frontend, SQLite, Caddy HTTPS, and a complete VPS
          deploy loop. Quiet defaults, visible internals, no enterprise theater.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/login">
              Open console
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a href="/health">Check backend</a>
          </Button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="mb-2 text-sm tabular-nums text-terminal-dim">01</div>
          <h2 className="text-lg font-medium text-terminal-fg">
            Runtime shape
          </h2>
          <p className="mt-3 text-sm leading-7 text-terminal-muted">
            The template favors boring parts that compose well: local files,
            explicit env, simple HTTP routes, and Docker services you can read
            in one sitting.
          </p>
        </div>

        <div className="border border-terminal-border bg-terminal-surface">
          <div className="flex items-center border-b border-terminal-border px-3 py-2">
            <div className="flex gap-1.5">
              <div className="size-2.5 rounded-full bg-terminal-dim/40" />
              <div className="size-2.5 rounded-full bg-terminal-dim/40" />
              <div className="size-2.5 rounded-full bg-terminal-dim/40" />
            </div>
            <span className="ml-3 text-xs text-terminal-dim">stack</span>
          </div>
          <div className="divide-y divide-terminal-border">
            {checks.map(([name, detail]) => (
              <div
                key={name}
                className="grid grid-cols-[7rem_1fr] gap-4 px-4 py-3 text-sm"
              >
                <span className="text-primary">{name}</span>
                <span className="text-terminal-muted">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Feature icon={Server} title="Small server" text="One Go process with clear files and useful defaults." />
        <Feature icon={Database} title="SQLite first" text="Persistent volume, WAL mode, no database ceremony." />
        <Feature icon={Gauge} title="Visible ops" text="Metrics, logs, traces, and host/container dashboards." />
      </section>
    </div>
  );
}

function Feature({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="border border-terminal-border bg-terminal-surface p-5">
      <Icon className="mb-5 size-5 text-primary" />
      <h3 className="text-sm font-medium text-terminal-fg">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-terminal-muted">{text}</p>
    </div>
  );
}

export default HomePage;
