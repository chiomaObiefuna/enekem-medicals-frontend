type ServiceData = {
  id: string;
  name: string;
  slug: string; // used for routing e.g. "gp-consultation"
  mode: "online" | "physical" | "both";
  onlinePrice?: string;
  physicalPrice?: string;
  duration: string;
  description: string;
  suitableFor: string[];
  whatToBring?: string[];
  subServices?: string[]; // for specialists, family planning options
  icon: string; // lucide icon name
}