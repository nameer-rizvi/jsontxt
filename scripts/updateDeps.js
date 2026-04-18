const packageJson = require("../package.json");
const readline = require("readline");
const { execFileSync } = require("child_process");

// --- Constants ---

const RANGE_PREFIXES = new Set(["^", "~"]);

const MANAGER_COMMANDS = {
  npm: { remove: "uninstall", add: "install" },
  yarn: { add: "up" },
  pnpm: { remove: "remove", add: "add" },
};

// --- Main ---

const devDeps = getPackagesWithRanges(packageJson.devDependencies);

const prodDeps = getPackagesWithRanges(packageJson.dependencies);

const allDeps = [...new Set([...devDeps, ...prodDeps])];

if (!allDeps.length) {
  console.info("⚪ Package has no dependencies to update.");
} else {
  const userAgent = process.env.npm_config_user_agent ?? "";

  const manager = userAgent.split(" ")[0]?.split("/")[0]?.toLowerCase();

  const commands = MANAGER_COMMANDS[manager];

  if (!commands) {
    console.error(`🔴 Unsupported package manager: "${manager}"`);
    process.exit(1);
  }

  const { remove, add } = commands;

  const devFlag = manager === "yarn" ? [] : ["-D"];

  const steps = [
    remove ? [remove, ...allDeps] : null,
    devDeps.length ? [add, ...devFlag, ...devDeps] : null,
    prodDeps.length ? [add, ...prodDeps] : null,
  ].filter(Boolean);

  process.stdout.write("🟠 Package updates in-progress...");

  try {
    for (const args of steps) {
      execFileSync(manager, args, {
        stdio: ["ignore", "pipe", "pipe"],
        encoding: "utf8",
        maxBuffer: 10 * 1024 * 1024,
        env: process.env,
        shell: true,
      });
    }
    clearStatusLine();
    console.info("🟢 Package updates success.");
  } catch (err) {
    clearStatusLine();
    console.error(`🔴 Package updates failed ("${err}").`);
    if (err?.stdout) console.error(String(err.stdout).trim());
    if (err?.stderr) console.error(String(err.stderr).trim());
  }
}

// --- Helpers ---

function getPackagesWithRanges(deps = {}) {
  return Object.entries(deps)
    .filter(([, version]) => RANGE_PREFIXES.has(version.charAt(0)))
    .map(([name]) => name);
}

function clearStatusLine() {
  if (!process.stdout.isTTY) return;
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);
}
