export function splitName(name: string) {
    const parts = name.trim().split(" ");
    const amount = parts.slice(-2).join(" ");
    const title = parts.slice(0, -3).join(" ");
    const essence = parts.slice(-3, -2).join(" ");
  
    return { title, essence, amount };
  }
  