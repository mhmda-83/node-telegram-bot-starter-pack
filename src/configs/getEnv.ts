export default function getEnv(name: string, defaultValue?: string): string {
  const value = process.env[name];
  if (value != null) return value;
  if (defaultValue != null) return defaultValue;
  throw new Error(`Environment ${name} is required.`);
}
